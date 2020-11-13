const AboutTitleAnimation = (duration = 1) => ({
		initial: {
			opacity: 0,
			y: -100
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: duration,
				ease: 'easeOut'
			}
		}
});
	
export default AboutTitleAnimation;