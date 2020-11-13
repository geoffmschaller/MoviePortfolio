import React from 'react';
import styles from './AboutSection.module.sass';

import HOME1 from '../../assets/images/home1.png';

const AboutSection = () => {
	return (
		<div className={styles.aboutUs}>
			<div className={styles.description}>
				<div className={styles.title}>
					<div className={styles.slice}>
						<div className={styles.value}>We work to make</div>
					</div>
					<div className={styles.slice}>
						<div className={styles.value} >your <span className={styles.dream}>dreams</span> come</div>
					</div>
					<div className={styles.slice}>
						<div className={styles.value}>true!</div>
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