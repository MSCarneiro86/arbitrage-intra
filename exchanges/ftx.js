'use strict';
const ccxt = require ('ccxt');
const ftx  = new ccxt.ftx ({'enableRateLimit': true})

async function FtxAPI(){  
const Ftx = await ftx.fetchTicker ('ETH/USDT')
    return [Ftx.info.bid, Ftx.info.ask, Ftx.timestamp, "Ftx"]
}
module.exports = { FtxAPI };