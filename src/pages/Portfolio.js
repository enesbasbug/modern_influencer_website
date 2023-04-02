import React from 'react';

//images
import Image1 from '../img/portfolio-images/1.png';
import Image2 from '../img/portfolio-images/2.png';
import Image3 from '../img/portfolio-images/3.png';
import Image4 from '../img/portfolio-images/4.png';
import Image5 from '../img/portfolio-images/5.png';
import Image6 from '../img/portfolio-images/6.png';
import Image7 from '../img/portfolio-images/7.png';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import { transition1} from '../transitions';

const Portfolio = () => {
  return (
    
    <motion.section
      initial={{ opacity: 0}} 
      animate={{ opacity: 1}}
      exit={{ opacity: 0}}
      transition={transition1}
      className='section '>
      
      <div className="container mx-auto h-full relative">
        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8 '>
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%'}} 
            animate={{ opacity: 1, y:0}}
            exit={{ opacity: 0, y: '-90%'}}
            transition={transition1}          
            className='flex flex-col lg:items-start'>
            <h1 className='h1'>Portfolio</h1>
            <p className='mb-12 max-w-sm'>Lorem ipsum dolor sit amet consectetur <b> adipisicing elit</b>. Minus autem voluptatem consequatur nulla ad totam suscipit eum!
              <br />
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. <b> Nostrum deleniti odit</b> suscipit explicabo minus! Provident vero expedita.
              </p>
              <Link to={'/contact'} className='btn mb-[30px] mx-auto lg:mx-0 rounded-xl '>Hire Me!</Link>
          </motion.div>
          {/* Image grid */}
          <div className='grid grid-cols-3 gap-1 lg:gap-3'>
              {/* Images */}
            <div className='max-w-[250px] lg:max-w-[320px] h-[167px] lg:h-[270px] bg-accent overflow-hidden' >
              <img src={Image1} className='object-cover h-full lg:h-[270px] hover:scale-110 transition-all duration-500' alt=""/>
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[167px] lg:h-[270px] bg-accent overflow-hidden' >
              <img src={Image2} className='object-cover h-full lg:h-[270px] hover:scale-110 transition-all duration-500' alt=""/>
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[167px] lg:h-[270px] bg-accent overflow-hidden' >
              <img src={Image3} className='object-cover h-full lg:h-[270px] hover:scale-110 transition-all duration-500' alt=""/>
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[167px] lg:h-[270px] bg-accent overflow-hidden' >
              <img src={Image4} className='object-cover h-full lg:h-[270px] hover:scale-110 transition-all duration-500' alt=""/>
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[167px] lg:h-[270px] bg-accent overflow-hidden' >
              <img src={Image5} className='object-cover h-full lg:h-[270px] hover:scale-110 transition-all duration-500' alt=""/>
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[167px] lg:h-[270px] bg-accent overflow-hidden' >
              <img src={Image6} className='object-cover h-full lg:h-[270px] hover:scale-110 transition-all duration-500' alt=""/>
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[167px] lg:h-[270px] bg-accent overflow-hidden' >
              <img src={Image7} className='object-cover h-full lg:h-[270px] hover:scale-110 transition-all duration-500' alt=""/>
            </div>
          </div>
        </div>
      </div>

    </motion.section>
)};

export default Portfolio;
