require('dotenv').config({})
const { formatToDollarView, getPrice } = require('./helpers')
const Web3 = require('web3')
const web3 = new Web3(process.env.BSC_RPC)
const user = process.env.USER_ADDRESS

module.exports = async (poolAddress, tokenID, poolID, name, deposit = 0, prices) => {
    const pool = new web3.eth.Contract(require('./abis/pool.json'), poolAddress, web3)
    const vault = new web3.eth.Contract(require('./abis/vault.json'), "0xB390B07fcF76678089cb12d8E615d5Fe494b01Fb", web3)

    const tokenPrice    = +prices[tokenID].usd
    const totalSupply   = +(await pool.methods.totalSupply().call())
    const amount        = +(await vault.methods.stakedWantTokens(poolID, user).call()) / 1e18
    const bdoReward     = +(await vault.methods.pendingReward(poolID, 1, user).call()) / 1e18
    const tvl           = tokenPrice * totalSupply / 1e18
    const lpCost        = amount * tokenPrice

    const info = {}
    info.name           = name
    info.lp_token_price = formatToDollarView(tokenPrice),
    info.token1_price   = formatToDollarView(tokenPrice)
    info.token2_price   = ""
    info.TVL            = formatToDollarView(tvl),
    info.lp_amount      = amount.toFixed(6),
    info.bdo_reward     = bdoReward.toFixed(6),
    info.lp_cost        = formatToDollarView(lpCost),
    info.profit         = formatToDollarView(lpCost - deposit) 

    return info
}
