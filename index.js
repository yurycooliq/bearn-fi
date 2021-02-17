require('dotenv').config({})

const { get, post } = require('axios')
const BN = require('bn.js')
const Web3 = require('web3')
const web3 = new Web3(process.env.BSC_RPC)
const poolABI = require('./abis/pool.json')
const vaultABI = require('./abis/vault.json')
const user = process.env.USER_ADDRESS

const result = {
    prices: {},
    pool: {},
    vault: {},
}

const pool = new web3.eth.Contract(
    poolABI,
    "0xd245BDb115707730136F0459e2aa9b0b19023724",
    web3
)

const vault = new web3.eth.Contract(
    vaultABI,
    "0xB390B07fcF76678089cb12d8E615d5Fe494b01Fb",
    web3
)

const getPrices = async () => {
    const mdo = await get('https://api.coingecko.com/api/v3/coins/midas-dollar/tickers')
    const usdt = await get('https://api.coingecko.com/api/v3/coins/tether/tickers')
    result.prices.mdo = mdo.data.tickers[2].converted_last.usd
    result.prices.usdt = usdt.data.tickers[0].converted_last.usd
}

const calcLPPrice = async () => {
    const totalSupply = await pool.methods.totalSupply().call() / 1e18
    const reserves = await pool.methods.getReserves().call()
    result.pool.lpTokenPrice =
        ((reserves[0] / 1e18 * result.prices.mdo) + (reserves[1] / 1e18 * result.prices.usdt)) / totalSupply
    result.pool.tvl = result.pool.lpTokenPrice * totalSupply
}

const calcDepo = async () => {
    const lpAmount = await vault.methods.stakedWantTokens("5", user).call() / 1e18
    result.vault.amount = lpAmount
    result.vault.depo = lpAmount * result.pool.lpTokenPrice
    result.vault.unclaimedLP = await vault.methods.pendingReward("5", "1", user).call() / 1e18
    result.vault.depoWithUnclaimed = result.vault.unclaimedLP * result.pool.lpTokenPrice + result.vault.depo
}

const init = async () => {
    await getPrices()
    await calcLPPrice()
    await calcDepo()
    console.log(result)
}

init()