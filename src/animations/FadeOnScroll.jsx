import React from 'react';
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';

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
			variants={{
				start: {
					opacity: 0
				},
				finish: {
					opacity: 1,
					transition: {
						duration: 1
					}
				}
			}}
			initial={'start'}
			animate={controls}
			ref={element}
		>
			{props.children}
		</motion.div>
	)
}

export default FadeOnScroll;