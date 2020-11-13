import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import styles from './MovieDetails.module.sass';
import MovieList from '../../data/MovieList';
import AwardCard from '../../components/AwardCard/AwardCard';
import { motion } from 'framer-motion';

import PageTransition from '../../animations/PageTransition';

const MovieDetails = () => {
	const history = useHistory();
	const [selectedMovie, setSelectedMovie] = useState(
		MovieList.filter(mov => {
			return mov.url === history.location.pathname.replace('/our-work/', '');
		})[0]
	);
	return (
		<motion.div {...PageTransition(1)} className={styles.movieDetails}>
			<div className={styles.header}>
				<div className={styles.title}>{selectedMovie.title}</div>
				<img src={selectedMovie.mainImg} alt=""/>
			</div>
			<div className={styles.awardsList}>
				{
					selectedMovie.awards.map((aw, index) => {
						return <AwardCard title={aw.title} description={aw.description}/>
					})
				}
			</div>
			<div className={styles.imageDisplay}>
				<img src={selectedMovie.secondaryImg} alt=""/>
			</div>
		</motion.div>
	)
}

export default MovieDetails;