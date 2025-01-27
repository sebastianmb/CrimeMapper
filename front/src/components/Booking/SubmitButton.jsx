import React, { useContext } from 'react';
import { InfoPackageContext } from '../../context/InfoPackageContext'; 
import { SourceContext } from '../../context/SourceContext';
import { DestinationContext } from '../../context/DestinationContext';
import { WaypointContext } from '../../context/WaypointsContext';
import dayjs from 'dayjs';
import { useUser, useSession } from "@clerk/clerk-react";
import axios from 'axios';

const SubmitButton = ({ date, formData }) => {
  const { mensaje, tamaño, peso, valor } = useContext(InfoPackageContext);
  const {  user } = useUser();
  const { source } = useContext(SourceContext);
  const { destination } = useContext(DestinationContext);
  const { waypoint } = useContext(WaypointContext);
  const { session } = useSession()

  const handleSubmit = async () => {
    const sessionId = session?.id; // Esto obtiene el ID de la sesión directamente
    const formattedDate = date ? dayjs(date).format('YYYY-MM-DD HH:mm:ss') : null;
    const payload = {
      pickupDateTime: formattedDate,
      pickupLocation: source,
      waypoints: waypoint,
      deliveryDestination: destination,
      recipientName: formData.name,
      recipientPhone: formData.telefono,
      recipientEmail: formData.correo,
      courierInstructions: mensaje,
      packageSize: tamaño,
      declaredValue: valor,
      packageWeight: peso,
      user: user.id,
      precioEnvio:(13000 + 7000*waypoint.length).toFixed(0),
      status:'Pendiente'
    };
    console.log('Payload:', payload);

    try {
      const response = await axios.post('http://localhost:3001/api/orders', payload,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionId}`,  // Reemplaza `sessionId` con tu token
          },
        }
      );
      console.log('Pedido creado:', response.data);
    } catch (error) {
      console.error('Error al crear el pedido:', error);
    }
  };

  return (
    <button className='p-3 bg-cyan-900 w-full mt-5 text-white rounded-lg' onClick={handleSubmit}>
      Crear Pedido
    </button>
  );
};

export default SubmitButton;
