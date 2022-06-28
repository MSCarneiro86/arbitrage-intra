'use strict';
const ccxt = require ('ccxt');
const bitfinex = new ccxt.bitfinex ({'enableRateLimit': true})


async function BitfinexAPI(){  
const Bitfinex = await bitfinex.fetchTicker ('ETH/USDT')
    console.log ("Bitfinex")
    console.log (`Venda: ${Bitfinex.info.bid}`)
    console.log (`Compra: ${Bitfinex.info.ask}`)
    console.log (`timestamp:${Bitfinex.timestamp} \n`)

}
module.exports = { BitfinexAPI };