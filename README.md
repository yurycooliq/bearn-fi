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
                                                     bearn.fi at 20:39:34                                                      
┌───────────┬────────────────┬───────────────┬───────────────┬──────────────────┬────────────┬────────────┬─────────┬─────────┐
│ Pair name │ LP token price │ Token 1 price │ Token 2 price │ TVL (on Pancake) │  LP amount │ BDO reward │ LP cost │  Profit │
├───────────┼────────────────┼───────────────┼───────────────┼──────────────────┼────────────┼────────────┼─────────┼─────────┤
│ BDO-BUSD  │          $2.23 │         $1.15 │            $1 │   $29,497,356.63 │ 290.486128 │   0.005205 │ $647.45 │   $6.45 │
│ BDO-BNB   │         $37.28 │         $1.15 │       $277.89 │    $9,495,858.84 │  14.071206 │   0.678977 │ $524.63 │ -$53.73 │
└───────────┴────────────────┴───────────────┴───────────────┴──────────────────┴────────────┴────────────┴─────────┴─────────┘
```

## Contribution
Feel free to make pull request or contact me to add another vaults.

## Contributors
- Yury Cooliq <yurycooliq[at]gmail.com>
- Paul Muller <melnyk300[at]gmail.com>
