import React from 'react';

import WomanInAbout from '../img/about/woman.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { transition1} from '../transitions';

const About = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: '100%'}} 
      animate={{ opacity: 1, y:0}}
      exit={{ opacity: 0, y: '100%'}}
      transition={transition1}
      className='section'>
      <div className='container mx-auto h-full relative'>
        {/* Text and Image Wrapper */}
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          {/* Image */}
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden '>
            <img src={WomanInAbout} alt="About section" />
          </div>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%'}} 
            animate={{ opacity: 1, y:0}}
            exit={{ opacity: 0, y: '-80%'}}
            transition={transition1}
            className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
            <h1 className='h1'>About Me</h1>
              <p className='mb-12 max-w-sm'>Lorem ipsum dolor sit amet consectetur <b> adipisicing elit</b>. Minus autem voluptatem consequatur nulla ad totam suscipit eum!
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <b> Nostrum deleniti odit</b> suscipit explicabo minus! Provident vero expedita.
              </p>
            <Link to={'/portfolio'} className='btn rounded-xl '>View my work!</Link>
          </motion.div>
        </div>
      </div>

      

    </motion.section>
)};

export default About;
