import React from 'react';
import styles from './AwardCard.module.sass';

const AwardCard = props => {
	return (
		<div className={styles.awardCard}>
			<div className={styles.title}>{props.title}</div>
			<div className={styles.border}/>
			<div className={styles.description}>{props.description}</div>
		</div>
	)
}

export default AwardCard;