import Layout from './components/Layout/Layout';
import Experience from './components/Section/Experience/Experience';
import Home from './components/Section/Home/Home';
import School from './components/Section/School/School';
import Work from './components/Section/Work/Work';
import Contact from './components/Section/Contact/Contact';

function App() {
  return (
    <Layout>
      <section id="inicio" className='lg:h-screen  '> 
        <Home/>
      </section>
      <section id="experiencia" className='lg:h-screen lg:pt-20'>
        <Experience/>
      </section>
      <section id="formacion" className='lg:h-screen lg:pt-20'>
        <School/>
      </section>
      <section id="proyectos" className=' lg:pt-20'>
        <Work/>
      </section>
      <section id="contacto" className='h-screen lg:pt-20'>
        <Contact/>
      </section>
    </Layout>
  );
}

export default App;
