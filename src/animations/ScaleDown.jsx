import React from 'react';
import { motion } from 'framer-motion';

const FadeSlideUp = props => {
	return (
		<motion.div
			initial={{
				scale: 1.5,
				opacity: 0,
				transition: {
					duration: 1,
					ease: 'easeOut'
				}
			}}
			animate={{
				opacity: 1,
				scale: 1,
				transition: {
					duration: 1,
					ease: 'easeOut'
				}
			}}
			{...props}
		>
			{props.children}
		</motion.div>
	)
}

export default FadeSlideUp;