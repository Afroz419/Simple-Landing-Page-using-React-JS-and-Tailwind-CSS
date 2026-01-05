import React from 'react'
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='w-full bg-white shadow-sm fixed top-0 z-50'>
      <div className='max-w-7xl mx-auto flex px-6
       py-4 justify-between items-center '>
        <h1 className='text-xl font-bold text-blue-600'>Af - Tech</h1>

        <ul className='flex md:flex gap-6 text-gray-700 font-medium'>
          <li className='hover:text-blue-600 cursor-pointer'>Home</li>
          <li className='hover:text-blue-600 cursor-pointer'>About</li>
          <li className='hover:text-blue-600 cursor-pointer'>Services</li>
        </ul>
      </div>
    </nav>
    )
}

export default Navbar