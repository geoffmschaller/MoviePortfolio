import React, { useState } from 'react';
import styles from './FaqQuestion.module.sass';

const FaqQuestion = props => {

	const [isOpen, setIsOpen] = useState(false);

	const toggleQuestion = () => {
		setIsOpen(!isOpen);
	}

	return (
		<div className={styles.faqQuestion} onClick={toggleQuestion}>
			<div className={styles.question}>
				<div>{props.question}</div>
				<i className={`far fa-caret-${isOpen ? 'up' : 'down'}`}/>
			</div>
			<div className={styles.border}/>
			<div className={[styles.answer, isOpen ? styles.open : ''].join(" ")}>
				<div className={styles.header}>Lorem ipsum dolor sit amet.</div>
				<div className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis nesciunt unde repudiandae natus dicta eligendi ab ipsam sequi fuga architecto aliquid sed perferendis quam, aperiam deleniti, consequatur beatae quasi minima.</div>
			</div>
		</div> 
	)
}

export default FaqQuestion;