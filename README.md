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

- MDO-USDT
- MDO-BUSD
- BDO-BUSD
- BDO-BNB
- MDS-BUSD (coming soon)
- SBDO-BUSD (coming soon)

Example output:
```
                                                           bearn.fi at 01:04:49                                                           
┌───────────┬────────────────┬───────────────┬───────────────┬──────────────────┬───────────┬──────────────┬──────────┬─────────┬────────┐
│ Pair name │ LP token price │ Token 1 price │ Token 2 price │ TVL (on Pancake) │ LP amount │ LP unclaimed │ LP total │ LP cost │ Profit │
├───────────┼────────────────┼───────────────┼───────────────┼──────────────────┼───────────┼──────────────┼──────────┼─────────┼────────┤
│ BDO-BUSD  │          $2.25 │         $1.17 │            $1 │   $27,192,336.98 │ 287.42613 │     0.305569 │   287.73 │ $646.19 │  $5.19 │
│ BDO-BNB   │         $40.05 │         $1.17 │        $315.5 │   $10,116,031.14 │         0 │            0 │        0 │      $0 │     $0 │
│ MDO-BUSD  │          $4.91 │         $5.66 │            $1 │    $1,447,142.46 │         0 │            0 │        0 │      $0 │     $0 │
│ MDO-USDT  │          $4.82 │         $5.66 │            $1 │       $639,890.5 │         0 │            0 │        0 │      $0 │     $0 │
└───────────┴────────────────┴───────────────┴───────────────┴──────────────────┴───────────┴──────────────┴──────────┴─────────┴────────┘
```

## Contribution
Feel free to make pull request or contact me to add another vaults.

## Contributors
- Yury Cooliq <yurycooliq[at]gmail.com>
- Paul Muller <melnyk300[at]gmail.com>
