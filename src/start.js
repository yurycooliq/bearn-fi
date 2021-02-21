const Table = require("console-table-printer").Table
const formatToDollarView = require('./format')
const doMath = require('./do-math')
const watchList = require('./watchList')
const balances = require('./../initial-balances')

const main = async () => {
    flashLog(watchList)
    setInterval(() => flashLog(watchList), 5000)
}

const flashLog = async lpTokensArray => {
    const promises = lpTokensArray.map(tokenInfo => {
        const deposit = balances.find(balance => balance.name === tokenInfo.name)
        return doMath(
            tokenInfo.poolAddress,
            tokenInfo.token1ID,
            tokenInfo.token2ID,
            tokenInfo.poolID,
            tokenInfo.rewardPoolID,
            tokenInfo.token1PriceSource,
            tokenInfo.token2PriceSource,
            tokenInfo.name,
            deposit.balance
        ).catch(console.error)
    })

    Promise.all(promises).then(values => {
        const p = new Table({
            title: `bEarn.fi Portfolio Tracker at ${(new Date).toLocaleTimeString()}`,
            columns: [
                { name: "name",             title: "Pair",              alignment: "left" ,     color: "cyan"  },
                { name: "lp_token_price",   title: "LP token USD",      alignment: "right",     color: "green" },
                { name: "token1_price",     title: "Token 1 USD",       alignment: "right",     color: "green" },
                { name: "token2_price",     title: "Token 2 USD",       alignment: "right",     color: "green" },
                { name: "TVL",              title: "TVL (on Pancake)",  alignment: "right",     color: "green" },
                { name: "lp_amount",        title: "LP Amount",         alignment: "right",     color: "green" },
                { name: "bdo_reward",       title: "BDO Reward",        alignment: "right",     color: "green" },
                { name: "lp_cost",          title: "LP Cost",           alignment: "right",     color: "green" },
                { name: "profit",           title: "Profit",            alignment: "right",     color: "white_bold" }
            ],
            filter: row => +row.lp_amount > 0
        })

        p.addRows(values)

        console.clear()
        p.printTable()

        console.log("URL:", "https://bearn.fi/bvaults") // Clickable in most consoles

        // Total LP in USD
        const totals = values.map(value => {
            return parseFloat(value.lp_cost.substring(1))
        })
        const total = totals.reduce((a, b) => a + b, 0)
        console.log(`Total LP Cost: ${formatToDollarView(total)}`)

        // Total Profit
        const profits = values.map(value => {
            return parseFloat(value.profit.replace('$', ''))
        })
        const profit = profits.reduce((a, b) => a + b, 0)
        console.log(`Total Profit: ${formatToDollarView(profit)}`)
    }).catch(console.log)
}

main()