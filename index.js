
//1. Crear un objeto express
const express=require('express');

//2. Crear un objeto que represente nuestra aplicacion
const app=express();

//3. Crear un servicio para escuchar peticiones
app.listen(
    3000,
    ()=>{
        console.log("servidor ejecutado en puerto 3000");
    }
);