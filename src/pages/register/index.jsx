import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import  { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { _setUser } from '~/stores/auth'

export default function Register() {
  const [er,setEr]=useState([])
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const [email,setEmail]=useState('')
  const navigate= useNavigate()
  const dispatch =useDispatch()

 
  const handlesubmit= async (e)=>{
    e.preventDefault()
    try{
      const response = await axios.post('http://localhost:3000/api/auth/register',{
        username,password,email
      })
      
      if(response.status===201){
        setTimeout(()=>{
          navigate('/login')
        },[3000])
      }
      
      alert('kayit oldunuz Giris yap sayfasina yonlendiriliyorsunuz')
      
    }catch(err){
      setEr(err.response.data.result.errors)
      console.log(err)
    }
    
   
  }

  return (
    <div className='container  sm:w-[600px] mx-auto pt-20'>
      <div className='bg-gray-200 mx-2 sm:mx-0 p-4 rounded-xl shadow-lg '>
        <h1 className='baslik font-bold text-3xl border-b border-gray-900'>Kayit Ol</h1>
       
        <form onSubmit={handlesubmit}  className='flex flex-col    pt-5 gap-y-3 mx-3'>
        {er && er.map((e,i)=>(
          <div key={i} className='bg-red-600 p-2  rounded-md text-white capitalize '>
          {e.msg}
        </div>
        ))}
           
            <label className='text-base font-medium '>Kullanici adi</label>
            <input type="text" value={username} onChange={e=>setUsername(e.target.value)} className='outline-none px-2 py-1 w-full rounded-md text-lg bg-gray-100 focus:bg-white' />
            <label className='text-base font-medium '>Email</label>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className='outline-none px-2 py-1 w-full rounded-md text-lg bg-gray-100 focus:bg-white' />
            
            <label className='text-base font-medium '>Sifreniz</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className='outline-none px-2 py-1 w-full rounded-md text-lg bg-gray-100 focus:bg-white' />
            <Link to='/forgotmypassword' className='text-right text-sm text-blue-700 underline'>Sifremi Unuttum</Link>
            <button type='submit' className='bg-gray-300 py-2 text-white rounded-xl hover:bg-gray-600 transition-colors duration-200'>Giris Yap</button>
        </form>
      </div>
    </div>
  )
}
