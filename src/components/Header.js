import React from 'react';

import Socials from '../components/Socials'
import Logo from '../img/header/logo.png'
import MobileNav from '../components/MobileNav'

// import Link
import { Link } from 'react-router-dom';

const Header = () => {
  return <header className='fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      
  <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
    {/* Logo */}
    <Link to={'/'} className='max-w-[200px]'>
      <img  src={Logo} alt="Logo" />
    </Link>


    {/* navigation - initially hidden - show on desktop mode */}
    <nav className='hidden xl:flex gap-x-12 font-semibold' >
      <Link to={'/'} className='text-[#696c6d] hover:text-primary transition'>Home</Link>
      <Link to={'/about'} className='text-[#696c6d] hover:text-primary transition'>About</Link>
      <Link to={'/portfolio'} className='text-[#696c6d] hover:text-primary transition'>Portfolio</Link>
      <Link to={'/contact'} className='text-[#696c6d] hover:text-primary transition'>Contact</Link>
      
    </nav>
  </div>

    {/* Socials */}
    <Socials/>

    {/* Mobile Navigation */}
    <MobileNav/>

</header>;
};

export default Header;
