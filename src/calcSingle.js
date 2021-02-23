require('dotenv').config({})
const Web3 = require('web3')
const web3 = new Web3(process.env.BSC_RPC)
const user = process.env.USER_ADDRESS

module.exports = async (poolAddress, tokenID, poolID, name, deposit = 0, prices, apys) => {
    const pool = new web3.eth.Contract(require('./abis/pool.json'), poolAddress, web3)
    const vault = new web3.eth.Contract(require('./abis/vault.json'), "0xB390B07fcF76678089cb12d8E615d5Fe494b01Fb", web3)

    const rawValues = {}
    rawValues.isSingle              = true
    rawValues.name                  = name
    rawValues.deposit               = deposit
    rawValues.tokenPrice            = +prices[tokenID].usd
    rawValues.tokenUsd24hChange     = +prices[tokenID].usd_24h_change
    rawValues.totalSupply           = +(await pool.methods.totalSupply().call())
    rawValues.amount                = +(await vault.methods.stakedWantTokens(poolID, user).call()) / 1e18
    rawValues.bfiReward             = +(await vault.methods.pendingReward(poolID, 0, user).call()) / 1e18
    rawValues.bdoReward             = +(await vault.methods.pendingReward(poolID, 1, user).call()) / 1e18
    rawValues.mdoReward             = +(await vault.methods.pendingReward(poolID, 2, user).call()) / 1e18
    rawValues.tvl                   = rawValues.tokenPrice * rawValues.totalSupply / 1e18
    rawValues.lpCost                = rawValues.amount * rawValues.tokenPrice
    rawValues.profit                = rawValues.lpCost - rawValues.deposit
    rawValues.apy                   = apys[poolID]

    return rawValues
}
