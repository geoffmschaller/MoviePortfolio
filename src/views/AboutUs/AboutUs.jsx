import React from 'react';
import FadeOnScroll from '../../animations/FadeOnScroll';
import PageTransition from '../../animations/PageTransition';
import AboutSection from '../../components/AboutSection/AboutSection';
import FaqSection from '../../components/FaqSection/FaqSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import styles from './AboutUs.module.sass';

const AboutUs = () => {	
	return (
		<PageTransition className={styles.aboutUs}>
			<AboutSection />
			<ServicesSection />
			<FaqSection/>
		</PageTransition>
	)
}

export default AboutUs;