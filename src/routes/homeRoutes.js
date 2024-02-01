const path = require('node:path');
const express = require('express');
const router = express.Router();

const homeController = require('../controller/homeController');
// router.get('/', homeController.renderHome)

// let  title = 123

// req {
//     params: {id: zapatilla}
// }

// router.get('/:id', homeController.renderHome)
router.get('/', homeController.renderHome);


module.exports = router;