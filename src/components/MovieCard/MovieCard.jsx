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
			<motion.div {...Expand()} className={styles.border} />
			<Link to={props.link} className={styles.image}>
				<motion.img {...ScaleDown()} src={props.image}/>
			</Link>
		</div>
	)
}

export default MovieCard;