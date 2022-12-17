'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { insights } from '../constants';
import { InsightCard, TitleText, TypingText } from '../components';
import { staggerContainer } from '../utils/motion';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText
        title="| Insights"
        textStyles="text-center text-xl"
      />
      <TitleText
        title="Insights About the Metaverse"
        textStyles="text-center"
      />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight, index) => (
          <InsightCard
            key={`insights-${index}`}
            {...insight}
            index={index + 1}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
