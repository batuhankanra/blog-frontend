import React from 'react'

export default function Slider() {
  return (
    <div className='relative overflow-hidden min-h-[550px] min-w-[650px] bg-gray-100 flex items-center justify-center duration-200 '>
        {/*background pattern */}
      <div className='h-[700px] w-[700px] bg-secondary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 z-9 '>
      </div>
      {/*slider */}
      <div className='container pb-8 sm:pb-0'>
        <div>
            <div className='grid gird-cols-1 sm:grid-cols-2'>
                {/*text content */}
                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                    <h1 className='text-5xl baslik sm:text-6xl font-bold'>Baslik</h1>
                    <p className='text-sm pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, voluptatum?</p>
                </div>

            </div>
        </div>

      </div>
    </div>
  )
}
