
import { Navbar } from './Navbar'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='flex place-content-between items-center bg-cyan-900 mb-5'>
      <Link to='/'className='cursor-pointer text-2xl text-white p-3' >CrimeMapper</Link>
      <Navbar />
    </header>
  )
}