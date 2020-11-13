import React from 'react';
import { motion } from 'framer-motion';

const WaveMotion = props => {
	return (
		<motion.path
			initial={{
				pathLength: 0,
				pathOffset: 0
			}}
			animate={{
				pathLength: 1,
				pathOffset: 0,
				transition: {
					duration: 1,
					ease: 'easeOut'
				}
			}}
			{...props}
		/>
	)
}

export default WaveMotion;