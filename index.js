'use strict';
const ccxt = require ('ccxt');

let binance    = new ccxt.binance ()
let ftx  = new ccxt.ftx ({ verbose: true })
let coinbase  = new ccxt.coinbase ()
let kraken = new ccxt.kraken ()
let kucoin = new ccxt.kucoin ()
let gateio = new ccxt.gateio ()
let bitfinex = new ccxt.bitfinex ()
let huobi = new ccxt.huobi ()

setInterval(async () => {
   

    const Binance = await kraken.fetchOrderBook ('ETHUSDT')
    const Ftx = await kraken.fetchOrderBook ('ETHUSDT')
    const Coinbase = await kraken.fetchOrderBook ('ETHUSDT')
    const Kraken = await kraken.fetchOrderBook ('ETHUSDT')
    const Kucoin = await kraken.fetchOrderBook ('ETHUSDT')
    const Gateio = await kraken.fetchOrderBook ('ETHUSDT')
    const Bitfinex = await kraken.fetchOrderBook ('ETHUSDT')
    const Huobi = await kraken.fetchOrderBook ('ETHUSDT')

    console.log (`Binance`)
    console.log (`Venda: ${Binance.bids[0][0]}`)
    console.log (`Compra: ${Binance.asks[0][0]}`) 
    console.log (`Compra:${Binance.timestamp} \n`)

    console.log (`Ftx`)
    console.log (`Venda: ${Ftx.bids[0][0]}`)
    console.log (`Compra: ${Ftx.asks[0][0]}`)
    console.log (`Compra:${Ftx.timestamp} \n`)

    console.log (`Coinbase`)
    console.log (`Venda: ${Coinbase.bids[0][0]}`)
    console.log (`Compra: ${Coinbase.asks[0][0]}`)
    console.log (`Compra:${Coinbase.timestamp} \n`)

    console.log (`Kraken`)
    console.log (`Venda: ${Kraken.bids[0][0]}`)
    console.log (`Compra: ${Kraken.asks[0][0]}`)
    console.log (`Compra:${Kraken.timestamp} \n`)

    console.log (`Kucoin`)
    console.log (`Venda: ${Kucoin.bids[0][0]}`)
    console.log (`Compra: ${Kucoin.asks[0][0]}`)
    console.log (`Compra:${Kucoin.timestamp} \n`)

    console.log (`Gateio`)
    console.log (`Venda: ${Gateio.bids[0][0]}`)
    console.log (`Compra: ${Gateio.asks[0][0]}`)
    console.log (`Compra:${Gateio.timestamp} \n`)

    console.log (`Bitfinex`)
    console.log (`Venda: ${Bitfinex.bids[0][0]}`)
    console.log (`Compra: ${Bitfinex.asks[0][0]}`)
    console.log (`Compra:${Bitfinex.timestamp} \n`)

    console.log (`Huobi`)
    console.log (`Venda: ${Huobi.bids[0][0]}`)
    console.log (`Compra: ${Huobi.asks[0][0]}`)
    console.log (`Compra:${Huobi.timestamp} \n`)
      
}, 3000)