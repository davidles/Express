// Modulo  nativo
const path = require('node:path');
// Modulo  3ros
const express = require('express');
const app = express();

// Estatica la carpeta  publica
app.use(express.static('public'));

// Rutas
const homeRoute = require('./routes/homeRoutes.js')

app.use('/', homeRoute);
// app.use('/product', productRoutes)

// app.get('/', (req, res) =>{
//     const pathHome = path.join(__dirname, './views/home.html');
//     res.sendFile(pathHome);
// })

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Servidor andando en el puerto: http://localhost:${PORT}`);
});