
import { Link } from 'react-router-dom';






export const NewContainer = () => {
  
  

  return (
    <aside className="py-[28px] px-[20px] text-cyan-900 flex-none mb-[60px] md:w-[350px] md:mb-0 lg:w-2/5 ">
      <div >
        <div className='flex-1 py-6'>
          <h1 className='text-[40px] pb-[10px] leading-none font-bold sm:text-[45px]'>CrimeMapper: Real-Time Crime Maps and Safety Insights</h1>
          <h2 className='text-[20px]  leading-none italic sm:text-[30px]'>Check Crime in Your Area & Report Incidents with CrimeMapper</h2>
        </div>
        <div className='flex flex-col  pt-2 '>
          <p className='mb-10 text-[13px] sm:text-[17px] '>Log in to access the map.</p>

          
            
              <button className='bg-cyan-900 w-[170px] h-[40px] rounded-[10px] text-OffWhite hover:bg-VeryDarkBlue'>Login</button>
            
            
          
          
            <Link to="/Panel" className='flex flex-col'>
              <button className='bg-cyan-900 w-[170px] h-[40px] rounded-[10px] text-OffWhite hover:bg-VeryDarkBlue' >Map</button>

            </Link>
          

        </div>
      </div>
    </aside>
  )
}