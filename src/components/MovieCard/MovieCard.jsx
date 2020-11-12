import React from 'react';
import styles from './MovieCard.module.sass';
import { Link } from 'react-router-dom';

const MovieCard = props => {
	return (
		<div className={styles.movieCard}>
			<div className={styles.title}>{props.title}</div>
			<div className={styles.border} />
			<Link to={props.link} className={styles.image}>
				<img src={props.image}/>
			</Link>
		</div>
	)
}

export default MovieCard;