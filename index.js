
//1. Crear un objeto express
const express=require('express');


//2. Crear un objeto que represente nuestra aplicacion
const app=express();
app.use(express.json());

//3. Crear un servicio para escuchar peticiones
app.listen(
    3000,
    ()=>{
        console.log("servidor ejecutado en puerto 3000");
    }
);

// Definir los entry point de la API
// Definir la ruta (url) en donde se va a responder nuestra API
// http://localhost:3000/

app.get(
    '/api/sumar',
    // Se requieren dos objetos: uno representando la peticion y otro la respuesta
    (req,res)=>{
        //To Do: Aqui va el procesamiento de la peticion a esta ruta
        console.log("Alguien esta conectandose a esta ruta.");
        res.json("Activando Respuesta Sumar");
        res.json(req.body);
    }
);

app.post(
    '/api/restar',
    (req,res)=>{

        console.log("Alguien esta conectandose a la ruta restar");
        //console.log(req.body.numero_1);

        //opcion 1
        /*
        const n1= req.body.numero_1;
        const n2= req.body.numero_2;
        const resultado = n1-n2;
        */

        //Opcion 2
        const {numero_1, numero_2}= req.body;
        const resultado = numero_1-numero_2;        
        res.json("Activar Respuesta Restar");
        res.json(resultado);

    }
);


//Como queda la ruta para dividir
app.post(
    '/api/dividir',
    (req,res)=>{        
        const {numero_1, numero_2}= req.body;
        let resultado;
        if(numero_2 != 0){
            resultado = numero_1/numero_2;                
        }else
        {
            resultado= "ERROR";
        }

        res.json(resultado);
    }
);