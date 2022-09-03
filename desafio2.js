const costoFinal = (telaSeleccionada) => {
    let costo = 0
    if(telaSeleccionada === 1) costo = 5400;
    if(telaSeleccionada === 2) costo = 4600;
    if(telaSeleccionada === 3) costo = 6300;
    return costo
}

let  buzo= prompt(`Bienvenido/a Soy Sara un algoritmo ayudante de la tienda TuAnimeShop.  
\n Actualemete solo contamos con Buzos Personalizados en Stock. 
\n ¿Desea continuar? SI/NO`)

while( buzo.toLowerCase() == "si" ){
    let color=  prompt('Elija El Color que desea la Tela.')
    let tela = parseInt(prompt("Elija El numero del tipo de Tela\n 1-Algodon\n  2-Jogging\n  3-Polar."))
    let personaje = prompt("Elija el personaje que le gustaria en el estampado \n *Serena Tsukino *Kakashi Hatake *Monkey D. Luffy *Biscuit Krueger  *Edward Elric * Asuka Langley *Shoto Todoroki *Rei Ayanami")
    let pago = prompt("Ingrese el metodo de Pago \n *Debito *Credito *Mercado Pago *Otro")
    
    alert(`EL COSTO FINAL DE SU PEDIDO ES  EL SIGUIENTE 
    \n Color del Buzo Será: ${color} 
    \n Tipo de Tela Será: ${tela} 
    \n Personaje: ${personaje} 
    \n El Metodo de pago será con: ${pago} 
    \n Costo Final: $${costoFinal(tela)}`) 
    
    buzo = prompt(`¿Quiere quiere realizar otra compra? SI/NO`)
}
alert("Muchas gracias por elegir TuAnimeShop Vuelva Pronto🤝.")