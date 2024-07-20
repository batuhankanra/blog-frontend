
import img1 from '../../../assets/menu/what-text.jpg'

export default function Write() {
  return (
    <div className='conteiner mx-auto'>
      <div className='bg-gray-300 flex flex-col sm:flex-row py-4 items-center justify-center mx-3 sm:mx-0 gap-5 rounded-md'>
        <div className='w-[250px] sm:w-[260px] xl:w-[350px] 2xl:w-[400px]'>
            <img src={img1} className='rounded-md w-[220px] xl:w-[330px]'/>
            <h1 className='baslik text-lg font-medium py-1'>Ne yazmak istersin</h1>
            <p className='text-base text-wrap text-gray-800 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores mollitia totam quae laudantium maxime ut, cumque voluptate doloribus veniam laborum!</p>
        </div>
        <div className='w-[250px] xl:w-[350px] 2xl:w-[400px]'>
            <img src={img1} className='rounded-md w-[220px] xl:w-[330px]'/>
            <h1 className='baslik text-lg font-medium py-1'>Ne yazmak istersin</h1>
            <p className='text-base text-wrap text-gray-800 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores mollitia totam quae laudantium maxime ut, cumque voluptate doloribus veniam laborum!</p>
        </div>
        <div className='w-[250px] xl:w-[350px] 2xl:w-[400px]'>
            <img src={img1} className='rounded-md w-[220px] xl:w-[330px]'/>
            <h1 className='baslik text-lg font-medium py-1'>Ne yazmak istersin</h1>
            <p className='text-base text-wrap text-gray-800 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores mollitia totam quae laudantium maxime ut, cumque voluptate doloribus veniam laborum!</p>
        </div>
      </div>
    </div>
  )
}
