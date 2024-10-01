const Product = require('../models/product')

// Create new Product => /api/v1/product/new
exports.newProduct = async (req, res, next) => {
    
    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })

}

// Get Single Product Details => /api/v1/product/:id

const mongoose = require('mongoose');

exports.getSingleProduct = async (req, res, next) => {
    // Validate the ID format before querying
    const productId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid Product ID format'
        });
    }

    // Attempt to find the product by ID
    const product = await Product.findById(productId);

    // Check if the product was found
    if (!product) {
        return res.status(404).json({
            success: false,
            message: 'Product not found!!'
        });
    }

    // Respond with the found product
    res.status(200).json({
        success: true,
        product
    });
};

// Get All Products => /api/v1/products

exports.getProducts = async (req, res, next) => {

    const product = await Product.find();


    res.status(200).json({
        success: true,
        count: product.length,
        product
    })
}


// Update Products => /api/v1/products/:id

exports.updateProduct = async (req, res, next) => {
    let product = await Product.findById(req.params.id);

    if(!product) {
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        product
    })
}

// Deleting Product by ID => /api/v1/admin/products/:id

exports.deleteProduct = async (req, res, next) => {

    const product = await Product.findById(req.params.id);

    if(!product) {
        return res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    }

    await product.deleteOne(); 

    res.status(200).json({
        success: true,
        message: 'Product has been Deleted'
    })
    


}


