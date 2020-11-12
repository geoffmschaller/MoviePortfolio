import React from 'react';
import styles from './Navigation.module.sass';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<div className={styles.navigation}>
			<Link to={'/'} className={styles.logo}>Capture</Link>
			<div className={styles.menu}>
				<Link to={'/about-us'}>About Us</Link>
				<Link to={'/our-work'}>Our Work</Link>
				<Link to={'/contact-us'}>Contact Us</Link>
			</div>
		</div>
	)
}

export default Navigation;