import React, { useState } from 'react';
import './Faq.css';

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'How does the email validation process work?',
      answer: 'Our email validation process involves several steps: syntax checking, domain validation, and mailbox verification. We ensure that the email format is correct, the domain exists, and the mailbox is active.'
    },
    {
      question: 'What types of email addresses can be validated?',
      answer: 'We can validate various types of email addresses, including personal, business, and temporary email addresses. Our system also checks for disposable and role-based email addresses.'
    },
    {
      question: 'Is my data safe with your service?',
      answer: 'Yes, we prioritize data privacy and security. All email addresses processed are kept confidential and are not shared with third parties.'
    },
    {
      question: 'Can I integrate email validation into my application?',
      answer: 'Absolutely! We offer API access that allows you to integrate our email validation service directly into your application or system.'
    },
    {
      question: 'How can I get support if I encounter issues?',
      answer: 'You can reach out to our support team through our contact page. We offer assistance via email and live chat to resolve any issues you might face.'
    },
    {
      question: 'What is the pricing for your email validation service?',
      answer: 'We offer various pricing plans based on the number of verifications you need. Please visit our pricing page for detailed information on our plans and rates.'
    }
  ];

  return (
    <div className="faq-container">
      <div className="faq-inner-container">
        <div className="faq-header">
          <p className="faq-badge">Frequently Asked Questions</p>
          <h2 className="faq-title">
            <span className="relative">Common Questions</span> about Email Validator
          </h2>
        </div>
        <div className="faq-items">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="faq-item"
              onClick={() => handleToggle(index)}
            >
              <div className="faq-item-header">
                <span className="faq-item-icon">?</span>
                <p className="faq-item-question">{item.question}</p>
              </div>
              {openIndex === index && (
                <p className="faq-item-answer">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
