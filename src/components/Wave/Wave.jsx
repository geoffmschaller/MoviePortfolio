import React from 'react';
import styles from './Wave.module.sass';

import WaveMotion from '../../animations/WaveMotion';

const Wave = () => {
	return (
		<svg
			viewBox="0 0 1440 363"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={styles.svg}
		>
			<WaveMotion
				d="M1440 27.4774C1352.73 19.8184 1122.41 49.0556 899.331 227.276C620.48 450.052 354.282 355.647 170.328 185.318C23.165 49.0556 -4.21721 8.32998 0.487081 5"
				stroke="#D96ED4"
				strokeOpacity="0.5"
				strokeWidth="10"
			/>
			
		</svg>

	)
}

export default Wave;