const mongoose = require("mongoose");
const ObjectId = require('mongodb').ObjectId
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    vendorId: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    specs: {
        type: Array,
        required: true
    },
    qtyType: {
        type: String,
        required: true
    },
    priceTag: {
        type: Number,
        required: true
    },
    prevPrice: {
        type: Number,
        required: true
    },
    types: [{
        colors: [{
            name: String,
            inStock: Boolean,
            price: Number
        }],
        sizes: [{
            size: String,
            inStock: Boolean
        }],
    }],
    units: [{
        name: String,
        inStock: Boolean,
        types: [{
            colors: [{
                name: String,
                inStock: Boolean,
                price: Number
            }],
            sizes: [{
                size: String,
                inStock: Boolean
            }],
        }],
        price: Number
    }],
    inStock: {
        type: Boolean,
        required: true
    }

})

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product