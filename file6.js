function ejecutor(funcion){
    funcion();
}

//call permite asignar un contexto  y tambien enviar argumentos
function ejecutor1(funcion){
    funcion.call(ejemplo);
}

//apply hace lo mismo que call pero los argumentos se envian en un arreglo
function ejecutor2(funcion){
    funcion.apply(ejemplo);
}


let ejemplo ={
    nombre:"aldo",
    apellido:"leon",
    fullName: function(){
        console.log(this.nombre+" "+this.apellido);
    }
}

ejemplo.fullName();//aldo leon

ejecutor(ejemplo.fullName)//undefine undefine

ejecutor1(ejemplo.fullName)//con call aldo leon

ejecutor2(ejemplo.fullName)//con call aldo leon

//la mejor opcion es bind pues no es necesario modificar la funcion
ejecutor(ejemplo.fullName.bind(ejemplo))//con bind aldo leon
//con bind definimos los valores de this y su contexto

