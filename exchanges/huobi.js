'use strict';
const ccxt = require ('ccxt');
const huobi = new ccxt.huobi ({'enableRateLimit': true})

async function HuobiAPI(){  
const Huobi = await huobi.fetchTicker ('ETH/USDT')
    console.log ("Huobi")
    console.log (`Venda: ${Huobi.info.bid[0]}`)
    console.log (`Compra: ${Huobi.info.ask[0]}`) 
    console.log (`timestamp:${Huobi.timestamp} \n`)   
}
module.exports = { HuobiAPI };