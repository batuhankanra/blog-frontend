import React from 'react'
import { Link } from 'react-router-dom'
import menu from '~/utils/menu'


export default function LowerHeader() {
    
  return (
    <div className='flex items-center justify-center bg-white shadow-lg py-2 transition-all duration-200'>
        <ul className='sm:flex hidden items-center gap-4 text-lg '>
            {menu.map((m)=>(
                <li key={m.id} className='hover:bg-gray-100 p-1 rounded-md baslik font-medium'>
                    <Link to={m.link}>{m.name} </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}
