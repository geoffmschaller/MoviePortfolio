import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import AboutUs from '../views/AboutUs/AboutUs';
import './App.module.sass';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import OurWork from '../views/OurWork/OurWork';
import ContactUs from '../views/ContactUs/ContactUs';

const App = () => {
	return (
		<div className="App">
			<BrowserRouter>
				<Navigation/>
				<Switch>
					<Route path={'/about-us'} exact component={AboutUs} />
					<Route path={'/contact-us'} exact component={ContactUs} />
					<Route path={'/our-work'} exact component={OurWork}/>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
