import  { useEffect, useState } from 'react'
import ppimg from '../../assets/pp/wolf.jpg'
import axios from 'axios'

export default function MyBlog() {
    const [posts,setPosts]=useState('')


    useEffect(()=>{
        const fecthMyPosts=async ()=>{
            try{
                const token=localStorage.getItem('loginToken')
                const response = await axios.get('http://localhost:3000/api/product/my-posts',{
                    headers:{
                        Authorization:`Barrer ${token}`
                    }
                })
                const convertToTRDate =(isoDate)=>{
                    return new Date(isoDate).toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' });
                }
                const postsWithTRDates = response.data.posts.map(post => ({
                    ...post,
                    date: convertToTRDate(post.date)
                  }));
                  
                  convertToTRDate(response.data.posts)
                  setPosts(postsWithTRDates)

            }catch(err){
                console.log(err)
            }

        }
        fecthMyPosts()

    },[])

  return (
    <div className='container mx-auto pt-2'>
        <div className='bg-fourth p-1 rounded-md'>
            <div className=' h-[500px] overflow-y-scroll bg-gray-100 border-b'>
            
                {posts && posts.map(data=>(
                    <div key={data._id} className='flex flex-col  py-2  border-b  m-3'>
                    <div className='flex items-center justify-between '>
                        <h1 className='font-semibold text-lg'>{data.title}</h1>
                        <span className='text-sm text-gray-500 '>{data.date}</span>
                    </div>
                    <p className='break-words mr-2 '>{data.desc} </p>
                    <div className='flex items-center gap-3 py-2'>
                        <img src={ppimg} className='w-20 object-cover h-20 rounded-full'  />
                        <h1 className='text-base font-medium underline'>{data.username}</h1>
                    </div>
                </div>
                ))}
                
            </div>
            

        </div>
    </div>
  )
}
