import React, { useState } from 'react';
import './Content.css';

export const Content = () => {
  const [activeStep, setActiveStep] = useState(null);

  const toggleStep = (step) => {
    setActiveStep(activeStep === step ? null : step);
  };

  return (
    <div className="custom-content-container">
      <h2 className="custom-content-heading">About Email Validator</h2>
      <div className="custom-content-wrapper">
        <div className="custom-features-grid">
          <div className="custom-feature-item">
            <div className="custom-feature-icon">
              <svg
                className="custom-icon-svg"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="custom-feature-heading">Accurate Email Verification</h6>
            <p className="custom-feature-text">
              Our tool ensures that every email address is validated against the latest standards, reducing bounce rates and increasing deliverability.
            </p>
          </div>
          <div className="custom-feature-item">
            <div className="custom-feature-icon">
              <svg
                className="custom-icon-svg"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="custom-feature-heading">Real-Time Validation</h6>
            <p className="custom-feature-text">
              Our real-time validation checks the format and domain of email addresses as they are entered, providing instant feedback.
            </p>
          </div>
          <div className="custom-feature-item">
            <div className="custom-feature-icon">
              <svg
                className="custom-icon-svg"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="custom-feature-heading">Bulk Email Processing</h6>
            <p className="custom-feature-text">
              Process large volumes of email addresses quickly and efficiently with our bulk validation feature.
            </p>
          </div>
          <div className="custom-feature-item">
            <div className="custom-feature-icon">
              <svg
                className="custom-icon-svg"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="custom-feature-heading">Comprehensive Reporting</h6>
            <p className="custom-feature-text">
              Receive detailed reports on validation results, including invalid email addresses and possible errors.
            </p>
          </div>
        </div>
        
        <h3 className="custom-steps-heading">How to Use Leads Verify</h3>
        
        <div className="custom-steps-container">
          <div 
            className={`custom-step-item ${activeStep === 1 ? 'active' : ''}`} 
            onClick={() => toggleStep(1)}
          >
            <div className="custom-step-heading">1. Enter Email</div>
            <p className="custom-step-text">Start by entering the email address you want to validate.</p>
          </div>
          <div 
            className={`custom-step-item ${activeStep === 2 ? 'active' : ''}`} 
            onClick={() => toggleStep(2)}
          >
            <div className="custom-step-heading">2. Verify Format</div>
            <p className="custom-step-text">Our system checks the email format for accuracy.</p>
          </div>
          <div 
            className={`custom-step-item ${activeStep === 3 ? 'active' : ''}`} 
            onClick={() => toggleStep(3)}
          >
            <div className="custom-step-heading">3. Domain Check</div>
            <p className="custom-step-text">The domain is validated to ensure it is active and correct.</p>
          </div>
          <div 
            className={`custom-step-item ${activeStep === 4 ? 'active' : ''}`} 
            onClick={() => toggleStep(4)}
          >
            <div className="custom-step-heading">4. Get Results</div>
            <p className="custom-step-text">Receive instant feedback on the email's validity.</p>
          </div>
        </div>

        <div className="custom-get-started-container">
          <a href="/signup" className="custom-get-started-button">Get Started</a>
        </div>
      </div>
    </div>
  );
};
