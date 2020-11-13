import React from 'react';
import styles from './AwardCard.module.sass';

import ExpandWidth from '../../animations/ExpandWidth';

const AwardCard = props => {
	return (
		<div className={styles.awardCard}>
			<div className={styles.title}>{props.title}</div>
			<ExpandWidth>
				<div className={styles.border}/>
			</ExpandWidth>
			<div className={styles.description}>{props.description}</div>
		</div>
	)
}

export default AwardCard;