const { get } = require('axios')

const formatToDollarView = num => {
    const negative = num < 0
    const symbol = negative ? "-$" : "$"
    if (negative) num *= -1
    return symbol + num.toLocaleString('en-US', {maximumFractionDigits: 2})
}

const getPrice = async (tokenID, priceSource) => {
    const price = await get(`https://api.coingecko.com/api/v3/coins/${tokenID}/tickers`)
    return price && price.data.tickers[priceSource].converted_last.usd
}

const sumDollars = (values, needle) => {
    const sum = values.map(value => {
        return parseFloat(value[needle].replace('$', ''))
    })
    return formatToDollarView(sum.reduce((a, b) => a + b, 0))
}

module.exports.formatToDollarView = formatToDollarView
module.exports.getPrice = getPrice
module.exports.sumDollars = sumDollars
