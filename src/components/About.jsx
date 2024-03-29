import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { useState } from 'react';

const ServiceCard = ({ index, title, icon, letter }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimation, setIsAnimation] = useState(false);
  function handleFlip() {
    if (!isAnimation) {
      setIsFlipped(!isFlipped);
      setIsAnimation(true);
    }
  }
  return (
    <div className='cursor-pointer flip-card justify-center ' onClick={handleFlip}>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card flip-card-inner"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: "normal" }}
        onAnimationComplete={() => {setIsAnimation(false)}}
      >
        {!isFlipped && !isAnimation?<div
          className="bg-card bg-cover rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col ">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[18px] font-bold text-center">
            {title}
          </h3>
        </div>:
        <div className=" bg-cover rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col bg-card1 bg-center text-[50px]  flip-card-back">
          <h4>{letter}</h4>
        </div>
        }
        
        
        
      </motion.div>
    </div>
  );
};


const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
        sapiente ipsum dolorum dicta eaque cumque inventore molestias, beatae ea
        quaerat alias accusamus voluptas autem! Alias odit voluptates in totam
        vitae dignissimos minus eaque culpa unde tempore dolore aperiam
        obcaecati voluptatum aliquam corrupti, suscipit accusamus! Odit unde
        veniam dolorum ipsum doloribus.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
        {/* {services.map((service, index) => (
          <FlipCard key={service.title} index={index} {...service} />
        ))} */}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
