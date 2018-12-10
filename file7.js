//arreglos
// pueden almacenar cualquier tipo de dato como son funciones, objeetos, cadenas, otros arreglos
//su taño es dinamico 

let arregloNum = [1,5,8,9,11,[20,21,22,23]]
let lenguajes=["java",'pyhton',"c++","c#"]

for(let i=0;i<arregloNum.length;i++){
    console.log(arregloNum[i]);
}

arregloNum.forEach(function(elemento) {
    console.log(elemento)
});

//filter crea un nuevo arreglo sin el elemento filtrado
lenguajes2=lenguajes.filter(el=>{
    return el!=="java";
});
console.log(lenguajes2);

let e1= lenguajes.find(argumento=> argumento=="c++");
console.log(e1);

//map genera un nuevo arrgelo 
let numerosS=["10","20","30","40"]
console.log(numerosS);
let numerosN = numerosS.map(elemento=> parseInt(elemento));
console.log(numerosN);

