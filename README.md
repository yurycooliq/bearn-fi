# Bearn.fi Balance Checker

## Install
Install Node.js and NPM, then clone this repository and run `npm i && cp .env.example .env`.

## Usage
First set your address in .env file, then `npm run mdo-usdt`.
Expected output:
`
Result:
-------------------------------------------------------------
LP token price: $6.43, TVL (on pool, not vault): $725102.45.
LP Token amount is 1e-18 + unclaimed 0 (total 1e-18 Cake LP).
Depo is $0.00 (claimed $0.00 + unclaimed $0.00).
-------------------------------------------------------------
`

## Contribution
Only MDO-USDT vault available at the moment.
Feel free to make pull request or contact me to add another vaults.
