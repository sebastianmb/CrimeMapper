const express = require("express");
const { Server } = require('socket.io');
const http = require('http');




const cors = require('cors');
const connectDB = require('../config/db');
const orderRoutes = require('../routes/orderRoutes');
const deliveryController = require('../controllers/deliveryController'); // Importa el controlador
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Configura los dominios permitidos
    methods: ["GET", "POST"],
  },
});

// Conectar a la base de datos
connectDB();

// Middleware para procesar JSON
app.use(express.json()); // Coloca este middleware antes de las rutas
app.use(cors());

// Usar las rutas de pedidos
app.use('/api/orders', orderRoutes);

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Error interno del servidor');
});

// WebSockets
io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('updateLocation', async (data) => {
      const { orderId, latitude, longitude } = data;
      try {
          const updatedDelivery = await deliveryController.updateCourierLocation(orderId, latitude, longitude);
          io.emit('locationUpdated', updatedDelivery);
      } catch (error) {
          socket.emit('error', error.message);
      }
  });

  socket.on('disconnect', () => {
      console.log('Client disconnected');
  });
});


// Inicialización del servidor
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
