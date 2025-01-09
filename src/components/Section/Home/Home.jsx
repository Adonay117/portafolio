import React from 'react'
import Skills from './Skills/Skills'
import Gitlab from '../../Icons/Gitlab'
import Profile from '../../../assets/images/profile.png'
import Linkeind from '../../Icons/Linkeind'
import EmailIcon from '../../Icons/EmailIcon'
import BgProfile from '../../../assets/images/BgProfile'
import TechnologiesMarquee from '../../Technologies/TechnologiesMarquee'


const Home = () => {
    return (
        <>
            <div className='flex justify-center gap-10 sm:gap-16 sm:justify-around items-center flex-wrap py-7 max-w-[1440px] sm:mx-auto '>
                <div className=" animate-slideIn group  w-[100px] sm:h-21 sm:w-48 relative">
                   
                    <BgProfile className=' absolute z-0 top-8 sm:right-0 sm:w-[210px] text-white group-hover:text-secondary'/>
                    <img
       
                    src={Profile} alt='profile'  className="z-10 relative drop-shadow-2xl saturate-0 ease-out delay-75" />
                    <span className=' flex gap-3 justify-center my-2 transition-colors ease-in-out'>
                    <Gitlab 
                     className=' w-10 text-gray-400  hover:text-white '
                     to='https://gitlab.com/Adonay117'/>
                    <Linkeind 
                    className=' w-10 text-gray-400  hover:text-white '
                    to='https://www.linkedin.com/in/adonay-arag%C3%B3n05/'/>
                    <EmailIcon
                    className=' w-10 text-gray-400  hover:text-white '
                    to='mailto:adonayaragon2021@gmail.com?subject=Asunto&body='/></span>
                    
                </div>

             <div>
                
             <p 
                className=' animate-slideIn text-[30px] sm:text-[55px] text-center sm:text-start   text-white text-opacity-90 mt-10 lg:mt-0'>
                    <span className='font-semibold text-accent'> Adonay Aragón </span>
                    <br /> desarrollador <span className=' font-semibold text-white/70'>Frontend</span>
                </p>
             </div>
            
            

                <TechnologiesMarquee/>
               
            </div>




        </>
    )
}

export default Home
