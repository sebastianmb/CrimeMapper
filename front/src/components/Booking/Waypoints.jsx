import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { WaypointContext } from '../../context/WaypointsContext';



function Waypoints({cantidad}) {

  const { waypoint, setWaypoint } = useContext(WaypointContext);
  

  const getNameAddress = (place) => {

    const placeId = place.value.place_id;
    const service = new google.maps.places.PlacesService(document.createElement('div'));
    service.getDetails({ placeId }, (place, status) => {
      if (status === 'OK' && place.geometry && place.geometry.location) {

        const newWaypoint = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
          name: place.formatted_address,
          label: place.name

        };

        setWaypoint((prevWaypoints) => [...prevWaypoints, newWaypoint]);
        // Ahora puedes acceder a source y destination aquí


      }
    })

  }
  useEffect(() => {
    console.log('Contenido de waypoint:', waypoint);
  }, [waypoint]);

  

  return (
    <div className='mt-3'>
      <div className='relative'>

        <div className='flex items-center gap-4 bg-white p-1 border-[1px] w-full rounded-md outline-none
                            focus:border-cyan-900'>
          <div className="bg-cyan-900 h- w-4 text-white flex items-center justify-center text-[16px] rounded-md">{cantidad}</div>

          <GooglePlacesAutocomplete

            selectProps={{
              //valueSource,
              onChange: (place) => {
                getNameAddress(place)
                //getLatAndLngSource(place);
                //setValueSource(place)
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


        </div>

      </div>
    </div>
  )
}

export default Waypoints
