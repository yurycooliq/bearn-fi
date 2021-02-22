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
- BREW
- RAMEN (coming soon)

Example output (only pools you are in):
```
                                            bEarn.fi Portfolio Tracker for 0xa1b2................................y8z9                                            
┌───────────┬──────────────────────┬──────────────────────┬──────────┬────────────────┬────────────┬────────────┬────────────┬────────────┬───────────┬─────────┐
│ Vault     │ Token 1 | 24h change │ Token 2 | 24h change │ LP Price │           TVL* │  LP Amount │ BFI Reward │ BDO Reward │ MDO Reward │   Deposit │  Profit │
├───────────┼──────────────────────┼──────────────────────┼──────────┼────────────────┼────────────┼────────────┼────────────┼────────────┼───────────┼─────────┤
│ BDO-BUSD  │      $1.31 |  +4.68% │      $1.00 |  +0.35% │    $2.38 │ $39,254,509.29 │ 780.492424 │   0.000898 │   2.245386 │   0.011137 │ $1,858.12 │ $117.12 │
│ BDO-BNB   │      $1.31 |  +4.68% │    $262.50 |  -9.49% │   $38.73 │ $10,729,978.31 │  14.463472 │   0.001050 │   2.625859 │   0.013024 │   $560.24 │ -$18.11 │
└───────────┴──────────────────────┴──────────────────────┴──────────┴────────────────┴────────────┴────────────┴────────────┴────────────┴───────────┴─────────┘
 * On PancakeSwap for pairs and CafeSwap for BREW

Last Snapshot: 22:56:00
URL: https://bearn.fi/bvaults
```

## Contribution
Feel free to make pull request or contact me to add another vaults.

## Contributors
- Yury Cooliq <yurycooliq[at]gmail.com>
- Paul Muller <melnyk300[at]gmail.com>
