import Blog from "./blog";
import Write from "./write";


export default function Home() {
  return (
    <div className='container mx-auto py-10'>
      <Write />
      <Blog />
    </div>
  )
}
