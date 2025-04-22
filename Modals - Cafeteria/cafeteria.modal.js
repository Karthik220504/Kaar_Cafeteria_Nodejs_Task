const mongoose = require('mongoose');

const CafeteriaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"]
    },
    AID: {
        type: String,
        required: [true, "Please enter your AID"]
    },
    DOB: {
        type: String,
        required: [true, "Please enter your DOB"]
    },
    drink_preferences: {
        type: String,
        required: true,
        enum: ['Tea', 'Coffee','Boost', 'Horlicks', 'Milk', 'Badam_Milk', 'Chocolate_Milk', 'Soup', 'Lemon_tea', 'Green_tea']
    },
    quantity_perday: {
        type: Number,
        required: true,
        default: 0
    }
},
    {
        timestamps: true
    }
);

const Cafeteria = mongoose.model('Cafeteria', CafeteriaSchema);
module.exports = Cafeteria;