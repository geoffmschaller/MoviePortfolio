import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import styles from './MovieDetails.module.sass';
import MovieList from '../../data/MovieList';

const MovieDetails = () => {
	const history = useHistory();
	const [selectedMovie, setSelectedMovie] = useState(
		MovieList.filter(mov => {
			return mov.url === history.location.pathname.replace('/our-work/', '');
		})[0]
	)

	return (
		<div className={styles.movieDetails}>{selectedMovie.title}</div>
	)
}

export default MovieDetails;