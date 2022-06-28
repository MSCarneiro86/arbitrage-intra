const Binance = require('./exchanges/binance');
const Kraken = require('./exchanges/kraken');
const Bitfinex = require('./exchanges/bitfinex');
const Ftx = require('./exchanges/ftx');
const Coinbase = require('./exchanges/coinbase');
const Kucoin = require('./exchanges/kucoin');
const gateio = require('./exchanges/gateio');
const huobi = require('./exchanges/huobi');

setInterval(async () => {
    
    Binance.BinanceAPI();
    Kraken.KrakenAPI();
    Bitfinex.BitfinexAPI();
    Ftx.FtxAPI();
    Coinbase.CoinbaseAPI();
    Kucoin.KucoinAPI();
    gateio.GateioAPI();
    huobi.HuobiAPI(); 
    

}, process.env.CRAWLER_INTERVAL );