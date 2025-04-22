const mongoose = require('mongoose');

const InventorySchema = new mongoose.Schema({
    product_id: {
        type: String,
        required: [true, "Please enter the product ID"],
    },
    item_name: {
        type: String,
        required: [true, "Please enter the item name"]
    },
    quantity: {
        type: Number,
        required: [true, "Please enter the quantity available"],
    },
}, {
    timestamps: true
});

const Inventory = mongoose.model('Inventory', InventorySchema);

module.exports = Inventory;
