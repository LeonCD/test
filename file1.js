
//a=prompt();
console.log("hola mundo");
//console.log(a);
console.log(Math.PI)

//saber el valor boleano de un dato
let buleano = new Boolean(0);
console.log(buleano)
console.log(typeof( buleano));
// valores que dan falso en version buleana= Nan, null,0,.0,false

let age =24;

//condicionales
if(3>4){}
if(true){}
if(5=="5"&& 7<9)console.log("se cumpkio la condicion")

let edad=15
if(edad>18){
    console.log("eres mayor de edad");
}else{
    console.log("No eres mayor de edad");
}

let calificacion=4;
if(calificacion>5){
    console.log("aprobaste");
}else if(calificacion===5){
    console.log("sacaste 5");
}else if(calificacion<5){
    console.log("sacaste nemos de 5");
}else{
    console.log("Reprobado");
}

//ciclos
for(let a=0;a<=10;a++){
    console.log(a)
}

//break romper el cilco
for(let a=0;a<=10;a++){
    if(a>=8) break;
    console.log(a)
}

//continue saltar una iteracion
for(let a=0;a<=10;a++){
    if(a%2!=0) continue;
    //console.log(a)
}

//while
let i=1
while(i<=8){
    i++;
    console.log(i)
}

/*do while
let e=1
do{
    i++;
    console.log(e)
}while(e<=8)*/


