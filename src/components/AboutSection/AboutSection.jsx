import React from 'react';
import styles from './AboutSection.module.sass';
import { motion } from 'framer-motion';

import HOME1 from '../../assets/images/home1.png';

import AboutTitleAnimation from '../../animations/AboutTitleAnimation';

const AboutSection = () => {
	return (
		<div className={styles.aboutUs}>
			<div className={styles.description}>
				<div className={styles.title}>
					<div className={styles.slice}>
						<motion.div {... AboutTitleAnimation(1)} className={styles.value}>We work to make</motion.div>
					</div>
					<div className={styles.slice}>
						<motion.div {... AboutTitleAnimation(1.2)} className={styles.value} >your <span className={styles.dream}>dreams</span> come</motion.div>
					</div>
					<div className={styles.slice}>
						<motion.div {... AboutTitleAnimation(1.3)}className={styles.value}>true!</motion.div>
					</div>
				</div>
				<p>Contact us for any videography ideas that you have. We have professionals with amazing skills.</p>
				<button>Contact </button>
			</div>
			<div className={styles.sectionImage}>
				<img src={HOME1} alt=""/>
			</div>
		</div>
	)
}

export default AboutSection;