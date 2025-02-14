import React, { useEffect, useRef, useState } from 'react';
import './FadeInText.css';

const FadeInText = ({ text }) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.2 }
    );

    if (textRef.current) observer.observe(textRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={textRef} style={{fontFamily:"syncopate"}} className={`fade-in-text ${isVisible ? 'visible' : ''}`}>
      {text}
    </div>
  );
};

export default FadeInText;

