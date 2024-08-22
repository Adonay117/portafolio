
import Navbar from './components/Navbar/Navbar'
import Experience from './components/Section/Experience/Experience'
import Home from './components/Section/Home/Home'
import Work from './components/Section/Work/Work'
function App() {

  return (
    <div className='  bg-[#f5f5fc]   dark:bg-[#222225] '>
      <Navbar />
      <section id="inicio" className=' lg:h-screen px-5 '> 
        <Home/>
      </section>
      <section id="experiencia" className='lg:h-screen  px-5'>
       <Experience/>
      </section>
      <section id="proyectos" className='  px-5 py-2'>
      <Work/>
      </section>
    </div>
  )
}

export default App
