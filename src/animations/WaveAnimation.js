const WaveAnimation = (duration = 1) => ({
	initial: {
		pathLength: 0,
		pathOffset: 0
	},
	animate: {
		pathLength: 1,
		pathOffset: 0,
		transition: {
			duration: duration,
			ease: 'easeOut'
		}
	}
});
	
export default WaveAnimation;