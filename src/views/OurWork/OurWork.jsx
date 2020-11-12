import React from 'react';
import styles from './OurWork.module.sass';
import MovieCard from '../../components/MovieCard/MovieCard';

import MovieList from '../../data/MovieList';

const OurWork = () => {
	return (
		<div className={styles.ourWork}>
			<div className={styles.movieList}>
				{
					MovieList.map((mov, index) => {
						return <MovieCard key={index} title={mov.title} link={`/our-work/${mov.url}`} image={mov.mainImg}/>
					})
				}
			</div>
		</div>
	)
}

export default OurWork;