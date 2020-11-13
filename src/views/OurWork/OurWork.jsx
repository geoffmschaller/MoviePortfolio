import React from 'react';
import styles from './OurWork.module.sass';
import MovieCard from '../../components/MovieCard/MovieCard';
import { motion } from 'framer-motion';

import MovieList from '../../data/MovieList';

import PageTransition from '../../animations/PageTransition';

const OurWork = () => {
	return (
		<motion.div {...PageTransition(1)} className={styles.ourWork}>
			<div className={styles.movieList}>
				{
					MovieList.map((mov, index) => {
						return <MovieCard key={index} title={mov.title} link={`/our-work/${mov.url}`} image={mov.mainImg}/>
					})
				}
			</div>
		</motion.div>
	)
}

export default OurWork;