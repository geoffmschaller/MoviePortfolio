import React from 'react';
import AboutSection from '../../components/AboutSection/AboutSection';
import FaqSection from '../../components/FaqSection/FaqSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import styles from './AboutUs.module.sass';

const AboutUs = () => {
	return (
		<div className={styles.aboutUs}>
			<AboutSection />
			<ServicesSection />
			<FaqSection/>
		</div>
	)
}

export default AboutUs;