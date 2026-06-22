import Hero from '../component/Home/Hero'
import Feauter from '../component/Home/Feauter'
import ItWork from '../component/Home/ItWork'

const Home = () => {
  return (
    <>
      <section className='  py-12  overflow-hidden w-[95%] m-auto  '>
           <div className='overflow-hidden'>
             <Hero/> 
           </div>
           <Feauter/>
           <ItWork/>
      </section>
    </>
  )
}

export default Home
