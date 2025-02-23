import { Header } from "./Header"
import { Map } from "./Map"
import { Booking } from "./Booking/Booking"
import { SourceContext } from "../context/SourceContext.js"
import { useState } from "react"
import { DestinationContext } from "../context/DestinationContext.js"
import { LoadScript } from "@react-google-maps/api"
import GoogleMapSection from "./GoogleMapSection.jsx"

import { PickLocationContext } from "../context/PickLocationContext.js"

import { InfoPackageProvider } from '../context/InfoPackageContext';


export const RideBookingPanel = ({ }) => {
    const [source, setSource] = useState([]);
    const [destination, setDestination] = useState([]);
    const [pickLocation, setPickLocation] = useState([]);
    
    return (
        <SourceContext.Provider value={{ source, setSource }}>
            <DestinationContext.Provider value={{ destination, setDestination }}>
                <PickLocationContext.Provider value={{ pickLocation, setPickLocation }}>
                    
                    <InfoPackageProvider>
                        <LoadScript
                            libraries={['places']}
                            googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_APIKEY}>
                            <main className="px-2  font-Inter  " >
                                <Header />
                                <div className="grid grid-cols-1 md:grid-cols-3">
                                    <div className="">
                                        <Booking />
                                    </div>
                                    <div className="col-span-2 bg-white ">
                                        <GoogleMapSection />
                                    </div>
                                </div>

                            </main>
                        </LoadScript>
                        </InfoPackageProvider>
                    
                </PickLocationContext.Provider>
            </DestinationContext.Provider>
        </SourceContext.Provider>
    )
}