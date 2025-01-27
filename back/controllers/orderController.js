const Order = require('../models/Order');





// Crear un nuevo pedido
const createOrder = async (req, res) => {
    console.log('Request Body:', req.body);
    const { pickupDateTime, pickupLocation, waypoints, deliveryDestination, recipientName, recipientPhone, recipientEmail, courierInstructions, packageSize, declaredValue, packageWeight,user,precioEnvio,status } = req.body;
    try {
        const order = new Order({
            pickupDateTime,
            pickupLocation,
            waypoints,
            deliveryDestination,
            recipientName,
            recipientPhone,
            recipientEmail,
            courierInstructions,
            packageSize,
            declaredValue,
            packageWeight,
            user,
            precioEnvio, // Añadido precio de envío
            status // Añadido estado del pedido
        });
        await order.save();
        res.status(201).json({ message: 'Order created successfully', order });
    } catch (error) {
        console.error('Error details:', error);
        res.status(500).json({ message: error.message });
    }
};

const getOrders = async (req, res) => {
    try {
        console.log("User ID:", req.user); // Muestra el ID del usuario autenticado


        // Extrae el estado de los parámetros de consulta (query)
        const { status } = req.query;

        // Crea un objeto de consulta dinámico
        const query = { user: req.user }; // Por defecto, filtra por el usuario autenticado

        if (status) {
            query.status = status; // Si se especifica un estado, lo agrega al filtro
        }

        const orders = await Order.find(query); // Filtra los pedidos por usuario autenticado


        res.status(200).json(orders);
    } catch (error) {
        console.error('Error details:', error);
        res.status(500).json({ message: 'Error al obtener los pedidos' });
    }
};

const deleteOrder = async (req, res) => {
    const { id } = req.params; // Obtenemos el ID del pedido desde los parámetros de la URL
    try {
        // Busca el pedido por ID y asegura que pertenece al usuario autenticado
        const order = await Order.findOneAndDelete({ _id: id, user: req.user });
        
        if (!order) {
            return res.status(404).json({ message: 'Pedido no encontrado o no autorizado para eliminarlo' });
        }
        
        res.status(200).json({ message: 'Pedido eliminado con éxito', order });
    } catch (error) {
        console.error('Error details:', error);
        res.status(500).json({ message: 'Error al eliminar el pedido' });
    }
};

//mobile

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find(); // Devuelve todos los pedidos
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error details:', error);
        res.status(500).json({ message: 'Error al obtener todos los pedidos' });
    }
};


const acceptOrder = async (req, res) => {
    const { id } = req.params; // ID del pedido
    try {
        // Busca el pedido por su ID
        const order = await Order.findById(id);

        if (!order) {
            return res.status(404).json({ message: "Pedido no encontrado" });
        }

        // Cambia el estado del pedido a "Aceptado"
        order.status = "Aceptado";
        await order.save();

        // Devuelve las coordenadas y detalles relevantes
        res.status(200).json({
            message: "Pedido aceptado",
            data: {
                pickupLocation: order.pickupLocation,
                deliveryDestination: order.deliveryDestination,
                waypoints: order.waypoints,
            },
        });
    } catch (error) {
        console.error("Error al aceptar el pedido:", error);
        res.status(500).json({ message: "Error al aceptar el pedido" });
    }
};

module.exports = { createOrder,getOrders, deleteOrder, getAllOrders, acceptOrder};