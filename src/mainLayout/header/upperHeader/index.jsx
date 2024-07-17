import React from 'react'
import Logo from '../logo';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function UpperHeader() {
  return (
    <div className='relative duration-200 z-40 shadow-md bg-gradient-to-r from-fourth to-fifth py-3'>
        <div className='container flex items-center justify-between mx-auto'>
            <Logo />
            <div className='flex items-center gap-4 justify-between'>
                <div className='group relative hidden sm:block'>
                    <input type="text" placeholder='search' className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full px-2 py-1
                    focus:outline-none border border-gray-300 focus:border-1 focus:border-fourth
                    ' />
                    <FaSearch className='absolute group-hover:text-third top-1/2 -translate-y-1/2 right-3 ' />
                </div>
                <Link to='/login' className='text-lg font-semibold hover:bg-fourth py-1 px-2 rounded-md transition-colors duration-300 '>Giris Yap</Link>
            </div>
        </div>
    </div>
  )
}
