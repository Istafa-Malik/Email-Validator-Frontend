import React, { useState } from 'react';
import {
  FaCheckCircle,
  FaListAlt,
  FaClock,
  FaShieldAlt,
  FaDatabase,
  FaUserShield,
  FaEnvelopeOpenText,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Feature2.css';

export const Feature2 = () => {
  const [activeFeature, setActiveFeature] = useState(null);

  const toggleFeature = (feature) => {
    setActiveFeature(activeFeature === feature ? null : feature);
  };

  const featureData = [
    { id: 'accurate-validation', icon: FaCheckCircle, label: 'Accurate Validation' },
    { id: 'bulk-processing', icon: FaListAlt, label: 'Bulk Processing' },
    { id: 'real-time-feedback', icon: FaClock, label: 'Real-Time Feedback' },
    { id: 'secure-data', icon: FaShieldAlt, label: 'Secure Data' },
    { id: 'data-cleaning', icon: FaDatabase, label: 'Data Cleaning' },
    { id: 'gdpr-compliance', icon: FaUserShield, label: 'GDPR Compliance' },
    { id: 'detailed-reports', icon: FaEnvelopeOpenText, label: 'Detailed Reports' },
  ];

  const featureDetails = {
    'accurate-validation': (
      <>
        <p>Ensure that your email addresses are accurate and deliverable with our real-time validation. This feature includes:</p>
        <ul>
          <li className="highlight">Real-time checks for immediate validation.</li>
          <li>Prevention of bounce-backs.</li>
          <li>Validation of syntax and domain.</li>
        </ul>
      </>
    ),
    'bulk-processing': (
      <>
        <p>Process and validate large lists of email addresses quickly and efficiently. Features include:</p>
        <ul>
          <li className="highlight">Batch uploads for large datasets.</li>
          <li>Fast processing times.</li>
          <li>Easy export of validation results.</li>
        </ul>
      </>
    ),
    'real-time-feedback': (
      <>
        <p>Get instant feedback on email validity as users input their addresses. Key aspects:</p>
        <ul>
          <li className="highlight">Immediate validation results.</li>
          <li>User-friendly error messages.</li>
          <li>Enhanced user experience with instant corrections.</li>
        </ul>
      </>
    ),
    'secure-data': (
      <>
        <p>Your data is secure with our robust encryption and privacy protocols. Highlights:</p>
        <ul>
          <li className="highlight">End-to-end encryption.</li>
          <li>Compliance with industry standards.</li>
          <li>Regular security audits.</li>
        </ul>
      </>
    ),
    'data-cleaning': (
      <>
        <p>Clean your email list by removing invalid or undeliverable addresses. Key features:</p>
        <ul>
          <li className="highlight">Automated removal of invalid emails.</li>
          <li>Correction of common errors.</li>
          <li>Improved deliverability rates.</li>
        </ul>
      </>
    ),
    'gdpr-compliance': (
      <>
        <p>Our service is designed with GDPR compliance in mind. Important aspects include:</p>
        <ul>
          <li className="highlight">Data protection measures.</li>
          <li>Privacy by design principles.</li>
          <li>Clear data handling policies.</li>
        </ul>
      </>
    ),
    'detailed-reports': (
      <>
        <p>Receive comprehensive reports on your email validation process. Features include:</p>
        <ul>
          <li className="highlight">In-depth validation summaries.</li>
          <li>Detailed error breakdowns.</li>
          <li>Easy-to-read graphical reports.</li>
        </ul>
      </>
    ),
  };

  return (
    <div className="feature-section">
      <h2 className="section-heading">Our Powerful Email Validation Features</h2>
      <div className="features-container">
        <div className="features-headings">
          {featureData.map(({ id, icon: Icon, label }) => (
            <div
              key={id}
              className={`feature-heading ${activeFeature === id ? 'active' : ''}`}
              onClick={() => toggleFeature(id)}
            >
              <span className={`feature-icon ${activeFeature === id ? 'active' : ''}`}>
                <Icon />
              </span>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="features-details">
          {Object.entries(featureDetails).map(([id, content]) => (
            <div key={id} className={`feature-detail ${activeFeature === id ? 'active' : ''}`}>
              <h3>{featureData.find((f) => f.id === id).label}</h3>
              {content}
              <Link to="/validation" className="try-button">TRY</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
