import { NewArticle } from "./NewArticle"
import locationIcon from '../assets/images/location.png'; // Ruta al archivo SVG del icono de ubicación
import destinationIcon from '../assets/images/destination.png'; // Ruta al archivo SVG del icono de destino
import { Link } from 'react-router-dom';




export const SidePanel = () => {
  return (
    <aside className="py-[28px] px-[20px] text-cyan-900 flex-none mb-[60px] md:w-[350px] md:mb-0 lg:w-2/5 ">
      <div >
        <div className='flex-1 py-6'>
          <h2 className='text-[40px]  leading-none font-bold sm:text-[58px]'>La app para enviar a cualquier lugar</h2>
        </div>
        <div className='flex flex-col  pt-2 '>
          <p className='mb-10 text-[13px] sm:text-[17px] '>Solicita tu envío, elige el destino y relájate.</p>
          <div className="relative">
            <input
              type="text"
              placeholder="Punto de origen"
              className="mb-4 p-2 border border-gray-300 rounded pl-10 w-full"
            />
            <div className="absolute left-3 top-3">
              <img src={locationIcon} alt="Ubicación" className="h-4 w-4" />
            </div>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Punto de destino"
              className="flex-1 mb-4 p-2 border border-gray-300 rounded pl-10 w-full"
            />
            <div className="absolute left-3 top-3">
              <img src={destinationIcon} alt="Destino" className="h-4 w-4" />
            </div>
          </div>
          
            <button className='bg-cyan-900 w-[170px] h-[40px] rounded-[10px]  text-OffWhite hover:bg-VeryDarkBlue '><Link to="/login">Ver precios</Link></button>
          
        </div>
      </div>
    </aside>
  )
}