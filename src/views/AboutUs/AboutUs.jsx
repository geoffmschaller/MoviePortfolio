import React from 'react';
import AboutSection from '../../components/AboutSection/AboutSection';
import FaqSection from '../../components/FaqSection/FaqSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import styles from './AboutUs.module.sass';
import { motion } from 'framer-motion';

import PageTransition from '../../animations/PageTransition';

const AboutUs = () => {
	return (
		<motion.div {...PageTransition(1)} className={styles.aboutUs}>
			<AboutSection />
			<ServicesSection />
			<FaqSection/>
		</motion.div>
	)
}

export default AboutUs;