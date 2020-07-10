const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        max: 300
    }
    , Alias: {
        type: String,
        trim: true,
        max: 300
    }
    , Image: {
        type: String,
        trim: true
    }
    , MoreImages: {
        type: [String],
        trim: true
    }
    , Price: {
        type: Schema.Types.Decimal128,
        required: true,
        trim: true,
    }
    , PromotionPrice: {
        type: Schema.Types.Decimal128,
        trim: true,
    }
    , Description: {
        type: String,
        trim: true
    }
    , HomeFlag: {
        type: Boolean,
        default: false,
    }
    , HotFlag: {
        type: Boolean,
        default: false,
    }
    , ViewCount: {
        type: Number
    }
    , Quantity: {
        type: Number
    }
    , ProductCategory: { type: Schema.Types.ObjectId, ref: 'product_category' }
});

const Product = mongoose.model('product', productSchema);
module.exports = { Product };