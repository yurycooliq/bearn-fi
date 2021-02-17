require('dotenv').config({})
const { get } = require('axios')
const Web3 = require('web3')
const web3 = new Web3(process.env.BSC_RPC)
const user = process.env.USER_ADDRESS

const getPrice = async (tokenID, priceSource) => {
    const price = await get(`https://api.coingecko.com/api/v3/coins/${tokenID}/tickers`)
    return price.data.tickers[priceSource].converted_last.usd
}

module.exports = async (poolAddress, token1ID, token2ID, poolID, rewardPoolID, token1PriceSource, token2PriceSource, name) => {
    const pool = new web3.eth.Contract(require('./abis/pool.json'), poolAddress, web3)
    const vault = new web3.eth.Contract(require('./abis/vault.json'), "0xB390B07fcF76678089cb12d8E615d5Fe494b01Fb", web3)
    const token1Price = await getPrice(token1ID, token1PriceSource)
    const token2Price = await getPrice(token2ID, token2PriceSource)
    const totalSupply = await pool.methods.totalSupply().call() / 1e18
    const reserves = await pool.methods.getReserves().call()
    const lpTokenPrice = 
        ((reserves[0] / 1e18 * token1Price) + (reserves[1] / 1e18 * token2Price)) / totalSupply;
    const tvl = lpTokenPrice * totalSupply
    const amount = await vault.methods.stakedWantTokens(poolID, user).call() / 1e18
    const unclaimed = await vault.methods.pendingReward(poolID, rewardPoolID, user).call() / 1e18
    const total = amount + unclaimed
    console.log(`Result (${name}):\n-------------------------------------------------------------`)
    console.log(`LP token price: $${lpTokenPrice.toFixed(2)}`)
    console.log(`TVL (on Pancake): $${tvl.toFixed(2)}`)
    console.log(`LP amount: ${amount} + ${unclaimed} (pending) = ${total} Cake LP`)
    console.log(`Your LP's cost: $${(total * lpTokenPrice).toFixed(2)}`)
    console.log("-------------------------------------------------------------")
}
