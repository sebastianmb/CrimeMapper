const express = require('express');
const router = express.Router();
const { createOrder, getOrders, getOrderById, updateOrder, deleteOrder,getAllOrders,acceptOrder } = require('../controllers/orderController');
const requireAuth = require('../middleware/requireAuth'); // Importa el middleware
const validateCourierToken = require('../middleware/validateCourierToken');


// Define las rutas con el middleware de autenticación
router.route('/')
    .post(requireAuth,createOrder) // Solo permite crear si está autenticado
    .get( requireAuth,getOrders);    // Solo permite obtener si está autenticado

// Ruta para eliminar un pedido por ID
router.route('/:id')
    .delete(requireAuth, deleteOrder); // Solo permite eliminar si está autenticado


// Ruta para repartidores (consulta de todos los pedidos)
router.route('/all-orders')
    .get( requireAuth,getAllOrders);



// Exporta el enrutador
module.exports = router;
