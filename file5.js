//arrow function

let hola = ()=>{
    console.log("hola")
}

hola();
//el nombre de la funcion vacia es hola

let hello = ()=> console.log("Hello");
// las arrow function pueden ir sin llaves{} si esta solo es un renglon

hello();

//tambien si se declara en una sola linea se pued omitir la palabra return
suma= (num1,num2)=>num1+num2
console.log(suma(5,12));

let contextoArrow = {
    nombre:"aldo",
    apellido:"leon",
    fullName:function(){
        setTimeout(function(){
            console.log(this.nombre+" "+this.apellido)
        },1000)
    }
}
contextoArrow.fullName();//undefine undefine

let contextoArrow2 = {
    nombre:"aldo",
    apellido:"leon",
    fullName:function(){
        setTimeout(()=>{
            console.log(this.nombre+" "+this.apellido)
        },1000)
    }
}
contextoArrow2.fullName();//aldo leon
//las fatArrow permiten conservar los valores de las funciones al ser pasadas como argumentos
/*cada que se envie una funcion como argumento a otra funcion
y se quiera conservar el valor de this se debe utilizar fatArrow*/
