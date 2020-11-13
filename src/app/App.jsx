import React, {useEffect} from 'react';
import Navigation from '../components/Navigation/Navigation';
import AboutUs from '../views/AboutUs/AboutUs';
import './App.module.sass';
import {Switch, Route, useLocation} from 'react-router-dom';
import OurWork from '../views/OurWork/OurWork';
import MovieDetails from '../views/MovieDetails/MovieDetails';
import { AnimatePresence } from 'framer-motion';

const App = props => {

	const location = useLocation();

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0
		})
	}, [location.pathname]);

	return (
		<div className="App">
			<Navigation/>
				<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route path={'/'} exact component={AboutUs} />
					<Route path={'/our-work'} exact component={OurWork} />
					<Route path={'/our-work/:name'} exact component={MovieDetails}/>
				</Switch>
			</AnimatePresence>
		</div>
	);
}

export default App;
