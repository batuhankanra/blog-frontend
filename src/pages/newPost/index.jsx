import  { useState } from 'react'
import axios from 'axios'

export default function NewPost() {
  const [title,setTitle]=useState('')
  const [desc,setDesc]=useState('')
  const token=localStorage.getItem('loginToken')
  
  




  const handlesubmit = async(e)=>{
    e.preventDefault()
    const data={title,desc}
    
    
    const response = await axios.post('http://localhost:3000/api/product/addBlog',data,{
      headers:{
        Authorization:`Barrer ${token}`
      },
    })
    if(response.status===200){
      console.log(response.data)
      alert('post paylasildi ')
    }
    console.log(response)
  }
  return (
    <div className='container  sm:w-[600px] mx-auto pt-20'>
      <div className='bg-gray-200 mx-2 sm:mx-0 p-4 rounded-xl shadow-lg '>
        <h1 className='baslik font-bold text-3xl border-b border-gray-900'>Yeni Post</h1>
       
        <form onSubmit={handlesubmit}  className='flex flex-col    pt-5 gap-y-3 mx-3'>  
          <label className='text-base font-medium '>Post Basligi</label>
          <input type="text" value={title} onChange={e=>setTitle(e.target.value)}  className='outline-none px-2 py-1 w-full  rounded-md text-lg bg-gray-100 focus:bg-white' />
          <label className='text-base font-medium '>Post Icerigi</label>
          <textarea  value={desc} onChange={e=>setDesc(e.target.value)} className='outline-none px-2 py-1 w-full  rounded-md text-lg bg-gray-100 focus:bg-white' />
          <button type='submit' className='bg-gray-300 py-2 text-white rounded-xl hover:bg-gray-600 transition-colors duration-200'>yolla</button>
        </form>
      </div>
    </div>
  )
}
