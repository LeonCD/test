console.log(Math.PI)

//argumentos a funciones
//los parametrso no tiene tipo
//no se revisa la cantidad de parametros enviados
//se pueden establecer valores por default
// function cuadrado(numero=0)
//los parametrso con valor por default van al final de la declaracion de la funcion
function cuadrado(numero){
    //si no se envia ningun valos se asigan como undefined
    return numero*numero
}

console.log(cuadrado(2,3,4,5))
//usando el objeto arguments[] 
function sumaTodos(){
    return arguments[0]+arguments[1];
}
 console.log(sumaTodos(1,2,3,4,5,6));

 //en javascript las funciones se pueden almcenar en variables, enviar como argumentos o retornar otras funciones
 function executor(funcion){
    funcion();
 }

 function hola(){
     console.log("Hola mundos cruel")
 }
//pasamemos como argumento una funcion
//al enviar una funcion no se coloca lso parentesis estos solo van cuando se desea ejecutar la funcion 
 executor(hola);

 //esta declaracion  es mas comun a la hora de pasar una funcion como argumento
 executor(function(){
    console.log("hola cruel mundo")
 });














