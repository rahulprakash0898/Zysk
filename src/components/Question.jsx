import React, { useState } from 'react';
import styles from './Question.module.css';  

const Question = () => {

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const questions = [
    {
      question: 'Can I change my plan later?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'You can create React components, manage state, and render UI dynamically.',
    },
    {
      question: 'Can other info be added to an invoice?',
      answer: 'A component is a reusable building block of a React application.',
    },
    {
      question: 'How does billing work?',
      answer: 'JSX is a syntax extension that allows you to write HTML inside JavaScript code.',
    },
    {
        question: 'How do I change my account email?',
        answer: 'JSX is a syntax extension that allows you to write HTML inside JavaScript code.',
      }
  ];


  const handleClick = (index) => {
    if (selectedQuestion === index) {
      setSelectedQuestion(null); 
    } else {
      setSelectedQuestion(index); 
    }
  };

  return (
    <div className={styles.faqContainer}>
      <h1>Frequently Asked Questions</h1>
      <h2>Everything you need to know about the product and billig.</h2>
      <div className={styles.faqList}>
        {questions.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <div
              className={styles.faqQuestion}
              onClick={() => handleClick(index)}
            >
              {item.question}
            </div>
            {selectedQuestion === index && (
              <div className={styles.faqAnswer}>
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
