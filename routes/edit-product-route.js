const express = require('express');
const productController = require('../controllers/edit-product');

const router = express.Router();

router.get('/:id', productController.getNecklace);

router.put('/update/:id', productController.updateNecklace);

router.delete('/delete/:id', productController.deleteNecklace);

router.post('/create', productController.addNecklace);