import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='container  sm:w-[600px] mx-auto pt-20'>
      <div className='bg-gray-200 mx-2 sm:mx-0 p-4 rounded-xl shadow-lg '>
        <h1 className='baslik font-bold text-3xl border-b border-gray-900'>Giris Yap</h1>
       
        <form  className='flex flex-col    pt-5 gap-y-3 mx-3'>
            <label className='text-base font-medium '>Kullanici adi</label>
            <input type="text"  className='outline-none px-2 py-1 w-full rounded-md text-lg bg-gray-100 focus:bg-white' />
            <label className='text-base font-medium '>Sifreniz</label>

            <input type="text" className='outline-none px-2 py-1 w-full rounded-md text-lg bg-gray-100 focus:bg-white' />
            <Link to='/forgotmypassword' className='text-right text-sm text-blue-700 underline'>Sifremi Unuttum</Link>
            <button className='bg-gray-300 py-2 text-white rounded-xl hover:bg-gray-600 transition-colors duration-200'>Giris Yap</button>
        </form>
      </div>
    </div>
  )
}
