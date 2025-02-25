import React, { useContext } from 'react';
import { InfoPackageContext } from '../../context/InfoPackageContext'; 
import { SourceContext } from '../../context/SourceContext';

import { PickLocationContext } from '../../context/PickLocationContext.js';
import dayjs from 'dayjs';

import axios from 'axios';

const SubmitButton = ({ date, formData }) => {
  const { pickLocation } = useContext(PickLocationContext);
  const { mensaje } = useContext(InfoPackageContext);
  
  const { source } = useContext(SourceContext);
  


  const handleSubmit = async () => {
   
    const formattedDate = date ? dayjs(date).format('YYYY-MM-DD HH:mm:ss') : null;
    let pickupLocation;
    if (source ) {
      pickupLocation = source;
    } else if (pickLocation && pickLocation.lat && pickLocation.lng) {
      pickupLocation = {
        lat: pickLocation.lat,
        lng: pickLocation.lng,
        name: "Ubicación seleccionada",
        label: "Ubicación seleccionada por el usuario"
      };
    } else {
      console.error('No se ha proporcionado una ubicación válida.');
      return;
    }

    
    const payload = {
      pickupDateTime: formattedDate,
      pickupLocation: pickupLocation,
      courierInstructions: mensaje,
      //user: user.id,
      status:'Pendiente'
    };
    console.log("source es:",source)
    console.log('Payload:', payload);

    try {
      const response = await axios.post('http://localhost:3001/api/orders', payload,
        {
          headers: {
            'Content-Type': 'application/json',
              // Reemplaza `sessionId` con tu token
          },
        }
      );
      console.log('Pedido creado:', response.data);
      window.alert('Crimen grabado');
      window.location.reload();
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
