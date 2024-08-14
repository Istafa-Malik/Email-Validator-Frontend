/*
import React, { useState } from 'react';
import { FaCheckCircle, FaListAlt, FaClock, FaShieldAlt, FaDatabase, FaUserShield, FaEnvelopeOpenText } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Feature.css'; // Custom CSS for styling

export const Feature = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const toggleFeature = (feature) => {
    setActiveFeature(activeFeature === feature ? null : feature);
  };

  return (
    <div className="feature-section">
      <h2 className="section-heading">Our Powerful Email Validation Features</h2>
      <div className="features-container">
        <div className="features-headings">
          <div 
            className={`feature-heading ${activeFeature === 'accurate-validation' ? 'active' : ''}`} 
            onClick={() => toggleFeature('accurate-validation')}
          >
            <FaCheckCircle className="feature-icon" />
            <span>Accurate Validation</span>
          </div>
          <div 
            className={`feature-heading ${activeFeature === 'bulk-processing' ? 'active' : ''}`} 
            onClick={() => toggleFeature('bulk-processing')}
          >
            <FaListAlt className="feature-icon" />
            <span>Bulk Processing</span>
          </div>
          <div 
            className={`feature-heading ${activeFeature === 'real-time-feedback' ? 'active' : ''}`} 
            onClick={() => toggleFeature('real-time-feedback')}
          >
            <FaClock className="feature-icon" />
            <span>Real-Time Feedback</span>
          </div>
          <div 
            className={`feature-heading ${activeFeature === 'secure-data' ? 'active' : ''}`} 
            onClick={() => toggleFeature('secure-data')}
          >
            <FaShieldAlt className="feature-icon" />
            <span>Secure Data</span>
          </div>
          <div 
            className={`feature-heading ${activeFeature === 'data-cleaning' ? 'active' : ''}`} 
            onClick={() => toggleFeature('data-cleaning')}
          >
            <FaDatabase className="feature-icon" />
            <span>Data Cleaning</span>
          </div>
          <div 
            className={`feature-heading ${activeFeature === 'gdpr-compliance' ? 'active' : ''}`} 
            onClick={() => toggleFeature('gdpr-compliance')}
          >
            <FaUserShield className="feature-icon" />
            <span>GDPR Compliance</span>
          </div>
          <div 
            className={`feature-heading ${activeFeature === 'detailed-reports' ? 'active' : ''}`} 
            onClick={() => toggleFeature('detailed-reports')}
          >
            <FaEnvelopeOpenText className="feature-icon" />
            <span>Detailed Reports</span>
          </div>
        </div>
        <div className="features-details">
          {activeFeature === 'accurate-validation' && (
            <div className="feature-detail active">
              <h3>Accurate Validation</h3>
              <p>Ensure that your email addresses are accurate and deliverable with our real-time validation. This feature includes:</p>
              <ul>
                <li className="highlight">Real-time checks for immediate validation.</li>
                <li>Prevention of bounce-backs.</li>
                <li>Validation of syntax and domain.</li>
              </ul>
              <Link to="/validation" className="try-button">TRY</Link>
            </div>
          )}
          {activeFeature === 'bulk-processing' && (
            <div className="feature-detail active">
              <h3>Bulk Processing</h3>
              <p>Process and validate large lists of email addresses quickly and efficiently. Features include:</p>
              <ul>
                <li className="highlight">Batch uploads for large datasets.</li>
                <li>Fast processing times.</li>
                <li>Easy export of validation results.</li>
              </ul>
              <Link to="/validation" className="try-button">TRY</Link>
            </div>
          )}
          {activeFeature === 'real-time-feedback' && (
            <div className="feature-detail active">
              <h3>Real-Time Feedback</h3>
              <p>Get instant feedback on email validity as users input their addresses. Key aspects:</p>
              <ul>
                <li className="highlight">Immediate validation results.</li>
                <li>User-friendly error messages.</li>
                <li>Enhanced user experience with instant corrections.</li>
              </ul>
              <Link to="/validation" className="try-button">TRY</Link>
            </div>
          )}
          {activeFeature === 'secure-data' && (
            <div className="feature-detail active">
              <h3>Secure Data</h3>
              <p>Your data is secure with our robust encryption and privacy protocols. Highlights:</p>
              <ul>
                <li className="highlight">End-to-end encryption.</li>
                <li>Compliance with industry standards.</li>
                <li>Regular security audits.</li>
              </ul>
              <Link to="/validation" className="try-button">TRY</Link>
            </div>
          )}
          {activeFeature === 'data-cleaning' && (
            <div className="feature-detail active">
              <h3>Data Cleaning</h3>
              <p>Clean your email list by removing invalid or undeliverable addresses. Key features:</p>
              <ul>
                <li className="highlight">Automated removal of invalid emails.</li>
                <li>Correction of common errors.</li>
                <li>Improved deliverability rates.</li>
              </ul>
              <Link to="/validation" className="try-button">TRY</Link>
            </div>
          )}
          {activeFeature === 'gdpr-compliance' && (
            <div className="feature-detail active">
              <h3>GDPR Compliance</h3>
              <p>Our service is designed with GDPR compliance in mind. Important aspects include:</p>
              <ul>
                <li className="highlight">Data protection measures.</li>
                <li>Privacy by design principles.</li>
                <li>Clear data handling policies.</li>
              </ul>
              <Link to="/validation" className="try-button">TRY</Link>
            </div>
          )}
          {activeFeature === 'detailed-reports' && (
            <div className="feature-detail active">
              <h3>Detailed Reports</h3>
              <p>Receive comprehensive reports on your email validation process. Features include:</p>
              <ul>
                <li className="highlight">In-depth validation summaries.</li>
                <li>Detailed error breakdowns.</li>
                <li>Easy-to-read graphical reports.</li>
              </ul>
              <Link to="/validation" className="try-button">TRY</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
*/

/* The New Feature  */


import React, { useState } from "react";
import "./Feature.css";

export const Feature = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const features = [
    {
      title: "Email Validation",
      description: "Ensure that email addresses are formatted correctly and are valid. Our validator checks for syntax errors and domain validity to ensure reliable communication."
    },
    {
      title: "Bulk Email Verification",
      description: "Upload and verify multiple email addresses at once. Our bulk verification tool processes large lists efficiently, saving you time and effort."
    },
    {
      title: "Spam Trap Detection",
      description: "Identify and remove potential spam traps from your email list. This feature helps in maintaining your sender reputation and improving deliverability."
    },
    {
      title: "Domain Validation",
      description: "Check if the email domain exists and is configured to receive emails. This ensures that the email addresses on your list are valid and active."
    },
    {
      title: "Real-Time Verification",
      description: "Verify email addresses in real-time as users sign up or submit forms. This feature helps in capturing valid emails from the start, reducing bounce rates."
    },
    {
      title: "Email List Cleaning",
      description: "Cleanse your email list by removing invalid, inactive, or duplicate addresses. Keep your list healthy and ensure higher engagement rates with your emails."
    }
  ];

  return (
    <div className="feature-container">
      <h2 className="feature-heading">Our Key Features</h2>
      <div className="feature-content">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`feature-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            <div className="feature-icon">
              <svg className="feature-svg" stroke="currentColor" viewBox="0 0 52 52">
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="feature-title">{feature.title}</h6>
            <p className="feature-description">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

