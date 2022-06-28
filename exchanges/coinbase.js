'use strict';
const ccxt = require ('ccxt');
const coinbase  = new ccxt.coinbasepro ({'enableRateLimit': true})


async function CoinbaseAPI(){  
const Coinbase = await coinbase.fetchTicker ('ETH/USDT')
    console.log ("Coinbase")
    console.log (`Venda: ${Coinbase.info.bid}`)
    console.log (`Compra: ${Coinbase.info.ask}`) 
    console.log (`timestamp:${Coinbase.timestamp} \n`)
}
module.exports = { CoinbaseAPI };