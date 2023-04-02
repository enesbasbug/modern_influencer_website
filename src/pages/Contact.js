import React from 'react';

import WomanInContact from '../img/contact/woman.png'

import { motion } from 'framer-motion';
import { transition1} from '../transitions';

const Contact = () => {
  return (
  <motion.section 
    initial={{ opacity: 0, y: '100%' }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: '100%' }}
    transition={transition1}
    className='section bg-white'>
    <div className='container mx-auto h-full'>
      <div className='flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left'>

        {/* bg  bg-[#eef7f9]  */}
        <motion.div
        initial={{ opacity: 0, y: '100%' }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '100%' }}
        transition={transition1}
        className='hidden lg:flex bg-[#e0eef1] absolute bottom-0 left-0 right-0 top-72 -z-10'
        ></motion.div>

        {/* text and form */}
        <div>
          <h1 className='h1'>Contact Me!</h1>
          <p className='mb-12'>I would love to get some feedback about my work. Please reach me here. <br /> Cheers!</p>
          <form className='flex flex-col gap-y-4'>
            <div className='flex gap-x-10'>
              <input 
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' 
                  type="text" 
                  placeholder='Your name' />

              <input 
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' 
                  type="text" 
                  placeholder='Your email address' />     
            </div>

            <input 
                  className='outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]' 
                  type="text" 
                  placeholder='Your Message' />
            <button className='btn mb-[30px] mx-auto lg:mx-0 self-start rounded-xl'>Send it!</button>

          </form>
          
        </div>

        {/* image */}
        <motion.div
          initial={{ opacity: 0, y: '100%' }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: '100%' }}
          transition={{ transition: transition1, duration: 1.5 }}
          className='lg:flex-1'>
          <img src={WomanInContact} alt="" />
        </motion.div>
      </div>
    </div>


  </motion.section>
)};

export default Contact;
