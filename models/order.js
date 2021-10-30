const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    itemId: {
        type: String,
        required: true
    },
    unitsOrdered: [{
        "unit": String,
        "qty": Number
    }]
})

const Order = mongoose.model('Order', OrderSchema)

module.exports = Order