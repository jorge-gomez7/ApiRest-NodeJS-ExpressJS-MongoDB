//inicializamos para usar las variables de entorno
require('dotenv').config();

const express = require('express');
const cors = require('cors')


//requerir la conexion a la base de datos
const { dbConnection } = require('./database/config');


//inicializar servidor
const app = express();

//configurar los cors
app.use(cors());




//lectura del body
app.use(express.json());


//inicializar a la base de datos

dbConnection();



//rutas
app.use('/api/colaboradores', require('./routes/colaboradores.routes'));








//ejecutar servidor en puerto especifico
app.listen(process.env.PORT, () => {
    console.log('Server running on port ' + process.env.PORT);
});