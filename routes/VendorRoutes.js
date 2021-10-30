const express = require('express')
const router = express()
const VendorControllers = require('../controllers/vendorControllers')

// Get Alls
router.get('/products', VendorControllers.get_all_products)
router.get('/orders', VendorControllers.get_all_orders)

// Product Controllers
router.get('/product/get', VendorControllers.get_product)
router.put('/product/edit', VendorControllers.edit_product)
router.post('/product/create', VendorControllers.add_product)
router.delete('/product/delete', VendorControllers.delete_product)

// Order Controllers
router.get('/order', VendorControllers.get_order)
router.put('/order', VendorControllers.edit_order)
router.post('/order', VendorControllers.add_order)
router.post('/order/refund', VendorControllers.refund_order)

// Coupon Controllers
router.get('/coupon', VendorControllers.get_coupon)
router.put('/coupon', VendorControllers.edit_coupon)
router.post('/coupon', VendorControllers.add_coupon)
router.delete('/coupon', VendorControllers.revoke_coupon)


module.exports = router