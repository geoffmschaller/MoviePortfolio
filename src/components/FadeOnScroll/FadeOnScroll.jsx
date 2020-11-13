import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';

import FadeIn from '../../animations/FadeIn';

const FadeOnScroll = props => {
	const controls = useAnimation();
	const [element, view] = useInView({ threshold: 0.25 });
	
	if (view) {
		controls.start('finish');
	} else {
		controls.start('start');
	}

	return (
		<motion.div
			variants={FadeIn}
			initial={'start'}
			animate={controls}
			ref={element}
		>
			{props.children}
		</motion.div>
	)
}

export default FadeOnScroll;