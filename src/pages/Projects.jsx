import React, { useState, useEffect } from 'react';
import '../App.css';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 500);
  }, []);

  const pageStyles = {
    minHeight: 'calc(100vh - 80px)',
    padding: '2rem',
    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    backgroundAttachment: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const containerStyles = {
    maxWidth: '1000px',
    width: '100%',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 1s ease'
  };

  const titleStyles = {
    fontSize: '3.5rem',
    marginBottom: '3rem',
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center'
  };

  const videosGridStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    width: '100%',
    alignItems: 'center'

  };

  const videoCardStyles = {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '2rem',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease'
  };

  const videoStyles = {
    width: '100%',
    height: '250px',
    borderRadius: '15px',
    marginBottom: '1.5rem',
    objectFit: 'cover'
  };

  const videoTitleStyles = {
    fontSize: '1.5rem',
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '1rem'
  };

  const videoDescStyles = {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    lineHeight: '1.5'
  };

  return (
    <div style={pageStyles}>
      <div style={containerStyles}>
        <h1 style={titleStyles}>My Projects</h1>
        
        <div style={videosGridStyles}>
          <div 
            style={videoCardStyles}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <video 
              controls 
              style={videoStyles}
              poster='/images/logo.JPG'
            >
              <source src="/videos/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3 style={videoTitleStyles}>Project Video 1</h3>
            <p style={videoDescStyles}>
              Description of your first project video
            </p>
          </div>

          <div 
            style={videoCardStyles}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <video 
              controls 
              style={videoStyles}
              poster='/images/logo2.JPG'
            >
              <source src="/videos/video2.mp4" type="video/mp4" />
              Your browser does not support the video tag.</video>
            <h3 style={videoTitleStyles}>Project Video 2</h3>
            <p style={videoDescStyles}>
              Description of your second project video
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .videos-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem;
          }
          .video-card {
            padding: 1.5rem !important;
          }
          h1 {
            font-size: 2.5rem !important;
          }
        }
      `}</style>
    </div>
  );
}