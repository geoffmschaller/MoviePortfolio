const PageTransition = (duration = 1) => ({
	initial: {
		opacity: 0
	},
	animate: {
		opacity: 1,
		transition: {
			staggerChildren: 0.25,
			duration: 0.5,
			when: 'beforeChildren',
		}
	},
	exit: {
		opacity: 0,
    	transition: { ease: 'easeOut', duration: 0.5 }
	}
});
	
export default PageTransition;