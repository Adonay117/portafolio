import React from 'react'
import Skills from './Skills/Skills'



const Home = (props) => {
    return (
        <>
            <div className='flex justify-center gap-10 sm:gap-16 sm:justify-around items-center flex-wrap py-7 sm:my-10'>
      
            <div
                className=" h-[130px] w-[130px] sm:h-48 sm:w-48 rounded-full bg-[url('assets/images/profile.png')] bg-cover shadow-2xl">
            </div>
            <p className='text-[30px] sm:text-[50px] text-center sm:text-start text-black text-opacity-70 dark:text-white dark:text-opacity-90'>Hola, soy
                <span className= 'font-semibold dark:text-[#426386] bg-gradient-to-l from-accent via-secondary to-primary text-transparent bg-clip-text  dark:bg-gradient-to-l dark:from-purple-500 dark:via-orange-500 dark:to-yellow-500 dark:text-transparent '> Adonay Aragón </span>
                <br/> un desarrollador <span className=' font-semibold bg-gradient-to-l from-accent via-secondary to-primary text-transparent bg-clip-text  dark:bg-gradient-to-l dark:from-purple-500 dark:via-orange-500 dark:to-yellow-500 dark:text-transparent '>Frontend</span> 
            </p>
            <Skills />
            </div>
           

         

        </>
    )
}

export default Home
