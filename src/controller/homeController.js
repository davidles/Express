const path = require('node:path');

const data = require('../models/productData.json'); // Objeto literal


const controller = {
    renderHome: (req, res) =>{
        const Idhome = req.params.id;
        const { id } = req.params;

        const queryParam = req.query.q;
        const { q, limit, BRAND } = req.query;

        // console.log(q, limit, BRAND)

        // const pathHome = path.join(__dirname, '../views/home.html');
        // res.sendFile(pathHome);

        // console.log(data)

        res.render('home', {
            title: 'Productos recomendados',
            products: data.results
        })
    }
}

module.exports = controller;