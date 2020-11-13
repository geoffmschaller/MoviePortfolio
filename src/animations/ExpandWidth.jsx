import React from 'react';
import { motion } from 'framer-motion';

const ExpandWidth = props => {
	return (
		<motion.div
			initial={{
				width: 0
			}}
			animate={{
				width: '100%',
				transition: {
					duration: 1
				}
			}}
			{...props}
		>
			{props.children}
		</motion.div>
	)
}

export default ExpandWidth;