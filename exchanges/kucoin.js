'use strict';
const ccxt = require ('ccxt');
const kucoin = new ccxt.kucoin ({'enableRateLimit': true})

async function KucoinAPI(){  
const Kucoin = await kucoin.fetchTicker ('ETH/USDT')  
    return [Kucoin.info.sell, Kucoin.info.buy, Kucoin.timestamp, "Kucoin"]
}
module.exports = { KucoinAPI };