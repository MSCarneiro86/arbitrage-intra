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
    const Kucoin = await kraken.fetchOrderBook ('ETHUSDT')
    const Gateio = await kraken.fetchOrderBook ('ETHUSDT')
    const Bitfinex = await kraken.fetchOrderBook ('ETHUSDT')


    console.log (`Binance`)
    console.log (`Venda: ${Binance.bids[0][0]}`)
    console.log (`Compra: ${Binance.asks[0][0]}`) 
    console.log (`timestamp:${Binance.timestamp} \n`)

    console.log (`Ftx`)
    console.log (`Venda: ${Ftx.bids[0][0]}`)
    console.log (`Compra: ${Ftx.asks[0][0]}`)
    console.log (`timestamp:${Ftx.timestamp} \n`)

    console.log (`Coinbase`)
    console.log (`Venda: ${Coinbase.bids[0][0]}`)
    console.log (`Compra: ${Coinbase.asks[0][0]}`)
    console.log (`timestamp:${Coinbase.timestamp} \n`)

    console.log (`Kucoin`)
    console.log (`Venda: ${Kucoin.bids[0][0]}`)
    console.log (`Compra: ${Kucoin.asks[0][0]}`)
    console.log (`timestamp:${Kucoin.timestamp} \n`)

    console.log (`Gateio`)
    console.log (`Venda: ${Gateio.bids[0][0]}`)
    console.log (`Compra: ${Gateio.asks[0][0]}`)
    console.log (`timestamp:${Gateio.timestamp} \n`)

    console.log (`Bitfinex`)
    console.log (`Venda: ${Bitfinex.bids[0][0]}`)
    console.log (`Compra: ${Bitfinex.asks[0][0]}`)
    console.log (`timestamp:${Bitfinex.timestamp} \n`)


      
}, 3000)