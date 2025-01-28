import React, { useContext, useEffect, useState } from 'react'
import { DirectionsRenderer, GoogleMap, Marker, MarkerF, OverlayView, useJsApiLoader } from '@react-google-maps/api';
import { SourceContext } from "../context/SourceContext.js"
import { DestinationContext } from '../context/DestinationContext.js';
import { PickLocationContext } from '../context/PickLocationContext.js';
import { WaypointContext } from '../context/WaypointsContext.js';

import locationIcon from '../assets/images/location.png';
import destinationIcon from '../assets/images/destination.png';



const containerStyle = {
  width: '100%',
  height: window.innerWidth * 0.45
};





function GoogleMapSection() {

  const { pickLocation, setPickLocation } = useContext(PickLocationContext);


  const { source, setSource } = useContext(SourceContext);
 
  const { waypoint, setWaypoint } = useContext(WaypointContext)

  const [center, setCenter] = useState({
    lat: 4.638662268473553,
    lng: -74.07824294099393
  });

  useEffect(() => {
    if (source?.length != [] && map) {

      map.panTo(
        {
          lat: source.lat,
          lng: source.lng
        }
      )

      setCenter({
        lat: source.lat,
        lng: source.lng
      })
    }

    
  }, [source])

  



  const [map, setMap] = React.useState(null)
  
  

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);


    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])


  return (
    <GoogleMap


      mapContainerStyle={containerStyle}
      center={center}
      zoom={11}
      onLoad={map => setMap(map)}

      options={{
        mapId: 'ff4d11015dfc5291',
        gestureHandling: 'greedy'
      }}


      onClick={(e) => setPickLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() })}



    >
      {console.log("localizacion mapa",pickLocation)}

      {/*pickLocation && <Marker position={pickLocation} />*/}

      {source.length != [] ? <Marker
        position={{ lat: source.lat, lng: source.lng }}
        icon={{
          url: locationIcon,
          scaledSize: {
            width: 20,
            height: 20
          }
        }}
      >
        <OverlayView
          position={{ lat: source.lat, lng: source.lng }}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <div className='p-2 bg-white font-bold inline-block'>
            <p className='text-black text-[18px]'>{source.label}</p>
          </div>
        </OverlayView>

      </Marker> : null}

      {pickLocation.length != [] ? <Marker
        position={{ lat: pickLocation.lat, lng: pickLocation.lng }}
        icon={{
          url: locationIcon,
          scaledSize: {
            width: 20,
            height: 20
          }
        }}
      >
        <OverlayView
          position={{ lat: pickLocation.lat, lng: pickLocation.lng }}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <div className='p-2 bg-white font-bold inline-block'>
            <p className='text-black text-[18px]'>{pickLocation.lng}</p>
          </div>
        </OverlayView>

      </Marker> : null}


      

      {waypoint.length !== 0 && waypoint.map((waypoint, index) => (
        <Marker
          key={index}
          position={{ lat: waypoint.lat, lng: waypoint.lng }}
          icon={{
            url: locationIcon,
            scaledSize: {
              width: 20,
              height: 20
            }
          }}
        >
          <OverlayView
            position={{ lat: waypoint.lat, lng: waypoint.lng }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
          >
            <div className='p-2 bg-white font-bold inline-block'>
              <p className='text-black text-[18px]'>{waypoint.label}</p>
            </div>
          </OverlayView>
        </Marker>
      ))}

      


    </GoogleMap>
  )
}

export default GoogleMapSection
