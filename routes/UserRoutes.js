const express = require('express')
const router = express()
const UserControllers = require('../controllers/userControllers')

router.get('/product/get', UserControllers.get_product)
router.get('/product/search', UserControllers.search_product)


router.get('/cart', UserControllers.get_cart)
router.put('/cart/item', UserControllers.update_cart_item)
router.post('/cart/checkout', UserControllers.checkout_cart)

router.get('/orders', UserControllers.get_orders)
router.get('/orders/item', UserControllers.get_order_status)
router.put('/orders/item/review', UserControllers.create_review)

module.exports = router