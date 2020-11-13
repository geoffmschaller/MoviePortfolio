const FadeSlideDown = {
	start: {
		opacity: 0,
		y: -100
	},
	finish: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			when: "beforeChildren"
		}
	}
};
	
export default FadeSlideDown;