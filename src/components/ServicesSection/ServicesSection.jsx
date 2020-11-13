import React from 'react';
import styles from './ServicesSection.module.sass';
import ServiceCard from '../ServiceCard/ServiceCard';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';

import HOME2 from '../../assets/images/home2.png';
import CLOCK from '../../assets/images/clock.svg';
import DIAPHRAGM from '../../assets/images/diaphragm.svg';
import MONEY from '../../assets/images/money.svg';
import TEAMWORK from '../../assets/images/teamwork.svg';

import ScaleDown from '../../animations/ScaleDown';

const ServicesSection = () => {

	const controls = useAnimation();
	const [element, view] = useInView({ threshold: 0.5 });
	
	if (view) {
		controls.start('animate');
	} else {
		controls.start('initial');
	}

	const cardItems = [
		{
			icon: CLOCK,
			title: 'Efficient',
			description: 'Lorem ipsum dolor sit amet.'
		},
		{
			icon: DIAPHRAGM,
			title: 'Diaphragm',
			description: 'Lorem ipsum dolor sit amet.'
		},
		{
			icon: MONEY,
			title: 'Affordable',
			description: 'Lorem ipsum dolor sit amet.'
		},
		{
			icon: TEAMWORK,
			title: 'Teamwork',
			description: 'Lorem ipsum dolor sit amet.'
		}
	];

	return (
		<div className={styles.servicesSection}>
			<div className={styles.sectionImage}>
				<motion.img initial={ScaleDown.start} animate={ScaleDown.finish} ref={element} src={HOME2} alt=""/>
			</div>
			<div className={styles.description}>
				<div className={styles.title}>High <span className={styles.quality}>quality</span>	services</div>
				<div className={styles.cards}>
					{
						cardItems.map((card, index) => {
							return <ServiceCard key={index} title={card.title} description={card.description} icon={card.icon}/>
						})
					}
				</div>
			</div>
		</div>
	)
}

export default ServicesSection;