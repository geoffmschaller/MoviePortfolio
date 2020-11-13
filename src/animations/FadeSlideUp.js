const FadeSlideUp = (duration = 1) => ({
		initial: {
			opacity: 0,
			y: 100
		},
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: duration,
				when: "beforeChildren"
			}
		}
});
	
export default FadeSlideUp;