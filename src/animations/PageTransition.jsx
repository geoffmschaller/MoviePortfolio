import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = props => {
	return (
		<motion.div
			initial={{
				opacity: 0
			}}
			animate={{
				opacity: 1,
				transition: {
					staggerChildren: 0.25,
					duration: 0.5,
					when: 'beforeChildren',
				}
			}}
			exit={{
				opacity: 0,
				transition: { ease: 'easeOut', duration: 0.5 }
			}}
			{...props}
		>
			{props.children}
		</motion.div>
	)
}

export default PageTransition;