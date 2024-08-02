
import { useEffect, useState } from 'react'
import ppimg from '../../../assets/pp/wolf.jpg'
import axios from 'axios'

export default function Blog() {
    const [blog,setBlog]=useState('')
    
    useEffect(() => {
        const fetchPosts = async () => {
          try {
            const response = await axios.get('http://localhost:3000/api/product/viewBlog');
            const convertToTRDate =(isoDate)=>{
                return new Date(isoDate).toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' });
            }
            const postsWithTRDates = response.data.posts.map(post => ({
                ...post,
                date: convertToTRDate(post.date)
              }));
              const sortedPosts = postsWithTRDates.sort((a, b) => new Date(b.date) - new Date(a.date));
              console.log(sortedPosts);
              setBlog(postsWithTRDates)

          } catch (err) {
            console.log(err.message || 'An error occurred');
          } 
        };
    
        fetchPosts();
      }, []);
  return (
    <div className='container mx-auto pt-2'>
        <div className='bg-fourth p-1 rounded-md'>
            <div className=' h-[500px] overflow-y-scroll bg-gray-100 border-b'>
            
                {blog && blog.map(data=>(
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
