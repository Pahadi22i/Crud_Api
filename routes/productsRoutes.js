const express =require('express');
const router =express.Router();
const Product = require("../models/productModel");
const { getProduct ,getProducts,createProduct,updateProduct,deleteProduct,findProduct } = require("../controler/productControler");





// Routes

// give all products
router.get("/",getProducts), 


// get single product 
router.get('/:id',getProduct);


// delete product
router.delete("/:id",deleteProduct) 

// update products
router.put("/:id", updateProduct)

// find product
router.get("/:id", findProduct)

// create product 
router.post("/",createProduct); 



module.exports=router;
