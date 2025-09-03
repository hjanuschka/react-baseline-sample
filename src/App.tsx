import React, { useState } from 'react';
import './App.css';
import { BaselineFeatures } from './components/BaselineFeatures';
import { ExperimentalFeatures } from './components/ExperimentalFeatures';

function App() {
  const [showBaseline, setShowBaseline] = useState(true);
  const [showExperimental, setShowExperimental] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <h1>🌱 Baseline Gardener Demo</h1>
        <p>
          Showcasing baseline-compatible vs experimental web features
        </p>
        
        <div className="toggle-buttons">
          <button 
            onClick={() => setShowBaseline(!showBaseline)}
            className={showBaseline ? 'active' : ''}
          >
            {showBaseline ? '✅' : '⬜'} Baseline Features
          </button>
          <button 
            onClick={() => setShowExperimental(!showExperimental)}
            className={showExperimental ? 'active' : ''}
          >
            {showExperimental ? '⚠️' : '⬜'} Experimental Features
          </button>
        </div>
      </header>

      <main className="App-main">
        {showBaseline && <BaselineFeatures />}
        {showExperimental && <ExperimentalFeatures />}
        
        <div className="instructions">
          <h3>🚀 Try Baseline Gardener</h3>
          <p>Run these commands to check this React app:</p>
          <code>npm run baseline:check</code>
          <code>npm run baseline:check:strict</code> 
          <code>npm run baseline:report</code>
        </div>
      </main>
    </div>
  );
}

export default App;
