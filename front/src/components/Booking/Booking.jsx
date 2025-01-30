
import React, { useContext, useState } from 'react';

import AutoCompleteAddres from './AutoCompleteAddres';
import { SourceContext } from '../../context/SourceContext';
import { DestinationContext } from '../../context/DestinationContext';


import { DateTimePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

import mas from '../../assets/images/mas.png';
import InfoPackage from './InfoPackage';
import SubmitButton from './SubmitButton';



export function Booking() {
  const screenHight = window.innerHeight;

  const { source, setSource } = useContext(SourceContext);
  const { destination, setDestination } = useContext(DestinationContext);
  const [distance, setDistance] = useState();
  const [isSubmitActive, setIsSubmitActive] = useState(true);

  const [showForm, setShowForm] = useState(false);
  const [date, setDate] = useState(dayjs(null));
  const [formData, setFormData] = useState({
    name: '',
    telefono: '',
    correo: ''
  });

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };


  const calculateDistance = () => {
    const dist = google.maps.geometry.spherical.computeDistanceBetween(
      { lat: source.lat, lng: source.lng },
      { lat: destination.lat, lng: destination.lng },
    )
    console.log(dist / 1000);
    setDistance(dist / 1000)
    setIsSubmitActive(true); // Activar el botón de envío
  }

  return (
    <div>
      <div className='p-5'>
        <h2 className=' text-[20px] font-semibold'>Report a crime</h2>

        <div className='border-[1px] p-5 rounded-md' >
          <DateTimePicker label="Pick date and time"
            value={date}
            onChange={(newValue) => setDate(newValue)} />
          <AutoCompleteAddres />
          
            <InfoPackage />
            
          
            {isSubmitActive &&<SubmitButton date={date} formData={formData}/>}
        </div>

      </div>

    </div>
  );
};

