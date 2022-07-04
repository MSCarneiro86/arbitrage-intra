'use strict';
const ccxt = require ('ccxt');
const kraken = new ccxt.kraken ({'enableRateLimit': true})

async function KrakenAPI(){  
const Kraken = await kraken.fetchTicker ('ETHUSDT')
    return [Kraken.bid, Kraken.ask, Kraken.timestamp, "Kraken"]
}
module.exports = { KrakenAPI };