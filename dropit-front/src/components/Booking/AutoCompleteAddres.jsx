import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import locationIcon from '../../assets/images/location.png'; // Ruta al archivo SVG del icono de ubicación
import destinationIcon from '../../assets/images/destination.png'; // Ruta al archivo SVG del icono de destino
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { SourceContext } from '../../context/SourceContext.js';
import { DestinationContext } from '../../context/DestinationContext.js';
import agregar from '../../assets/images/agregar.png'; // Ruta al archivo SVG del icono de ubicación
import Waypoints from './Waypoints.jsx';

function AutoCompleteAddres() {


    const [valueSource, setValueSource] = useState(null);
    const [valueDestination, setValueDestination] = useState(null);
    const { source, setSource } = useContext(SourceContext);
    const { destination, setDestination } = useContext(DestinationContext);

    const [counter, setCounter] = useState(1);

    
    
    const [componentes, setComponentes] = useState([]);

    const agregarComponente = () => {
        // Genera un nuevo componente (puedes personalizar esto según tus necesidades)
        const nuevoComponente = <Waypoints key={componentes.length} cantidad ={counter} />;
        
            setCounter((prevCounter) => prevCounter + 1);
          
        // Agrega el nuevo componente a la lista
        setComponentes([...componentes, nuevoComponente]);
    };



    const getLatAndLngSource = (place) => {

        const placeId = place.value.place_id;
        const service = new google.maps.places.PlacesService(document.createElement('div'));
        service.getDetails({ placeId }, (place, status) => {
            if (status === 'OK' && place.geometry && place.geometry.location) {

                const newSource = {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng(),
                    name: place.formatted_address,
                    label: place.name
                };

                setSource(newSource)
                // Ahora puedes acceder a source y destination aquí

            }
        })

    }
    const getLatAndLngDestination = (place) => {

        const placeId = place.value.place_id;
        const service = new google.maps.places.PlacesService(document.createElement('div'));
        service.getDetails({ placeId }, (place, status) => {
            if (status === 'OK' && place.geometry && place.geometry.location) {

                const newDestination = {
                    lat: place.geometry.location.lat(),
                    lng: place.geometry.location.lng(),
                    name: place.formatted_address,
                    label: place.name
                };

                setDestination(newDestination)
                // Ahora puedes acceder a source y destination aquí

            }
        })

    }

   


    return (
        <div className='mt-5'>
            <div className='relative'>
                <label className='text-gray-400'>Where From?</label>
                <div className='flex items-center gap-4 bg-white p-1 border-[1px] w-full rounded-md outline-none
                            focus:border-cyan-900'>
                    <img src={locationIcon} alt="Ubicación" className="h-4 w-4" />

                    <GooglePlacesAutocomplete

                        selectProps={{
                            valueSource,
                            onChange: (place) => {
                                getLatAndLngSource(place);
                                setValueSource(place)
                            },
                            placeholder: 'Pickup Location',
                            isClearable: true,
                            className: 'w-full',
                            components: {
                                DropdownIndicator: false
                            },
                            styles: {
                                control: (provide) => ({
                                    ...provide,
                                    backgroundColor: 'white',
                                    border: 'none'
                                })
                            }
                        }}
                    />
                    <button onClick={agregarComponente}>
                        <img src={agregar} alt="Agregar" className="h-5 w-6" />
                    </button>
                </div>
                { componentes.map((componente, index) => (
                    <div key={index}>{componente}</div>
                ))}

            </div>
            <div className='mt-3'>
                <label className='text-gray-400'>Where To?</label>
                <div className='flex items-center gap-4 bg-white p-1 border-[1px] w-full rounded-md outline-none
                            focus:border-cyan-900'>
                    <img src={destinationIcon} alt="Destino" className="h-4 w-4" />
                    <GooglePlacesAutocomplete

                        selectProps={{
                            valueDestination,
                            onChange: (place) => {
                                getLatAndLngDestination(place);
                                setValueDestination(place)
                            },
                            placeholder: 'Pickup Destination',
                            isClearable: true,
                            className: 'w-full',
                            components: {
                                DropdownIndicator: false
                            },
                            styles: {
                                control: (provide) => ({
                                    ...provide,
                                    backgroundColor: 'white',
                                    border: 'none'
                                })
                            }
                        }}
                    />
                </div>

            </div>




        </div>
    )
}

export default AutoCompleteAddres
