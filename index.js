require('dotenv').config();

const express = require('express');
const cors = require('cors'); // permitir dominios

const { dbConnection } = require('./database/config');

//Crear el servidor express
const app = express();

// Configurar CORS
app.use( cors() );

// base de datos
dbConnection();
//mean_user
//guu9x23Ss900YFEh
//9l9FBpIBgkGc4cou

console.log( process.env);

//rut

app.get( '/', (req, res) => {
   res.json({
       ok:true,
       msg: 'Hola mundo'
   }); 
});


app.listen( process.env.c, () => {
    console.log('servidor corriendo ' + process.env.PORT);
} );



