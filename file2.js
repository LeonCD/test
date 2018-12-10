console.log(Math.PI)

//funciones
function hola(){
    console.log("hola mundo")
}
hola();

//
()=>{}

//con parametro
function cuadrado(numero){
    return numero*numero
    //nada despues de return se ejecuta
}
 
numCuadrado = cuadrado(3)
console.log(numCuadrado);
console.log(cuadrado(4));

//el scope o alcance
//si defines una funcion todo lo que se encuentra dentro de la misma tiene scope local
var name="aldo";
function swichNames(){
    var name="leon";
    console.log(name)
}
swichNames();
console.log(name);

//let , const ,var
//var tiene alcance dentro de la funcion mas proxima
//let y const tiene alcance dentro del bloque mas proximo
//usa const si quieres que el valor sea una constante
//var si quieres que tu variable se añada al scope global o local de la funcion
//para todo se recomienda let 
function mayor_edad(edad){
    //let resultado;
    if(edad>18){//si ponemos var el scope alcanza la funcion si lo cambiamos por let es local dentro del if
        
        const resultado = "eres mayor de edad";
    }else{
        const resultado = "eres menor de edad"
    }
    console.log(resultado);
}
mayor_edad(18)