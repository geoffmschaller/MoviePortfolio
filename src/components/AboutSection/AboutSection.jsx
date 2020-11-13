import React from 'react';
import styles from './AboutSection.module.sass';
import { Link } from 'react-router-dom';

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
					<FadeSlideUp className={styles.slice}>
						<div className={styles.value}>We work to make</div>
					</FadeSlideUp>
					<FadeSlideUp className={styles.slice}>
						<div className={styles.value}>
							your <span className={styles.dream}>dreams</span> come
						</div>
					</FadeSlideUp>
					<FadeSlideUp className={styles.slice}>
						<div className={styles.value}>true!</div>
					</FadeSlideUp> 
				</div>
				<FadeIn className={styles.more}>
					Contact us for any videography ideas that you have. We have professionals with amazing skills.
				</FadeIn>
				<Link to={'/contact-us'}>
					<button>Contact Us</button>
				</Link>
			</div>
			<div className={styles.sectionImage}>
				<ScaleDown>
					<img src={HOME1} alt=""/>
				</ScaleDown>
			</div>
			<Wave/>
		</div>
	)
}

export default AboutSection;