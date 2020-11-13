import React from 'react';
import styles from './FaqSection.module.sass';
import FaqQuestion from '../FaqQuestion/FaqQuestion';
import FadeOnScroll from '../../animations/FadeOnScroll';

const FaqSection = () => {

	const faqQuestions = [ 
		{
			question: 'How do I start?',
			answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ad vel quasi sapiente provident aut hic molestiae numquam adipisci distinctio.'
		},
		{
			question: 'What payment methods do you take?',
			answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ad vel quasi sapiente provident aut hic molestiae numquam adipisci distinctio.'
		},
		{
			question: 'What products do you offer?',
			answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ad vel quasi sapiente provident aut hic molestiae numquam adipisci distinctio.'
		},
		{
			question: 'What technologies do you use?',
			answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ad vel quasi sapiente provident aut hic molestiae numquam adipisci distinctio.'
		}
	]
	return (
		<FadeOnScroll>
			<div className={styles.faqSection}>
				<div className={styles.title}>
					Any Questions <span className={styles.faq}>FAQ</span>
				</div>
				<div className={styles.questions}>
					{
						faqQuestions.map((q, index) => {
							return <FaqQuestion
								key={index}
								question={q.question}
								answer={q.answer}
							/>
						})
					}
				</div>
			</div>
		</FadeOnScroll>
	)
}

export default FaqSection;