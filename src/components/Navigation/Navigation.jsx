import React from 'react';
import styles from './Navigation.module.sass';

const Navigation = () => {
	return (
		<div className={styles.navigation}>
			<a to={'#'} className={styles.logo}>Capture</a>
			<div className={styles.menu}>
				<a to={'#'}>About Us</a>
				<a to={'#'}>Our Work</a>
				<a to={'#'}>Contact Us</a>
			</div>
		</div>
	)
}

export default Navigation;