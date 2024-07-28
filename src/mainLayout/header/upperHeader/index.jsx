
import Logo from '../logo';
import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import {  useDispatch, useSelector } from 'react-redux';
import { _loadUser, _logout } from '~/stores/auth';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';


export default function UpperHeader() {
  const {user}=useSelector(state=>state.auth)
  const dispatch =useDispatch()

  const logoutHandle=()=>{
    dispatch(_logout())
    useNavigate('/')

  }
  
  console.log(user)
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
               {user ? (
                 <Popover className="relative">
                 <PopoverButton className='text-lg font-semibold hover:bg-fourth py-1 px-2 rounded-md transition-colors duration-300 '>{user}</PopoverButton>
                 <PopoverPanel anchor="bottom"  className="flex flex-col absolute z-50  gap-2 bg-white px-4 rounded-lg text-lg font-medium transition-colors duration-200 py-2">
                   <Link className='hover:bg-gray-200 p-1 rounded-md' to={'/profile'}>Profil Duzenle</Link>
                   <Link className='hover:bg-gray-200 p-1 rounded-md' to={'/newPost'}>Yeni Post yaz</Link>
                   <Link className='hover:bg-gray-200 p-1 rounded-md' to={'/myPost'}>Gonderilerim</Link>
                   <button onClick={logoutHandle} className='hover:bg-gray-200 p-1 rounded-md' >Cikis </button>
                 </PopoverPanel>
               </Popover>
               ) : (
                <Link to='/login' className='text-lg font-semibold hover:bg-fourth py-1 px-2 rounded-md transition-colors duration-300 '>Giris Yap</Link>
               )}
            </div>
        </div>
    </div>
  )
}
