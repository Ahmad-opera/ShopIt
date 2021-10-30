const Product = require('../models/product')

module.exports.search_product = async(req, res) => {
    res.send('search_product')
}

module.exports.get_product = async(req, res) => {
    res.send('get_product')
}

module.exports.get_cart = async(req, res) => {
    res.send('get_cart')
}

module.exports.update_cart_item = async(req, res) => {
    res.send('update_cart_item')
}

module.exports.checkout_cart = async(req, res) => {
    res.send('checkout_cart')
}

module.exports.get_orders = async(req, res) => {
    res.send('get_orders')
}

module.exports.get_order_status = async(req, res) => {
    res.send('get_order_status')
}

module.exports.create_review = async(req, res) => {
    res.send('create_review')
}
