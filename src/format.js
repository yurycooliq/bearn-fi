module.exports = num => {
    const negative = num < 0
    const symbol = negative ? "-$" : "$"
    if (negative) num *= -1
    return symbol + num.toLocaleString('en-US', {maximumFractionDigits: 2})
}