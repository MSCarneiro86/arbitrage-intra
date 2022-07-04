const Binance = require('./exchanges/binance');
const Kraken = require('./exchanges/kraken');
const Bitfinex = require('./exchanges/bitfinex');
const Ftx = require('./exchanges/ftx');
const Coinbase = require('./exchanges/coinbase');
const Kucoin = require('./exchanges/kucoin');
const Gateio = require('./exchanges/gateio');
const Huobi = require('./exchanges/huobi');
const comparador = require('./comparador');

setInterval(async () => {
    
    const binance = await Binance.BinanceAPI();
    const kraken = await Kraken.KrakenAPI();
    const bitfinex = await Bitfinex.BitfinexAPI();
    const ftx = await Ftx.FtxAPI();
    const coinbase = await Coinbase.CoinbaseAPI();
    const kucoin = await Kucoin.KucoinAPI();
    const gateio = await Gateio.GateioAPI();
    const huobi = await Huobi.HuobiAPI(); 
    
    comparador.comparador(binance, kraken); 
    comparador.comparador(binance, bitfinex);
    comparador.comparador(binance, ftx);
    comparador.comparador(binance, coinbase);
    comparador.comparador(binance, kucoin);
    comparador.comparador(binance, gateio);
    comparador.comparador(binance, huobi);

    comparador.comparador(kraken, bitfinex);
    comparador.comparador(kraken, ftx);
    comparador.comparador(kraken, coinbase);
    comparador.comparador(kraken, kucoin);
    comparador.comparador(kraken, gateio);
    comparador.comparador(kraken, huobi);

    comparador.comparador(bitfinex, ftx);
    comparador.comparador(bitfinex, coinbase);
    comparador.comparador(bitfinex, kucoin);
    comparador.comparador(bitfinex, gateio);
    comparador.comparador(bitfinex, huobi);

    comparador.comparador(ftx, coinbase);
    comparador.comparador(ftx, kucoin);
    comparador.comparador(ftx, gateio);
    comparador.comparador(ftx, huobi);

    comparador.comparador(coinbase, kucoin);
    comparador.comparador(coinbase, gateio);
    comparador.comparador(coinbase, huobi);

    comparador.comparador(kucoin, gateio);
    comparador.comparador(kucoin, huobi);
    comparador.comparador(gateio, huobi);
     
    

}, process.env.CRAWLER_INTERVAL );
