require('dotenv').config({})

// To use another pair modify this values
const poolAddress = "0xd245BDb115707730136F0459e2aa9b0b19023724"
const vaultAddress = "0xB390B07fcF76678089cb12d8E615d5Fe494b01Fb"
const token1ID = "midas-dollar"
const token2ID = "tether"
const poolID = "5"
const rewardPoolID = "1"
const token1PriceSource = 2
const token2PriceSource = 0

// Don't touch
const { get } = require('axios')
const Web3 = require('web3')
const web3 = new Web3(process.env.BSC_RPC)
const poolABI = require('./abis/pool.json')
const vaultABI = require('./abis/vault.json')
const user = process.env.USER_ADDRESS
const pool = new web3.eth.Contract(poolABI, poolAddress, web3)
const vault = new web3.eth.Contract(vaultABI, vaultAddress, web3)
const doMath = async () => {
    let token1Price = await get(`https://api.coingecko.com/api/v3/coins/${token1ID}/tickers`)
    let token2Price = await get(`https://api.coingecko.com/api/v3/coins/${token2ID}/tickers`)
    token1Price = token1Price.data.tickers[token1PriceSource].converted_last.usd
    token2Price = token2Price.data.tickers[token2PriceSource].converted_last.usd
    const totalSupply = await pool.methods.totalSupply().call() / 1e18
    const reserves = await pool.methods.getReserves().call()
    const lpTokenPrice = 
        ((reserves[0] / 1e18 * token1Price) + (reserves[1] / 1e18 * token2Price)) / totalSupply;
    const tvl = lpTokenPrice * totalSupply
    const amount = await vault.methods.stakedWantTokens(poolID, user).call() / 1e18
    const unclaimed = await vault.methods.pendingReward(poolID, rewardPoolID, user).call() / 1e18
    const total = amount + unclaimed
    console.log("\nResult:\n-------------------------------------------------------------")
    console.log(`LP token price: $${lpTokenPrice.toFixed(2)}, TVL (on pool, not vault): $${tvl.toFixed(2)}.`)
    console.log(`LP Token amount is ${amount} + unclaimed ${unclaimed} (total ${total} Cake LP).`)
    console.log(`Depo is $${(total * lpTokenPrice).toFixed(2)} (claimed $${(amount * lpTokenPrice).toFixed(2)} + unclaimed $${(unclaimed * lpTokenPrice).toFixed(2)}).`)
    console.log("-------------------------------------------------------------")
}

doMath()
