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
- MDS-BUSD (coming soon)
- BDO-BNB (coming soon)
- SBDO-BUSD (coming soon)

Expected output:
```
                                          bearn.fi at 17:42:27                                           
┌───────────┬────────────────┬────────────────┬────────────┬──────────────┬──────────┬─────────┬────────┐
│ pair name │ LP token price │            TVL │  LP amount │ LP unclaimed │ LP total │ LP cost │ profit │
├───────────┼────────────────┼────────────────┼────────────┼──────────────┼──────────┼─────────┼────────┤
│ BDO-BUSD  │          2.25$ │ 27,543,237.08$ │ 286.301115 │     0.033459 │   286.33 │ 645.36$ │  4.36$ │
│ MDO-BUSD  │          5.37$ │  1,612,385.95$ │          0 │            0 │        0 │      0$ │     0$ │
│ MDO-USDT  │          5.31$ │    842,523.55$ │          0 │            0 │        0 │      0$ │     0$ │
└───────────┴────────────────┴────────────────┴────────────┴──────────────┴──────────┴─────────┴────────┘
```

## Contribution
Feel free to make pull request or contact me to add another vaults.

#### Contributors
- Paul Muller <melnyk300[at]gmail.com>
