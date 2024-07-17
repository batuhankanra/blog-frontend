import React from 'react'

import { FaBlog,FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <div>
      <Link to='/' className='font-bold text-2xl sm:text-3xl flex gap-2 baslik' >
        <FaBlog />
        Blog
      </Link>
    </div>
  )
}
