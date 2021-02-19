# Bearn.fi Balance Checker

## Install
Install Node.js and NPM, then clone this repository and run `npm i` and `cp .env.example .env`.
In `.env` file set your address.
Then `cp initial.balances.json.example initial.balances.json` and fill it with your initial balances in USD to see your profits.

## Usage

Run `npm run watch`.

Available pools:

- MDO-USDT
- MDO-BUSD
- BDO-BUSD
- BDO-BNB
- MDS-BUSD (coming soon)
- SBDO-BUSD (coming soon)

Expected output:
```
                                                           bearn.fi at 23:08:50                                                            
┌───────────┬────────────────┬───────────────┬───────────────┬──────────────────┬────────────┬──────────────┬──────────┬─────────┬────────┐
│ Pair name │ LP token price │ Token 1 price │ Token 2 price │ TVL (on Pancake) │  LP amount │ LP unclaimed │ LP total │ LP cost │ Profit │
├───────────┼────────────────┼───────────────┼───────────────┼──────────────────┼────────────┼──────────────┼──────────┼─────────┼────────┤
│ BDO-BUSD  │          $2.21 │         $1.13 │            $1 │   $26,304,079.56 │ 287.096587 │     0.228903 │   287.33 │ $634.58 │ $-6.42 │
│ MDO-BUSD  │          $4.85 │         $5.52 │            $1 │    $1,417,817.91 │          0 │            0 │        0 │      $0 │     $0 │
│ MDO-USDT  │          $4.76 │         $5.52 │            $1 │      $607,622.12 │          0 │            0 │        0 │      $0 │     $0 │
└───────────┴────────────────┴───────────────┴───────────────┴──────────────────┴────────────┴──────────────┴──────────┴─────────┴────────┘

```

## Contribution
Feel free to make pull request or contact me to add another vaults.

#### Contributors
- Paul Muller <melnyk300[at]gmail.com>
