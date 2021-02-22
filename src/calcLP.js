require('dotenv').config({})
const { formatToDollarView, formatToPercentageWiew, color } = require('./helpers')
const Web3 = require('web3')
const web3 = new Web3(process.env.BSC_RPC)
const user = process.env.USER_ADDRESS

module.exports = async (poolAddress, token1ID, token2ID, poolID, name, deposit = 0, prices, totals) => {
    const pool = new web3.eth.Contract(require('./abis/pool.json'), poolAddress, web3)
    const vault = new web3.eth.Contract(require('./abis/vault.json'), "0xB390B07fcF76678089cb12d8E615d5Fe494b01Fb", web3)

    const rawValues = {}
    rawValues.isSingle              = false
    rawValues.name                  = name
    rawValues.deposit               = deposit
    rawValues.token1Price           = +prices[token1ID].usd
    rawValues.token2Price           = +prices[token2ID].usd
    rawValues.token1Usd24hChange    = +prices[token1ID].usd_24h_change
    rawValues.token2Usd24hChange    = +prices[token2ID].usd_24h_change
    rawValues.totalSupply           = +(await pool.methods.totalSupply().call())
    rawValues.reserves              = await pool.methods.getReserves().call()
    rawValues.amount                = +(await vault.methods.stakedWantTokens(poolID, user).call()) / 1e18
    rawValues.amount                = rawValues.amount < 1 ? 0 : rawValues.amount
    rawValues.bfiReward             = +(await vault.methods.pendingReward(poolID, 0, user).call()) / 1e18
    rawValues.bdoReward             = +(await vault.methods.pendingReward(poolID, 1, user).call()) / 1e18
    rawValues.mdoReward             = +(await vault.methods.pendingReward(poolID, 2, user).call()) / 1e18
    rawValues.lpTokenPrice          = ((+rawValues.reserves[0] * rawValues.token1Price) + (+rawValues.reserves[1] * rawValues.token2Price)) / rawValues.totalSupply
    rawValues.tvl                   = rawValues.lpTokenPrice * rawValues.totalSupply / 1e18
    rawValues.lpCost                = rawValues.amount * rawValues.lpTokenPrice
    rawValues.profit                = rawValues.lpCost - rawValues.deposit

    return rawValues
}
