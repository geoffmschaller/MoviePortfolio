import React from 'react';
import styles from './MovieCard.module.sass';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import ScaleDown from '../../animations/ScaleDown';
import Expand from '../../animations/Expand';

const MovieCard = props => {
	return (
		<div className={styles.movieCard}>
			<div className={styles.title}>{props.title}</div>
			<motion.div initial={Expand.start} animate={Expand.finish} className={styles.border} />
			<Link to={props.link} className={styles.image}>
				<div className={styles.imageHolder}>
					<motion.img initial={ScaleDown.start} animate={ScaleDown.finish} src={props.image}/>
				</div>
			</Link>
		</div>
	)
}

export default MovieCard;