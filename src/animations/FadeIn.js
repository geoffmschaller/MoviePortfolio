const FadeIn = (duration = 1) => ({
	initial: {
		opacity: 0
	},
	animate: {
		opacity: 1,
		transition: {
			duration: duration
		}
	}
});
	
export default FadeIn;