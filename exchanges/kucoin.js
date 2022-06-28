'use strict';
const ccxt = require ('ccxt');
const kucoin = new ccxt.kucoin ({'enableRateLimit': true})

async function KucoinAPI(){  
const Kucoin = await kucoin.fetchTicker ('ETH/USDT')   
    console.log ("Kucoin")
    console.log (`Venda: ${Kucoin.info.sell}`)
    console.log (`Compra: ${Kucoin.info.buy}`)
    console.log (`timestamp:${Kucoin.timestamp} \n`)
}
module.exports = { KucoinAPI };