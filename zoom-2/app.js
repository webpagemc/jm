 const uuid4 = require("uuid4");
 const fs = require("fs")

//PARA DECLARAR EL UUID4 era asi:

//const id = uuid4()

//-----------//
 //OBJETOS//
 
 /* const alumno = {

    nombre:{
        primero:"Mauro",
        segundo:"Gabriel",
        apellidos:{
            apellido1:"Almeida",
            apellido2:"Goku"
        }
    },
    edad:22,
    saludar:(apellido)=>{

        return `hola mi apellido es ${apellido}`

    }

}

const { apellido1, apellido2 } = alumno.nombre.apellidos

console.log(apellido1, apellido2);
*/

//--------------------//

//CLASES

class productManager{

    writeFile(data){
        
    };

    readFile(){
    
    }

    getAll(){ 

    };

    createProduct(obj){ 

    }

    deleteProduct(id){

    }

    updateProduct(id, data){

    }


}

const pm = new productManager();

