import React from 'react';
import styles from './FaqQuestion.module.sass';

const FaqQuestion = props => {
	return (
		<div className={styles.faqQuestion}>
			<div className={styles.question}>{props.question}</div>
			<div className={styles.answer}>
				<p>Lorem ipsum dolor sit amet.</p>
				<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis nesciunt unde repudiandae natus dicta eligendi ab ipsam sequi fuga architecto aliquid sed perferendis quam, aperiam deleniti, consequatur beatae quasi minima.</p>
			</div>
		</div>
	)
}

export default FaqQuestion;