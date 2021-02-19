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
                                                          bearn.fi at 23:01:19                                                           
┌───────────┬────────────────┬───────────────┬───────────────┬────────────────┬────────────┬──────────────┬──────────┬─────────┬────────┐
│ pair name │ LP token price │ token 1 price │ token 2 price │            TVL │  LP amount │ LP unclaimed │ LP total │ LP cost │ profit │
├───────────┼────────────────┼───────────────┼───────────────┼────────────────┼────────────┼──────────────┼──────────┼─────────┼────────┤
│ BDO-BUSD  │          2.21$ │         1.13$ │            1$ │ 26,288,562.03$ │ 287.096587 │      0.22394 │   287.32 │ 634.56$ │ -6.44$ │
│ MDO-BUSD  │          4.84$ │         5.49$ │            1$ │  1,414,671.89$ │          0 │            0 │        0 │      0$ │     0$ │
│ MDO-USDT  │          4.75$ │         5.49$ │            1$ │    605,958.11$ │          0 │            0 │        0 │      0$ │     0$ │
└───────────┴────────────────┴───────────────┴───────────────┴────────────────┴────────────┴──────────────┴──────────┴─────────┴────────┘

```

## Contribution
Feel free to make pull request or contact me to add another vaults.

#### Contributors
- Paul Muller <melnyk300[at]gmail.com>
