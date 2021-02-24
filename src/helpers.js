const { get } = require('axios')

const formatToDollarView = num => {
    const negative = num < 0
    const symbol = negative ? "-$" : "$"
    if (negative) num *= -1
    const final = symbol + Math.floor(num).toLocaleString('en-US') + '.' + floorFigure(num, 2).split('.')[1]
    return color(final, negative? 'red' : 'green')
}

const formatToPercentageWiew = num => {
    const negative = num < 0
    const plus = negative? '' : '+'
    const final = (plus + num.toFixed(2)).padStart(6, ' ') +'%'
    return color(final, negative? 'red' : 'green')
}

const getPrice = async (tokenID, priceSource) => {
    const price = await get(`https://api.coingecko.com/api/v3/coins/${tokenID}/tickers`)
    return price && price.data.tickers[priceSource].converted_last.usd
}

const sumDollars = (values, needle) => {
    const sum = values.map(value =>  value[needle])
    return formatToDollarView(sum.reduce((a, b) => a + b, 0))
}

const summ = (values, needle) => {
    const sum = values.map(value =>  value[needle])
    return sum.reduce((a, b) => a + b, 0).toFixed(6)
}

const updatePrices = watchList => {
    const ids = {}
    watchList.forEach( lpInfo => {
        ids[lpInfo.token1ID] = undefined
        ids[lpInfo.token2ID] = undefined
        ids[lpInfo.tokenID] = undefined
    })
    
    let ids_string = ''
    Object.keys(ids).forEach( key => {
        ids_string = ids_string + key + '%2c'
    })
    
    ids_string = ids_string.slice(0, -3)
    return get(`https://api.coingecko.com/api/v3/simple/price?ids=${ids_string}&vs_currencies=usd&include_24hr_change=true`)
}

const color = (str, color = 'white') => {
    switch (color) {
        case 'green':
            return  `\x1b[92m${str}\x1b[0m`
        case 'red':
            return  `\x1b[91m${str}\x1b[0m`
        case 'yellow':
            return  `\x1b[93m${str}\x1b[0m`
        case 'link':
            return  `\x1b[4m\x1b[94m${str}\x1b[0m`
        case 'cyan':
            return  `\x1b[36m\x1b[94m${str}\x1b[0m`
        default:
            return  `\x1b[0m${str}\x1b[0m`
    }
   
}

const floorFigure = (figure, decimals) => {
    if (!decimals) decimals = 2
    var d = Math.pow(10,decimals)
    return (parseInt(figure*d)/d).toFixed(decimals)
}

const formatRow = row => {
    const formattedRow = {}
    if (row.isSingle){
        formattedRow.name           = color(row.name, 'cyan')
        formattedRow.token1_price    = formatToDollarView(row.tokenPrice) + ' | ' + formatToPercentageWiew(row.tokenUsd24hChange)
        formattedRow.lp_token_price = formatToDollarView(row.tokenPrice),
        formattedRow.TVL            = formatToDollarView(row.tvl),
        formattedRow.lp_amount      = row.amount.toFixed(6),
        formattedRow.bdo_reward     = row.bdoReward.toFixed(6),
        formattedRow.bfi_reward     = row.bfiReward.toFixed(6),
        formattedRow.mdo_reward     = row.mdoReward.toFixed(6),
        formattedRow.lp_cost        = formatToDollarView(row.lpCost),
        formattedRow.profit         = formatToDollarView(row.lpCost - row.deposit)
        formattedRow.apyDaily       = formatToPercentageWiew(row.apy)
    }else{
        formattedRow.name           = color(row.name, 'cyan')
        formattedRow.token1_price   = formatToDollarView(row.token1Price) + ' | ' + formatToPercentageWiew(row.token1Usd24hChange)
        formattedRow.token2_price   = formatToDollarView(row.token2Price) + ' | ' + formatToPercentageWiew(row.token2Usd24hChange)
        formattedRow.lp_token_price = formatToDollarView(row.lpTokenPrice),
        formattedRow.TVL            = formatToDollarView(row.tvl),
        formattedRow.lp_amount      = row.amount.toFixed(6),
        formattedRow.bdo_reward     = row.bdoReward.toFixed(6),
        formattedRow.bfi_reward     = row.bfiReward.toFixed(6),
        formattedRow.mdo_reward     = row.mdoReward.toFixed(6),
        formattedRow.lp_cost        = formatToDollarView(row.lpCost),
        formattedRow.profit         = formatToDollarView(row.lpCost - row.deposit)
        formattedRow.apyDaily       = formatToPercentageWiew(row.apy)
    }

    return formattedRow
}

const getApy = async () => {
    const responce = await get(`https://api.bdollar.fi/api/bvault/get-vaults`)
    const vaults = responce.data.data.vaultInfos
    const apys = {}
    for (const pool in vaults){
        apys[vaults[pool].pid] = vaults[pool].apyDaily
    }
    return apys
}

module.exports = {
    formatToDollarView: formatToDollarView,
    formatToPercentageWiew: formatToPercentageWiew,
    getPrice: getPrice,
    sumDollars: sumDollars,
    updatePrices: updatePrices,
    color:color,
    formatRow: formatRow,
    getApy: getApy,
    summ: summ
}


