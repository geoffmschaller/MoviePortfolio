import React from 'react';
import styles from './AboutSection.module.sass';
import { motion } from 'framer-motion';

import HOME1 from '../../assets/images/home1.png';

import FadeSlideUp from '../../animations/FadeSlideUp';
import FadeIn from '../../animations/FadeIn';
import ScaleDown from '../../animations/ScaleDown';
import Wave from '../Wave/Wave';

const AboutSection = () => {
	return (
		<div className={styles.aboutUs}>
			<div className={styles.description}>
				<div className={styles.title}>
					<motion.div {...FadeSlideUp(1)} className={styles.slice}>
						<div className={styles.value}>We work to make</div>
					</motion.div>
					<motion.div {...FadeSlideUp(1.2)} className={styles.slice}>
						<div className={styles.value} >your <span className={styles.dream}>dreams</span> come</div>
					</motion.div>
					<motion.div {...FadeSlideUp(1.4)} className={styles.slice}>
						<div className={styles.value}>true!</div>
					</motion.div>
				</div>
				<motion.p {...FadeIn(2)}>Contact us for any videography ideas that you have. We have professionals with amazing skills.</motion.p>
				<button>Contact </button>
			</div>
			<div className={styles.sectionImage}>
				<motion.img {...ScaleDown(1)} src={HOME1} alt=""/>
			</div>
			<motion.div>
				<Wave/>
			</motion.div>
		</div>
	)
}

export default AboutSection;