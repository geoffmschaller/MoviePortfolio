import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import AboutUs from '../views/AboutUs/AboutUs';
import './App.module.sass';

const App = () => {
	return (
		<div className="App">
			<Navigation/>
			<AboutUs/>
		</div>
	);
}

export default App;
