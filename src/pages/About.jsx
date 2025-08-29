import React, { useState, useEffect } from 'react';
import '../App.css';

export default function About() {
  const [visibleSections, setVisibleSections] = useState([]);

  const journeyData = [
    {
      id: 1,
      icon: '🏙️',
      title: 'Growing Up in NYC',
      content: 'Growing up in NYC, the LES and the Bronx shaped my perspective on community, resilience, and creativity. As an artist, I\'ve always been drawn to expressing the vibrancy and strength of my community through various mediums. The diverse culture and strong community bonds taught me the importance of giving back and lifting each other up.',
      gradient: 'linear-gradient(45deg, #667eea, #764ba2)'
    },
    {
      id: 2,
      icon: '🎨',
      title: 'Artistic Journey',
      content: 'Art has always been my first language. From childhood sketches to digital masterpieces, I\'ve explored various mediums including mixed media, digital illustration, and interactive installations. My art often reflects themes of community, identity, and the intersection of tradition and technology.',
      gradient: 'linear-gradient(45deg, #f093fb, #f5576c)'
    },
    {
      id: 3,
      icon: '❤️',
      title: 'Motherhood Transformation',
      content: 'Becoming a mother at 22 was a transformative experience that deepened my commitment to creating positive change. Watching my son grow up in a digital world made me realize how crucial it is to understand technology not just as users, but as informed advocates for safe digital practices.',
      gradient: 'linear-gradient(45deg, #ff9a9e, #fecfef)'
    },
    {
      id: 4,
      icon: '💻',
      title: 'Tech Education & Cybersecurity',
      content: 'My transition into technology wasn\'t planned—it was born from necessity and curiosity. The cybersecurity bootcamp opened my eyes to the intersection of art and technology, where creativity meets problem-solving. I discovered that the same attention to detail and creative thinking that drives my art could be applied to understanding and securing digital spaces.',
      gradient: 'linear-gradient(45deg, #4facfe, #00f2fe)'
    }
  ];

  useEffect(() => {
    journeyData.forEach((_, index) => {
      setTimeout(() => {
        setVisibleSections(prev => [...prev, index]);
      }, index * 300);
    });
  }, []);

  const pageStyles = {
    minHeight: 'calc(100vh - 80px)',
    padding: '2rem',
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    backgroundAttachment: 'fixed'
  };

  const headerStyles = {
    textAlign: 'center',
    marginBottom: '4rem',
    paddingTop: '2rem'
  };

  const titleStyles = {
    fontSize: '4rem',
    marginBottom: '1rem',
    color: '#fff',
    fontWeight: '600'
  };

  const highlightStyles = {
    background: 'linear-gradient(45deg, #FFD700, #FFA500)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  };

  const introSectionStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '3rem',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '20px',
    padding: '2rem',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    marginBottom: '4rem',
    maxWidth: '1000px',
    margin: '0 auto 4rem auto'
  };

  const profileImageStyles = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    flexShrink: 0
  };

  return (
    <div style={pageStyles}>
      <div style={headerStyles}>
        <h1 style={titleStyles}>
          About <span style={highlightStyles}>Me</span>
        </h1>
        <p style={{
          fontSize: '1.3rem',
          color: 'rgba(255, 255, 255, 0.9)',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Discover my journey from the Bronx to the digital world, where art meets
          technology and community building drives innovation.
        </p>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={introSectionStyles}>
          <img 
            src='/images/mefr.jpg'
            alt="Yasmeen Vargas"
            style={profileImageStyles}
          />
          <div>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '1rem',
              color: '#fff'
            }}>
              Hello! I'm <span style={{
                background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Yasmeen Vargas</span>
            </h2>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.6',
              color: 'rgba(255, 255, 255, 0.9)'
            }}>
              I am a 25-year-old artist, born and raised in the Bronx, and a proud mom to my amazing
              3-year-old son. I am passionate about community building that encourages better ways
              of living.
            </p>
          </div>
        </div>

        <div>
          <h2 style={{
            fontSize: '3rem',
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#fff',
            fontWeight: '600'
          }}>
            My Journey
          </h2>
          
          {journeyData.map((item, index) => (
            <div
              key={item.id}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '2rem',
                marginBottom: '3rem',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '15px',
                padding: '2rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                opacity: visibleSections.includes(index) ? 1 : 0,
                transform: visibleSections.includes(index) ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.6s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.2)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                color: '#fff',
                border: '3px solid rgba(255, 255, 255, 0.3)',
                background: item.gradient,
                flexShrink: 0
              }}>
                {item.icon}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '1.8rem',
                  marginBottom: '1rem',
                  color: '#fff',
                  fontWeight: '600'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: '1.1rem',
                  lineHeight: '1.6',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}>
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .intro-section {
            flex-direction: column !important;
            text-align: center;
          }
          .journey-item {
            flex-direction: column !important;
            text-align: center;
          }
          .profile-image {
            width: 150px !important;
            height: 150px !important;
          }
        }
      `}</style>
    </div>
  );
}