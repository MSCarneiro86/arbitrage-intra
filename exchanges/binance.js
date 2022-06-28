const ccxt = require ('ccxt');
const binance = new ccxt.binance ({'enableRateLimit': true});



async function BinanceAPI(){  

const Binance = await binance.fetchTicker ('ETHUSDT');
    console.log ("Binance")
    console.log (`Venda: ${Binance.info.bidPrice}`)
    console.log (`Compra: ${Binance.info.askPrice}`) 
    console.log (`timestamp:${Binance.timestamp} \n`)

    return [Binance.info.bidPrice, Binance.info.askPrice, Binance.timestamp]
}

module.exports = { BinanceAPI };