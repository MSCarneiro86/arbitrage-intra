'use strict';
const ccxt = require ('ccxt');
const kraken = new ccxt.kraken ({'enableRateLimit': true})

async function KrakenAPI(){  
const Kraken = await kraken.fetchTicker ('ETHUSDT')
console.log ("Kraken")
console.log (`Venda: ${Kraken.bid}`)
console.log (`Compra: ${Kraken.ask}`)
console.log (`timestamp:${Kraken.timestamp} \n`) 
}
module.exports = { KrakenAPI };