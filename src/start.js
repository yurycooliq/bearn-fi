const Table = require("console-table-printer").Table
const { sumDollars, updatePrices, color, formatToDollarView, formatRow } = require('./helpers')
const calcLP = require('./calcLP')
const calcSingle = require('./calcSingle')
const watchList = require('./watchList')
const balances = require('./../initial-balances')

const main = async () => {
    flashLog(watchList)
    setInterval(() => flashLog(watchList), 3000)
}

const flashLog = async lpTokensArray => {
    const prices = await updatePrices(lpTokensArray)
    const totals = {}

    const promises = lpTokensArray.map(tokenInfo => {
        const deposit = balances.find(balance => balance.name === tokenInfo.name)
        if (tokenInfo.isSingle) {
            return calcSingle(
                tokenInfo.poolAddress,
                tokenInfo.tokenID,
                tokenInfo.poolID,
                tokenInfo.name,
                deposit.balance,
                prices.data,
                totals
            )
        }
        return calcLP(
            tokenInfo.poolAddress,
            tokenInfo.token1ID,
            tokenInfo.token2ID,
            tokenInfo.poolID,
            tokenInfo.name,
            deposit.balance,
            prices.data,
            totals
        ).catch(console.error)
    })

    Promise.all(promises).then(values => {
        const formattedValues = values.map(formatRow)
        const p = new Table({
            title: `bEarn.fi Portfolio Tracker for ${process.env.USER_ADDRESS}`,
            columns: [
                { name: "name",             title: "Pair",                      alignment: "left" ,     },
                { name: "token1_price",     title: "Token 1 USD | 24h change",  alignment: "right",     },
                { name: "token2_price",     title: "Token 2 USD | 24h change",  alignment: "right",     },
                { name: "lp_token_price",   title: "LP token USD",              alignment: "right",     },
                { name: "TVL",              title: "TVL*",                      alignment: "right",     },
                { name: "lp_amount",        title: "LP Amount",                 alignment: "right",     },
                { name: "bdo_reward",       title: "BDO Reward",                alignment: "right",     },
                { name: "lp_cost",          title: "LP Cost",                   alignment: "right",     },
                { name: "profit",           title: "Profit",                    alignment: "right",     }
            ],
            // filter: row => +row.lp_amount > 0
        })

        p.addRows(formattedValues)
        p.addRow({name: 'total', lp_cost: sumDollars(values, "lpCost"), profit: sumDollars(values, "profit")})

        console.clear()
        p.printTable()

        console.log(" * On PancakeSwap for pairs and CafeSwap for BREW\n")
        console.log(`Last Snapshot: ${color((new Date).toLocaleTimeString(), 'yellow')}`)
        console.log(`URL: ${color('https://bearn.fi/bvaults', 'link')}`) // Clickable in most consoles
    }).catch(console.log)
}

main()
