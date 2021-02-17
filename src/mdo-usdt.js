// To use another pair modify this values
const poolAddress = "0xd245BDb115707730136F0459e2aa9b0b19023724"
const token1ID = "midas-dollar"
const token2ID = "tether"
const poolID = 5
const rewardPoolID = 1
const token1PriceSource = 2
const token2PriceSource = 0
const name = "MDO-USDT"

// Don't touch
const doMath = require('./do-math')
doMath(poolAddress, token1ID, token2ID, poolID, rewardPoolID, token1PriceSource, token2PriceSource, name)
