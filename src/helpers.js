const { get } = require('axios')

const formatToDollarView = num => {
    const negative = num < 0
    const symbol = negative ? "-$" : "$"
    if (negative) num *= -1
    return symbol + num.toLocaleString('en-US', {maximumFractionDigits: 0}) + '.' + num.toFixed(2).split(".")[1]
}

const getPrice = async (tokenID, priceSource) => {
    const price = await get(`https://api.coingecko.com/api/v3/coins/${tokenID}/tickers`)
    return price && price.data.tickers[priceSource].converted_last.usd
}

const sumDollars = (values, needle) => {
    const sum = values.map(value => {
        return parseFloat(value[needle].replace('$', '').replace(',', ''))
    })
    return formatToDollarView(sum.reduce((a, b) => a + b, 0))
}

const updatePrices = watchList => {
    // return price && price.data.tickers[priceSource].converted_last.usd
    
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

module.exports = {
    formatToDollarView: formatToDollarView,
    getPrice: getPrice,
    sumDollars: sumDollars,
    updatePrices: updatePrices
}
