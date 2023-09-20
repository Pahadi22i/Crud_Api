const Product =require('../models/productModel');
const asyncHandler = require("express-async-handler");




// get single product

const getProduct=asyncHandler( async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
     res.status(500);
     throw new Error(error.massage);
  }
})


// get product 

const getProducts =asyncHandler( async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500);
    throw new Error(error.massage);
  }
});


// create product

const  createProduct =asyncHandler( async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.massage);
  }
});

// update product


const updateProduct =asyncHandler( async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      res.status(404);
      throw new Error(`cannot find any product with ID ${id}`);
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
     res.status(500);
     throw new Error(error.massage);
  }
});

// delete product

const deleteProduct = asyncHandler( async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
     res.status(404);
     throw new Error(`cannot find any product with ID ${id}`);
        
    }
    res.status(200).json(product);
  } catch (error) {
     res.status(500);
     throw new Error(error.massage);
  }
});

// find product 

const findProduct =asyncHandler( async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500);
    throw new Error(error.massage);
   
  }
});



module.exports={
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct,
    findProduct,
}