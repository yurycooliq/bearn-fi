# Bearn.fi Balance Checker

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
                                                           bearn.fi at 01:04:49                                                           
┌───────────┬────────────────┬───────────────┬───────────────┬──────────────────┬───────────┬──────────────┬──────────┬─────────┬────────┐
│ Pair name │ LP token price │ Token 1 price │ Token 2 price │ TVL (on Pancake) │ LP amount │ LP unclaimed │ LP total │ LP cost │ Profit │
├───────────┼────────────────┼───────────────┼───────────────┼──────────────────┼───────────┼──────────────┼──────────┼─────────┼────────┤
│ BDO-BUSD  │          $2.25 │         $1.17 │            $1 │   $27,192,336.98 │ 287.42613 │     0.305569 │   287.73 │ $646.19 │  $5.19 │
└───────────┴────────────────┴───────────────┴───────────────┴──────────────────┴───────────┴──────────────┴──────────┴─────────┴────────┘
```

## Contribution
Feel free to make pull request or contact me to add another vaults.

## Contributors
- Yury Cooliq <yurycooliq[at]gmail.com>
- Paul Muller <melnyk300[at]gmail.com>
