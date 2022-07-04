const ccxt = require ('ccxt');
const binance = new ccxt.binance ({'enableRateLimit': true});

async function BinanceAPI(){  

const Binance = await binance.fetchTicker ('ETHUSDT');
    
    return [Binance.info.bidPrice, Binance.info.askPrice, Binance.timestamp, "Binance"]
}



module.exports = { BinanceAPI };