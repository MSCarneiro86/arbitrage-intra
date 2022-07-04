function comparador(exchangeA, exchangeB) {

    const calculo1 = (exchangeB[1] - (exchangeB[1] * 0.0015))
   
    if ((calculo1 - exchangeA[0]) > 0.01){

        
        console.log('Executar',parseFloat(exchangeA[0]), parseFloat(exchangeB[1]), exchangeA[3] , exchangeB[3]);

    } else{
        console.log('NExecutar', parseFloat(exchangeA[0]), parseFloat(exchangeB[1]), exchangeA[3] , exchangeB[3])
    }

    const calculo2 = (exchangeA[1] - (exchangeA[1] * 0.0015))
   
    if ((calculo2 - exchangeB[0]) > 0.01){

        
        console.log('Executar',parseFloat(exchangeB[0]), parseFloat(exchangeA[1]), exchangeB[3] , exchangeA[3]);

    } else{
        console.log('NExecutar', parseFloat(exchangeB[0]), parseFloat(exchangeA[1]), exchangeB[3] , exchangeA[3])
    }


}

module.exports = { comparador };