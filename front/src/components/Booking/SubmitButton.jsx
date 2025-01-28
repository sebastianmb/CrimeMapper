import React, { useContext } from 'react';
import { InfoPackageContext } from '../../context/InfoPackageContext'; 
import { SourceContext } from '../../context/SourceContext';
import { DestinationContext } from '../../context/DestinationContext';
import { WaypointContext } from '../../context/WaypointsContext';
import dayjs from 'dayjs';
import { useUser, useSession } from "@clerk/clerk-react";
import axios from 'axios';

const SubmitButton = ({ date, formData }) => {
  const { mensaje } = useContext(InfoPackageContext);
  const {  user } = useUser();
  const { source } = useContext(SourceContext);
  
  const { session } = useSession()

  const handleSubmit = async () => {
    const sessionId = session?.id; // Esto obtiene el ID de la sesión directamente
    const formattedDate = date ? dayjs(date).format('YYYY-MM-DD HH:mm:ss') : null;
    const payload = {
      pickupDateTime: formattedDate,
      pickupLocation: source,
      courierInstructions: mensaje,
      user: user.id,
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
      Send Report
    </button>
  );
};

export default SubmitButton;
