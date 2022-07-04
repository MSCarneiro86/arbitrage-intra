'use strict';
const ccxt = require ('ccxt');
const huobi = new ccxt.huobi ({'enableRateLimit': true})

async function HuobiAPI(){  
const Huobi = await huobi.fetchTicker ('ETH/USDT')       

    return [Huobi.info.bid[0], Huobi.info.ask[0], Huobi.timestamp, "Huobi"]
}
module.exports = { HuobiAPI };