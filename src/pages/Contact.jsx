import React, { useState, useEffect } from 'react';
import '../App.css';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('yasmeenjenessa@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const pageStyles = {
    minHeight: 'calc(100vh - 80px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    backgroundAttachment: 'fixed',
    padding: '2rem'
  };

  const containerStyles = {
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(20px)',
    borderRadius: '30px',
    padding: '4rem 3rem',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    width: '100%',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 1s ease'
  };

  const titleStyles = {
    fontSize: '3.5rem',
    marginBottom: '2rem',
    color: '#333',
    fontWeight: '700',
    background: 'linear-gradient(45deg, #667eea, #764ba2)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  const subtitleStyles = {
    fontSize: '1.3rem',
    color: '#555',
    marginBottom: '3rem',
    lineHeight: '1.6'
  };

  const emailContainerStyles = {
    background: 'rgba(255, 255, 255, 0.4)',
    borderRadius: '20px',
    padding: '2rem',
    marginBottom: '2rem',
    border: '2px solid rgba(255, 255, 255, 0.5)',
    transition: 'all 0.3s ease'
  };

  const emailStyles = {
    fontSize: '1.8rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '1rem',
    fontFamily: 'monospace'
  };

  const buttonStyles = {
    background: 'linear-gradient(45deg, #667eea, #764ba2)',
    color: '#fff',
    border: 'none',
    padding: '12px 30px',
    borderRadius: '25px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
  };

  const copiedStyles = {
    ...buttonStyles,
    background: 'linear-gradient(45deg, #10B981, #059669)',
    boxShadow: '0 4px 15px rgba(16, 185, 129, 0.4)'
  };

  return (
    <div style={pageStyles}>
      <div style={containerStyles}>
        <h1 style={titleStyles}>Let's Connect</h1>
        
        <p style={subtitleStyles}>
          I'd love to hear from you! Whether you have a project in mind, 
          want to collaborate, or just want to say hello.
        </p>

        <div 
          style={emailContainerStyles}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.02)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <div style={{ marginBottom: '1rem', fontSize: '1.1rem', color: '#666' }}>
            Email me at:
          </div>
          
          <div style={emailStyles}>
            yasmeenjenessa@gmail.com
          </div>
          
          <button
            onClick={handleCopyEmail}
            style={copied ? copiedStyles : buttonStyles}
            onMouseOver={(e) => {
              if (!copied) {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
              }
            }}
            onMouseOut={(e) => {
              if (!copied) {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
              }
            }}
          >
            {copied ? 'Copied!' : 'Copy Email'}
          </button>
        </div>

        <p style={{
          fontSize: '1rem',
          color: '#777',
          fontStyle: 'italic'
        }}>
          I typically respond within 24 hours
        </p>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .contact-container {
            padding: 2rem 1.5rem !important;
            margin: 1rem;
          }
          h1 {
            font-size: 2.5rem !important;
          }
          .email-text {
            font-size: 1.3rem !important;
          }
        }
      `}</style>
    </div>
  );
}