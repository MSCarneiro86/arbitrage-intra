'use strict';
const ccxt = require ('ccxt');
const bitfinex = new ccxt.bitfinex ({'enableRateLimit': true})


async function BitfinexAPI(){  
const Bitfinex = await bitfinex.fetchTicker ('ETH/USDT')
    
    return [Bitfinex.info.bid, Bitfinex.info.ask, Bitfinex.timestamp, "Bitfinex"]

}
module.exports = { BitfinexAPI };