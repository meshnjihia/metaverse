'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { staggerContainer, fadeIn } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText
        title="| People of the world"
        textStyles="text-center text-xl"
      />
      <TitleText
        title={(
          <>
            Track your friends around the world and invite them to share in the
            same world
          </>
        )}
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="Map" className="w-full h-full object-cover" />
        <div className="absolute bottom-20 right-20 w-[50px] h-[50px] p-[4px] rounded-full bg-[#5d6680]">
          <img src="people-01.png" alt="People" className="w-full h-full" />
        </div>
        <div className="absolute top-10 left-20 w-[50px] h-[50px] p-[4px] rounded-full bg-[#5d6680]">
          <img src="people-02.png" alt="People" className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[50px] h-[50px] p-[4px] rounded-full bg-[#5d6680]">
          <img src="people-03.png" alt="People" className="w-full h-full" />
        </div>
        <div className="absolute top-1/4 left-[60%] w-[80px] h-[50px]">
          <img src="meta.png" alt="People" className="w-full h-full rounded-xl" />
        </div>
        <div className="absolute top-2/3 left-[15%] w-[80px] h-[50px] ">
          <img src="meta-2.png" alt="People" className="w-full h-full rounded-xl" />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
