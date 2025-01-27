import React, { useState } from 'react'
import{CarListData} from'../../../utils/CarListData.js'
import CarListItem from './CarListItem.jsx'

function CarListOption({distance}) {
  const [activeIndex, setActiveIndex]=useState();
  const [selectCar, setSelectCar]=useState([]);
  return (
    <div className='mt-5 p-5 overflow-auto h-[250px]'>
      <h2 className='text-[22px] font-bold'>Tarifa servicio</h2>
      {CarListData.map((item, index)=>(
        <div key={item.id}className={`cursor-pointer p-2 px-4 rounded-md border-black ${activeIndex===index? 'border-[3px]':null}`}
             onClick={()=>{setActiveIndex(index);
              setSelectCar(item)
             }}>
            <CarListItem 
            
            car={item}
            distance={distance}/>
        </div>
      ))}
      {/*selectCar?.name?
      <div className='flex justify-between fixed bottom-5 bg-white p-3 shadow-xl rounded-lg w-full md:w-[30%] border-[1px] items-center'>
        <h2>Make Payment For</h2>
          <button  className='p-3 bg-cyan-900 text-white rounded-lg text-center'>Request {selectCar.name}</button>
      </div>:null*/}
    </div>
  )
}

export default CarListOption

