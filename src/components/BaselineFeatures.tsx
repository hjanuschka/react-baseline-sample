import React, { useState, useEffect, useRef } from 'react';
import './BaselineFeatures.css';

// Component showcasing BASELINE COMPATIBLE features
export const BaselineFeatures: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Intersection Observer (Baseline Widely Available)
  useEffect(() => {
    if (!observerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(observerRef.current);
    
    return () => observer.disconnect();
  }, []);

  // Fetch API (Baseline Widely Available)
  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
      const data = await response.json();
      console.log('Fetched data:', data);
    } catch (error) {
      console.error('Fetch failed:', error);
    }
  };

  // Dialog API (Baseline Widely Available)
  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
      setDialogOpen(true);
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
      setDialogOpen(false);
    }
  };

  // CSS.supports (Baseline Widely Available)
  const checkCSSSupport = () => {
    const supportsGrid = CSS.supports('display', 'grid');
    const supportsFlex = CSS.supports('display', 'flex');
    alert(`CSS Grid: ${supportsGrid}, CSS Flex: ${supportsFlex}`);
  };

  return (
    <div className="baseline-features">
      <h2>🌱 Baseline Compatible Features</h2>
      
      {/* CSS Grid Layout (Baseline Widely Available) */}
      <div className="grid-container">
        <div className="grid-item">Grid Item 1</div>
        <div className="grid-item">Grid Item 2</div>
        <div className="grid-item">Grid Item 3</div>
        <div className="grid-item">Grid Item 4</div>
      </div>

      {/* Flexbox Layout (Baseline Widely Available) */}
      <div className="flex-container">
        <button onClick={fetchData}>Fetch Data (Fetch API)</button>
        <button onClick={openDialog}>Open Dialog</button>
        <button onClick={checkCSSSupport}>Check CSS Support</button>
      </div>

      {/* Intersection Observer Target */}
      <div 
        ref={observerRef}
        className={`observer-target ${isVisible ? 'visible' : ''}`}
      >
        <p>{isVisible ? '👀 I\'m visible!' : '😴 Scroll to see me!'}</p>
      </div>

      {/* Dialog Element (Baseline Widely Available) */}
      <dialog ref={dialogRef} className="modal-dialog">
        <div className="dialog-content">
          <h3>Modal Dialog</h3>
          <p>This is a native HTML dialog element!</p>
          
          {/* Modern Form Elements (Baseline Widely Available) */}
          <form method="dialog">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              required 
              placeholder="Enter your email"
            />
            
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" />
            
            <label htmlFor="color">Color:</label>
            <input type="color" id="color" defaultValue="#007acc" />
            
            <div className="dialog-buttons">
              <button type="submit" onClick={closeDialog}>Close</button>
              <button type="button" onClick={closeDialog}>Cancel</button>
            </div>
          </form>
        </div>
      </dialog>

      {/* Details/Summary (Baseline Widely Available) */}
      <details className="details-section">
        <summary>📋 More Baseline Features</summary>
        <div className="details-content">
          <p>These features are all baseline compatible:</p>
          <ul>
            <li>✅ CSS Grid & Flexbox</li>
            <li>✅ Custom Properties (CSS Variables)</li>
            <li>✅ Fetch API & Promises</li>
            <li>✅ Intersection Observer</li>
            <li>✅ Dialog Element</li>
            <li>✅ Modern Form Elements</li>
            <li>✅ ES6+ Features (Arrow Functions, Async/Await)</li>
          </ul>
        </div>
      </details>
    </div>
  );
};