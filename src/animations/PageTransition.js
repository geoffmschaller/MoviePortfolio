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
			when: "beforeChildren"
		}
	},
	exit: {
		opacity: 0,
		y: 300,
		transition: {
			duration: 0.5
		}
	}
});
	
export default PageTransition;