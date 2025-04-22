const express = require("express");
const { Add_Products, get_all_Products, getProduct, update_Product, deleteProduct} = require('../Controller - Cafeteria/cafe_inv.controllers')
const inv_router = express.Router();

inv_router.post('/', Add_Products);
inv_router.get('/', get_all_Products);
inv_router.get('/:id', getProduct);
inv_router.put('/put/:id', update_Product);
inv_router.delete('/del/:id', deleteProduct);

module.exports = inv_router;