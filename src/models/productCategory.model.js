const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
        trim: true,
        max: 300
    },
    Alias: {
        type: String,
        trim: true,
        max: 300
    },
    Description: {
        type: String,
        trim: true
    },
    ParentID: {
        type: mongoose.SchemaTypes.ObjectId
    },
    DisplayOrder: {
        type: Boolean,
        default: false
    },
    Image: {
        type: String,
        trim: true
    },
    HomeFlag:{
        type: Boolean,
        default: false
    }
});

const ProductCategory = mongoose.model('product_category', productSchema);
module.exports = { ProductCategory }
