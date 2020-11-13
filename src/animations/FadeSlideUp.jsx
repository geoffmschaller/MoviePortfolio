import React from 'react';
import { motion } from 'framer-motion';

const FadeSlideUp = props => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				y: 100
			}}
			animate={{
				opacity: 1,
				y: 0,
				transition: {
					duration: 1,
					when: "beforeChildren"
				}
			}}
			{...props}
		>
			{props.children}
		</motion.div>
	)
}

export default FadeSlideUp;