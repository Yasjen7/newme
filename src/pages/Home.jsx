import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cards from '../components/Cards';
import '../App.css';

function Home() {
  const [bubbles, setBubbles] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const textRotation = [
    "Aspiring Developer",
    "Creative Problem Solver", 
    "Community Builder",
    "Tech Enthusiast"
  ];

  useEffect(() => {
    const newBubbles = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      size: Math.random() * 60 + 40,
      left: Math.random() * 80 + 10,
      top: Math.random() * 80 + 10,
      delay: Math.random() * 6,
      duration: Math.random() * 4 + 4
    }));
    setBubbles(newBubbles);
    
    setTimeout(() => setIsVisible(true), 500);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % textRotation.length);
    }, 3000);

    return () => clearInterval(textInterval);
  }, []);

  const homeStyles = {
    position: 'relative',
    minHeight: 'calc(100vh - 80px)',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  };

  const bubbleContainerStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    zIndex: 1
  };

  const contentStyles = {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    maxWidth: '800px',
    padding: '2rem',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'all 1s ease'
  };

  const profileStyles = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    marginBottom: '2rem',
    animation: 'float 3s ease-in-out infinite'
  };

  const titleStyles = {
    fontSize: '4rem',
    marginBottom: '1rem',
    color: '#fff',
    fontWeight: '700'
  };

  const highlightStyles = {
    background: 'linear-gradient(45deg, #FFD700, #FFA500)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  const subtitleStyles = {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: 'rgba(255, 255, 255, 0.9)',
    minHeight: '2rem',
    transition: 'all 0.5s ease'
  };

  const ctaStyles = {
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
    marginTop: '2rem',
    flexWrap: 'wrap'
  };

  const buttonStyles = {
    padding: '12px 24px',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer'
  };

  const primaryButtonStyles = {
    ...buttonStyles,
    background: 'linear-gradient(45deg, #667eea, #764ba2)',
    color: '#fff',
    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
  };

  const secondaryButtonStyles = {
    ...buttonStyles,
    background: 'transparent',
    color: '#fff',
    border: '2px solid #667eea'
  };

  return (
    <div>
      <div style={homeStyles}>
        <div style={bubbleContainerStyles}>
          {bubbles.map((bubble) => (
            <div
              key={bubble.id}
              style={{
                position: 'absolute',
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                left: `${bubble.left}%`,
                top: `${bubble.top}%`,
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                animation: `float ${bubble.duration}s ease-in-out infinite`,
                animationDelay: `${bubble.delay}s`
              }}
            />
          ))}
        </div>
        
        <div style={contentStyles}>
          <img 
            src='/images/mefr.jpg' 
            alt="Yasmeen Profile" 
            style={profileStyles}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          />
          
          <h1 style={titleStyles}>
            Hi, I'm <span style={highlightStyles}>Yasmeen</span>
          </h1>
          <p style={subtitleStyles}>
            {textRotation[currentText]}
          </p>
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'rgba(255, 255, 255, 0.8)', 
            lineHeight: '1.6',
            marginBottom: '2rem'
          }}>
            Building beautiful, functional web experiences with modern technologies
          </p>

          <div style={ctaStyles}>
            <Link 
              to="/projects" 
              style={primaryButtonStyles}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
              }}
            >
              View My Work
            </Link>
            <Link 
              to="/contact" 
              style={secondaryButtonStyles}
              onMouseOver={(e) => {
                e.target.style.background = 'linear-gradient(45deg, #667eea, #764ba2)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
      
      <Cards />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); opacity: 0.7; }
          50% { transform: translateY(-20px) scale(1.1); opacity: 1; }
        }
        
        @media (max-width: 768px) {
          .profile-image { width: 150px; height: 150px; }
          h1 { font-size: 2.5rem !important; }
          .subtitle { font-size: 1.2rem !important; }
        }
      `}</style>
    </div>
  );
}

export default Home;