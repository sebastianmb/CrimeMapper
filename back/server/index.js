const express = require("express");
const cors = require("cors");
const connectDB = require("../config/db");
const orderRoutes = require("../routes/orderRoutes");
require("dotenv").config();

const app = express();

// Conectar a la base de datos
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Rutas
app.use("/api/orders", orderRoutes);

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Error interno del servidor");
});

// Inicialización del servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
  
});
