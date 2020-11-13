const PageTransition = (duration = 1) => ({
	initial: {
		opacity: 0,
		y: 300
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: duration,
			ease: 'easeOut'
		}
	},
	exit: {
		opacity: 0,
		y: 300
	}
});
	
export default PageTransition;