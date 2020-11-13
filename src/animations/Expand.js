const Expand = (duration = 1) => ({
	initial: {
		width: 0
	},
	animate: {
		width: '100%',
		transition: {
			duration: duration
		}
	}
});
	
export default Expand;