'use strict';
const ccxt = require ('ccxt');
const ftx  = new ccxt.ftx ({'enableRateLimit': true})

async function FtxAPI(){  
const Ftx = await ftx.fetchTicker ('ETH/USDT')
    console.log ("Ftx")
    console.log (`Venda: ${Ftx.info.bid}`)
    console.log (`Compra: ${Ftx.info.ask}`)
    console.log (`timestamp:${Ftx.timestamp} \n`)
}
module.exports = { FtxAPI };