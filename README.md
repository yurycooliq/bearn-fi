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
- RAMEN
- vBSWAP-BNB
- vBSWAP-BUSD_98/2
- BUSD(alpaca)
- ALPACA-BNB

Example output:
```
                                            bEarn.fi Portfolio Tracker for 0xa1b2................................y8z9                                            
┌───────────┬──────────────────────┬──────────────────────┬──────────┬────────────────┬────────────┬────────────┬────────────┬────────────┬───────────┬─────────┐
│ Vault     │ Token 1 | 24h change │ Token 2 | 24h change │ LP Price │           TVL* │  LP Amount │ BFI Reward │ BDO Reward │ MDO Reward │   Deposit │  Profit │
├───────────┼──────────────────────┼──────────────────────┼──────────┼────────────────┼────────────┼────────────┼────────────┼────────────┼───────────┼─────────┤
│ BDO-BUSD  │      $1.31 |  +3.68% │      $1.00 |  +0.32% │    $2.38 │ $39,247,469.94 │ 780.492424 │   0.000905 │   2.262995 │   0.011224 │ $1,858.12 │ $117.12 │
│ SBDO-BUSD │  $3,960.65 | -11.09% │      $1.00 |  +0.32% │  $134.53 │ $17,606,711.95 │   0.000000 │   0.000000 │   0.000000 │   0.000000 │     $0.00 │   $0.00 │
│ BDO-BNB   │      $1.31 |  +3.68% │    $261.35 |  -9.50% │   $38.65 │ $10,701,167.16 │  14.473641 │   0.001053 │   2.633620 │   0.013063 │   $559.41 │ -$18.94 │
│ BREW      │     $12.91 | -16.49% │                      │   $12.91 │  $7,287,768.83 │   0.000000 │   0.000000 │   0.000000 │   0.000000 │     $0.01 │   $0.01 │
│ MDO-BUSD  │      $6.97 |  -2.60% │      $1.00 |  +0.32% │    $5.46 │  $2,730,134.67 │   0.000000 │   0.000000 │   0.000000 │   0.000000 │     $0.00 │   $0.00 │
│ MDO-USDT  │      $6.97 |  -2.60% │      $1.00 |  +0.11% │    $5.35 │  $1,390,662.71 │   0.000000 │   0.000000 │   0.000000 │   0.000000 │     $0.00 │   $0.00 │
│ MDS-BUSD  │  $7,480.36 | -19.74% │      $1.00 |  +0.32% │  $184.06 │  $1,735,955.09 │   0.000000 │   0.000000 │   0.000000 │   0.000000 │     $0.00 │   $0.00 │
│ total     │                      │                      │          │                │            │            │            │            │ $2,417.54 │  $98.18 │
└───────────┴──────────────────────┴──────────────────────┴──────────┴────────────────┴────────────┴────────────┴────────────┴────────────┴───────────┴─────────┘
 * On PancakeSwap for pairs and CafeSwap for BREW

Last Snapshot: 23:07:28
URL: https://bearn.fi/bvaults
```

## Contribution
Feel free to make pull request or contact me to add another vaults.

## Contributors
- Yury Cooliq <yurycooliq[at]gmail.com>
- Paul Muller <melnyk300[at]gmail.com>
