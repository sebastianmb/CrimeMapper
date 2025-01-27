import React ,{useContext}from 'react'

import { WaypointContext } from '../../context/WaypointsContext';
import { HiUser } from "react-icons/hi2";

function CarListItem({ car, distance }) {
  
  const { waypoint, setWaypoint } = useContext(WaypointContext);
  return (
    <div>
      <div className='flex items-center justify-between mt-5'>
        <div className='flex items-center gap-5'>
          <img src={car.image}
            width={100} height={100} />
          <div>
            <h2 className='font-semibold text-[18px] flex gap-3 items-center'>{car.name} 
              <span className='flex gap-2 font-normal text-[14px] items-center'>
                <HiUser />{/*car.seat*/}
              </span>
            </h2>
            <p>{car.desc}</p>
          </div>
        </div>
        <h2 className='text-[18px] font-semibold'>${(car.amount + car.add*waypoint.length).toFixed(0)}</h2>

      </div>
    </div>
  )
}

export default CarListItem
