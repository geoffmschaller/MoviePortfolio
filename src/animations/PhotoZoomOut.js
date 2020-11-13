const PhotoZoomOut = (duration = 1) => ({
	initial: {
		scale: 1.5,
		opacity: 0
	},
	animate: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: duration,
			ease: 'easeOut',
			when: ""
		}
	}
});
	
export default PhotoZoomOut;