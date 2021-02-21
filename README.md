# bEarn.fi Portfolio Tracker
Console tool to track your portfolio on bEarn.fi.

## Install
Install [Node.js+NPM](https://nodejs.org/en/) and [GIT](https://git-scm.com/). Then run GIT Bash and execute following commands one by one:

```
git clone https://github.com/yurycooliq/bearn-fi.git
cd bearn-fi
npm i
cp .env.example .env
cp initial.balances.json.example initial.balances.json
```

In `.env` file set your address.

In `initial.balances.json` file set your initial balances in USD to see your profits in realtime.

## Update
Run `git pull` from `bearn-fi` directory, then update `initial.balances.json` with new values from `initial.balances.json.example` file.

## Usage
Run `npm run watch` from `bearn-fi` directory.

Available pools:

- BDO-BUSD
- BDO-BNB
- SBDO-BUSD
- MDO-USDT
- MDO-BUSD
- MDS-BUSD

Example output (only pools you are in):
```
                                           bEarn Portfolio Tracker at 04:15:04                                           
┌───────────┬──────────────┬─────────────┬─────────────┬──────────────────┬────────────┬────────────┬─────────┬─────────┐
│ Pair      │ LP token USD │ Token 1 USD │ Token 2 USD │ TVL (on Pancake) │  LP Amount │ BDO Reward │ LP Cost │  Profit │
├───────────┼──────────────┼─────────────┼─────────────┼──────────────────┼────────────┼────────────┼─────────┼─────────┤
│ BDO-BUSD  │        $2.27 │       $1.18 │       $1.01 │    $30,888,345.2 │ 291.827019 │   0.298050 │  $662.3 │   $21.3 │
│ BDO-BNB   │        $37.6 │       $1.18 │     $275.29 │   $10,028,686.98 │  14.132797 │   0.959592 │ $531.44 │ -$46.92 │
└───────────┴──────────────┴─────────────┴─────────────┴──────────────────┴────────────┴────────────┴─────────┴─────────┘
URL: https://bearn.fi/bvaults
Total LP Cost: $1,193.74
Total Profit: -$25.62
```

## Contribution
Feel free to make pull request or contact me to add another vaults.

## Contributors
- Yury Cooliq <yurycooliq[at]gmail.com>
- Paul Muller <melnyk300[at]gmail.com>
