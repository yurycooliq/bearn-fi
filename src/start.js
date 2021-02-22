const Table = require("console-table-printer").Table
const { sumDollars, updatePrices } = require('./helpers')
const calcLP = require('./calcLP')
const calcSingle = require('./calcSingle')
const watchList = require('./watchList')
const balances = require('./../initial-balances')

const main = async () => {
    flashLog(watchList)
    setInterval(() => flashLog(watchList), 5000)
}

const flashLog = async lpTokensArray => {
    const prices = await updatePrices(lpTokensArray)

    const promises = lpTokensArray.map(tokenInfo => {
        const deposit = balances.find(balance => balance.name === tokenInfo.name)
        if (tokenInfo.isSingle) {
            return calcSingle(
                tokenInfo.poolAddress,
                tokenInfo.tokenID,
                tokenInfo.poolID,
                tokenInfo.name,
                deposit.balance,
                prices.data
            )
        }
        return calcLP(
            tokenInfo.poolAddress,
            tokenInfo.token1ID,
            tokenInfo.token2ID,
            tokenInfo.poolID,
            tokenInfo.name,
            deposit.balance,
            prices.data
        ).catch(console.error)
    })

    Promise.all(promises).then(values => {
        const p = new Table({
            title: `bEarn.fi Portfolio Tracker for ${process.env.USER_ADDRESS}`,
            columns: [
                { name: "name",           title: "Vaults",     alignment: "left",  color: "cyan" },
                { name: "token1_price",   title: "Token 1",    alignment: "right", color: "green" },
                { name: "token2_price",   title: "Token 2",    alignment: "right", color: "green" },
                { name: "lp_token_price", title: "LP Cost",    alignment: "right", color: "green" },
                { name: "lp_amount",      title: "LP Amount",  alignment: "right", color: "green" },
                { name: "TVL",            title: "TVL*",       alignment: "right", color: "green" },
                { name: "bdo_reward",     title: "BDO Reward", alignment: "right", color: "green" },
                { name: "lp_cost",        title: "Deposit",    alignment: "right", color: "green" },
                { name: "profit",         title: "Profit",     alignment: "right", color: "white_bold" }
            ],
            filter: row => +row.lp_amount > 0
        })

        p.addRows(values)

        console.clear()
        p.printTable()

        console.log(" * On PancakeSwap for pairs and CafeSwap for BREW\n")

        console.log(` Total Deposit: ${sumDollars(values, "lp_cost")}`)
        console.log(`  Total Profit: ${sumDollars(values, "profit")}`)
        console.log(` Last Snapshot: ${(new Date).toLocaleTimeString()}`)
        console.log("           URL: https://bearn.fi/bvaults") // Clickable in most consoles
    }).catch(console.log)
}

main()
