import React from 'react';

//import icons 
import { AiFillYoutube, AiFillInstagram, AiFillGithub } from 'react-icons/ai';

//import logo
import Logo from '../assets/img/logo-white.svg';
import { social } from '../data';

const Footer = () => {
  return <footer className='bg-orange py-8 lg:py-4'>
      <div className='container mx-auto'>
        <div className='flex text-white flex-col gap-y-6 lg:flex-row items-center justify-between'>
          <a href="#">
            <img src={Logo} alt="" />
          </a>
          <div className='text-[15px] flex justify-center text-center flex-col'>
            &copy; Copyright 2024. Todos os Direitos Reservados. <br /> <a className='text-center flex justify-center flex-col lg:flex lg:justify-center lg:text-center' href="https://www.instagram.com/devgustavogantois_/?hl=pt-br" target='_blank'>Desenvolvido por @devgustavogantois_</a>
          </div>
          <div>
                <a>
                  <div className='flex gap-x-4'>
                    <a href="https://www.instagram.com/devgustavogantois_/?hl=pt-br" target='_blank'><AiFillInstagram className='bg-[#fe8d71a9] hover:bg-[#fe8d71] 2-10 h-10 rounded-full flex justify-center items-center transition text-2xl cursor-pointer' /></a>
                    <a href="https://github.com/DevGustavoGantois" target='_blank'><AiFillGithub  className='bg-[#fe8d71a9] hover:bg-[#fe8d71] 2-10 h-10 rounded-full flex justify-center items-center transition text-2xl cursor-pointer' /></a>
                    <AiFillYoutube className='bg-[#fe8d71a9] hover:bg-[#fe8d71] 2-10 h-10 rounded-full flex justify-center items-center transition text-2xl cursor-pointer'/>
                  </div>
                </a>
          </div>
        </div>
      </div>
    </footer>
  
}

export default Footer
