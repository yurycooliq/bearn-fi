const Table = require("console-table-printer").Table
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
            title: `bearn.fi at ${(new Date).toLocaleTimeString()}`,
            columns: [
                { name: "name",             title: "Pair name",         alignment: "left" ,     color: "blue"  },
                { name: "lp_token_price",   title: "LP token price",    alignment: "right",     color: "green" },
                { name: "token1_price",     title: "Token 1 price",     alignment: "right",     color: "green" },
                { name: "token2_price",     title: "Token 2 price",     alignment: "right",     color: "green" },
                { name: "TVL",              title: "TVL (on Pancake)",  alignment: "right",     color: "green" },
                { name: "lp_amount",        title: "LP amount",         alignment: "right",     color: "green" },
                { name: "lp_unclaimed",     title: "LP unclaimed",      alignment: "right",     color: "green" },
                { name: "lp_total",         title: "LP total",          alignment: "right",     color: "green" },
                { name: "lp_cost",          title: "LP cost",           alignment: "right",     color: "green" },
                { name: "profit",           title: "Profit",            alignment: "right",     color: "green" }
            ],
            filter: row => +row.lp_amount > 0
        })

        p.addRows(values)

        console.clear()
        p.printTable()
    }).catch(console.log)
}

main()