//contexto this, que representa al objeto cuyo codigo se esta ejecutando en el momento
//el valor de this cambia dependiendo de que parte del codigom se esta ejecutando

//this en el scope global
//console.log(this)

function demo(){
    console.log(this);        
}

demo();

let objeto={
    clave: function(){
        console.log(this)
    }
}
objeto.clave();

let usuario = {
    nombre:'aldo',
    apellido: 'islas',
    nombreCompleto: function(){
        console.log(this.nombre+" "+this.apellido)
    }
}

let ejecutor ={
    funcion:null,
    ejecuta: function(f){
        this.funcion = f;
        this.funcion();
        }
}

usuario.nombreCompleto();
ejecutor.ejecuta(usuario.nombreCompleto)//al ejecutarla asi se pierde el valor
//ejecutor.ejecuta(objeto.clave)


