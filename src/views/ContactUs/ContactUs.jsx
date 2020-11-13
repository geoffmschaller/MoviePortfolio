import React from 'react';
import styles from './ContactUs.module.sass';

import PageTransition from '../../animations/PageTransition';

const ContactUs = () => {
	return (
		<PageTransition className={styles.contactUs}>
			<p>CONTACT US</p>
		</PageTransition>
	)
}

export default ContactUs;