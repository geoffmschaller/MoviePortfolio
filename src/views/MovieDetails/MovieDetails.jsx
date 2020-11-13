import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import styles from './MovieDetails.module.sass';
import MovieList from '../../data/MovieList';
import AwardCard from '../../components/AwardCard/AwardCard';
import { motion } from 'framer-motion';

import PageTransition from '../../animations/PageTransition';
import FadeSlideDown from '../../animations/FadeSlideDown';

const MovieDetails = () => {
	const history = useHistory();
	const [selectedMovie, setSelectedMovie] = useState(
		MovieList.filter(mov => {
			return mov.url === history.location.pathname.replace('/our-work/', '');
		})[0]
	);
	return (
		<PageTransition className={styles.movieDetails}>
			<div className={styles.header}>
				<img src={selectedMovie.mainImg} alt="" />
				<div className={styles.titleContainer}>
					<motion.div initial={FadeSlideDown.start} animate={FadeSlideDown.finish} className={styles.title}>{selectedMovie.title}</motion.div>
				</div>
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
		</PageTransition>
		
	)
}

export default MovieDetails;