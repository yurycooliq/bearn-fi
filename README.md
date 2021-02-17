# Bearn.fi Balance Checker

## Install
Install Node.js and NPM, then clone this repository and run `npm i` and `cp .env.example .env`.

## Usage

First set your address in `.env` file, then run one of the following commands:

- MDO-USDT: `npm run mdo-usdt`
- MDO-BUSD: (coming soon)
- MDS-BUSD: (coming soon)
- BDO-BUSD: (coming soon)
- BDO-BNB: (coming soon)
- SBDO-BUSD: (coming soon)

Expected output:
```
Result (MDO-USDT):
-------------------------------------------------------------
LP token price: $7.11
TVL (on Pancake): $898701.74
LP amount: 10 + (pending) 0 = 10 Cake LP
Your LP's cost $71.10
-------------------------------------------------------------
```

## Contribution
Only MDO-USDT vault available at the moment.
Feel free to make pull request or contact me to add another vaults.
