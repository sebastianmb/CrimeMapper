
import React, { useContext, useState } from 'react';

import AutoCompleteAddres from './AutoCompleteAddres';
import { SourceContext } from '../../context/SourceContext';
import { DestinationContext } from '../../context/DestinationContext';
import CarListOption from './CarListOption';

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
  const [isSubmitActive, setIsSubmitActive] = useState(false);

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
          {destination.length != [] ? <button className='flex items-center gap-4 bg-white p-5' onClick={handleButtonClick}>
            <img src={mas} alt="mas" className="h-3 w-3" />
            <span className=' text-[12px]'>Agregar datos de la persona que recibe</span>
          </button> : null}
            {showForm && (
              <form class="bg-white p-6 rounded-lg  w-full max-w-sm">
                <div class="mb-4 flex space-x-4">
                  <div class="w-1/2">
                    <input
                      type="text"
                      name="name"
                      placeholder="Nombre completo"
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm "
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div class="w-1/2">
                    <input
                      type="text"
                      name="telefono"
                      placeholder="Teléfono"
                      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm "
                      value={formData.telefono}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div class="mb-4">
                  <input
                    type="text"
                    name="correo"
                    placeholder="Correo electrónico"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-sm "
                    value={formData.correo}
                    onChange={handleInputChange}
                  />
                </div>
                {/* Agrega más campos según sea necesario */}
              </form>
            )}
            <InfoPackage />
            <button className='p-3 bg-cyan-900 w-full mt-5 text-white rounded-lg'
              onClick={() => calculateDistance()}
            >Search</button>
            {distance ? <CarListOption distance={distance} /> : null}
          
            {isSubmitActive &&<SubmitButton date={date} formData={formData}/>}
        </div>

      </div>

    </div>
  );
};

