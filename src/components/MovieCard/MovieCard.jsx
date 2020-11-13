import React from 'react';
import styles from './MovieCard.module.sass';
import { Link } from 'react-router-dom';
import FadeOnScroll from '../../animations/FadeOnScroll';

import ScaleDown from '../../animations/ScaleDown';
import ExpandWidth from '../../animations/ExpandWidth';

const MovieCard = props => {
	return (
		<FadeOnScroll>
			<div className={styles.movieCard}>
				<div className={styles.title}>{props.title}</div>
				<ExpandWidth className={styles.border}/>
				<Link
					to={props.link}
					className={styles.image}
				>
					<div className={styles.imageHolder}>
						<ScaleDown>
							<img src={props.image} alt=""/>
						</ScaleDown>
					</div>
				</Link>
			</div>
		</FadeOnScroll>	
	)
}

export default MovieCard;