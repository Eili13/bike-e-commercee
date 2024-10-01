const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please Enter Product Name'],
        trim: true,
        maxLength: [100, 'Product name cannout exceed 100 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please Enter Product Price'],
        maxLength: [5, 'Product name cannout exceed 5 characters'],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, 'Please Enter Product Description'],
    },
    ratings: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
        }
    ],

    category: {
        type: String,
        required: [true, 'Please Select Category for this product.'],
        enum: {
            values: [
                
                    'Drivetrain Components',
                    'Braking Systems',
                    'Wheels and Tires',
                    'Frames and Forks',
                    'Cockpit Components',
                    'Suspension Components',
                    'Pedals and Cleats',
                    'Seating and Comfort',
                    'Accessories',
                    'Maintenance Tools'   
            ],
            message: 'Please select correct category for product'
        }
    },
    seller: {
        type: String,
        required: [true, 'Please enter product seller']
    },
    stock: {
        type: Number,
        required: [true, 'Please enter product stock'],
        maxLength: [5, 'Product name cannot exceed 5 characters'],
        default: 0
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Product', productSchema);