const Delivery = require('../models/Delivery');

const updateCourierLocation = async (orderId, latitude, longitude) => {
    try {
        const delivery = await Delivery.findOne({ orderId });
        if (!delivery) {
            throw new Error('Delivery not found');
        }

        delivery.courierLocation = { latitude, longitude };
        await delivery.save();
        return delivery;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    updateCourierLocation,
};