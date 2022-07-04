'use strict';
const ccxt = require ('ccxt');
const coinbase  = new ccxt.coinbasepro ({'enableRateLimit': true})


async function CoinbaseAPI(){  
const Coinbase = await coinbase.fetchTicker ('ETH/USDT')

    return [Coinbase.info.bid, Coinbase.info.ask, Coinbase.timestamp, "Coinbase"]
}
module.exports = { CoinbaseAPI };