let numeroAleatorio = 0;

function generarNumeroAleatorio(){
    console.log('desde la funcion generar numeros aleatorios')
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    console.log(numeroAleatorio);
}


function consultarNumero(){
    //buscar el valor del input
    let numeroIngresado = parseInt(document.getElementById('numeroIngresado').value);
    console.log(numeroIngresado)
    console.log(numeroAleatorio)
     if(numeroIngresado === numeroAleatorio ){
        console.log('ganaste!')
     }else if(numeroIngresado > numeroAleatorio){
        console.log('el numero magico es menor al ingresado');
     }else{
        console.log('el numero magico es mayor al ingresado');
     }
}