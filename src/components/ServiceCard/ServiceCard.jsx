import React from 'react';
import styles from './ServiceCard.module.sass';

const ServiceCard = props => {
	return (
		<div className={styles.serviceCard}>
			<div className={styles.icon}>
				<img src={props.icon} alt="" />
				<div className={styles.cardTitle}>{props.title}</div>
			</div>
			<div className={styles.cardDescription}>{props.description}</div>
		</div>
	)
}

export default ServiceCard;