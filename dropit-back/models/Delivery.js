const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true,
        unique: true,
    },
    pickupLocation: {
        type: {
            lat: Number,
            lng: Number,
            label: String,
        },
        required: true,
    },
    deliveryDestination: {
        type: {
            lat: Number,
            lng: Number,
            label: String,
        },
        required: true,
    },
    courierLocation: {
        type: {
            latitude: Number,
            longitude: Number,
        },
        default: null,
    },
    waypoints: [
        {
            lat: Number,
            lng: Number,
            label: String,
        },
    ],
});

const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;