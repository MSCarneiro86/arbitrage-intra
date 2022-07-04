'use strict';
const ccxt = require ('ccxt');
const gateio = new ccxt.gateio ({'enableRateLimit': true})

async function GateioAPI(){  
const Gateio = await gateio.fetchTicker ('ETH/USDT') 
    return [Gateio.info.highest_bid, Gateio.info.lowest_ask, Gateio.timestamp, "Gateio"]
}

module.exports = { GateioAPI };