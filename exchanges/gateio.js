'use strict';
const ccxt = require ('ccxt');
const gateio = new ccxt.gateio ({'enableRateLimit': true})

async function GateioAPI(){  
const Gateio = await gateio.fetchTicker ('ETH/USDT')       
    console.log ("Gateio")
    console.log (`Venda: ${Gateio.info.highest_bid}`)
    console.log (`Compra: ${Gateio.info.lowest_ask}`)
    console.log (`timestamp:${Gateio.timestamp} \n`)
}

module.exports = { GateioAPI };