const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  lat: Number,
  lng: Number,
  name: String,
  label: String
});

const OrderSchema = new mongoose.Schema({
  pickupDateTime:  Date, // Fecha y hora de recogida
  pickupLocation: locationSchema, // Origen
  courierInstructions: { type: String }, // Instrucciones para el mensajero
  user: { type: String, required: true },
  status: { type: String, default: 'Pendiente' }, // Estado del pedido
  createdAt: { type: Date, default: Date.now } // Fecha de creación
});

module.exports = mongoose.model('Order', OrderSchema);

