const path = require('node:path');

const controller = {
    renderHome: (req, res) =>{
        const Idhome = req.params.id;
        const { id } = req.params;

        const queryParam = req.query.q;
        const { q, limit, BRAND } = req.query;

        console.log(q, limit, BRAND)

        const pathHome = path.join(__dirname, '../views/home.html');
        res.sendFile(pathHome);
    }
}

module.exports = controller;