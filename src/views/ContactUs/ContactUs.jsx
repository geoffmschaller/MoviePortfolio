import React from 'react';
import styles from './ContactUs.module.sass';
import { motion } from 'framer-motion';

import PageTransition from '../../animations/PageTransition';

const ContactUs = () => {
	return (
		<motion.div initial={PageTransition.start} animate={PageTransition.finish} exit={PageTransition.exit} className={styles.contactUs}>CONTACT US</motion.div>
	)
}

export default ContactUs;