const Product = require('../models/product')
const Order = require('../models/order')

module.exports.get_all_products = async(req, res) => {
    try{
        const getProds = await Product.find({vendorId: 'ahmad'})
        res.json(getProds)
    }catch(err){
        res.json(err.msg)
    }
}

module.exports.get_all_orders = async(req, res) => {
    try{
        const getOrders = await Order.find()
        res.json(getOrders)
    }catch(err){
        res.json(err.msg)
    }
}

module.exports.get_product = async(req, res) => {
    const { _id, vendorId } = req.body
    try{
        const getProd = await Product.findOne({_id, vendorId})
        res.json(getProd)
    }catch(err){
        res.json(err.msg)
    }
}

module.exports.edit_product = async(req, res) => {
    const {_id, vendorId, category, manufacturer, name, description, specs, qtyType, price, units, inStock} = req.body
    try{
        const updateProd = await Product.findOneAndUpdate({_id}, { vendorId, category, manufacturer, name, description, specs, qtyType, price, units, inStock})
        if(updateProd) return res.json(updateProd)
        return res.status(403).json({msg: 'An error occured!'})
    }catch(err){
        return res.json(err)
    }
}

module.exports.add_product = async(req, res) => {
    const {vendorId, category, manufacturer, name, description, specs, qtyType, price, units, inStock} = req.body
    try{
        const newProd = new Product({ vendorId, category, manufacturer, name, description, specs, qtyType, price, units, inStock})
        const savedProd = await newProd.save()
        return res.json(savedProd)
    }catch(err){
        return res.status(400).json(err.msg)
    }
}

module.exports.delete_product = async(req, res) => {
    const {_id} = req.body
    try{
        const delProd = await Product.findOneAndRemove({_id})
        if(delProd) return res.json(delProd)
        return res.status(404).json({msg: 'ID not found!'})
    }catch(err){
        return res.status(403).json(err.msg)
    }
}

module.exports.get_order = async(req, res) => {
    res.send('get_order')
}

module.exports.edit_order = async(req, res) => {
    const { _id, vendorId } = req.body
    try{
        const getProd = await Product.findOne({_id, vendorId})
        res.json(getProd)
    }catch(err){
        res.json(err.msg)
    }
}

module.exports.add_order = async(req, res) => {
    res.send('add_order')
}

module.exports.refund_order = async(req, res) => {
    res.send('refund_order')
}

module.exports.get_coupon = async(req, res) => {
    res.send('get_coupon')
}

module.exports.edit_coupon = async(req, res) => {
    res.send('edit_coupon')
}

module.exports.add_coupon = async(req, res) => {
    res.send('add_coupon')
}

module.exports.revoke_coupon = async(req, res) => {
    res.send('revoke_coupon')
}
