import React, { useState, useRef } from 'react';
import './ExperimentalFeatures.css';

// Component showcasing NON-BASELINE features (should trigger warnings/errors)
export const ExperimentalFeatures: React.FC = () => {
  const [bluetoothDevice, setBluetoothDevice] = useState<any>(null);
  const [fileHandle, setFileHandle] = useState<any>(null);

  // Web Bluetooth API (Limited Availability - not baseline)
  const connectBluetooth = async () => {
    try {
      if ('bluetooth' in navigator) {
        const device = await (navigator as any).bluetooth.requestDevice({
          filters: [{ services: ['battery_service'] }]
        });
        setBluetoothDevice(device);
        console.log('Bluetooth device connected:', device.name);
      } else {
        alert('Web Bluetooth not supported');
      }
    } catch (error) {
      console.error('Bluetooth connection failed:', error);
    }
  };

  // File System Access API (Limited Availability - not baseline)
  const openFileDialog = async () => {
    try {
      if ('showOpenFilePicker' in window) {
        const fileHandles = await (window as any).showOpenFilePicker();
        setFileHandle(fileHandles[0]);
        const file = await fileHandles[0].getFile();
        console.log('File opened:', file.name);
      } else {
        alert('File System Access API not supported');
      }
    } catch (error) {
      console.error('File picker failed:', error);
    }
  };

  // WebUSB API (Limited Availability - not baseline)
  const connectUSB = async () => {
    try {
      if ('usb' in navigator) {
        const device = await (navigator as any).usb.requestDevice({ filters: [] });
        console.log('USB device connected:', device);
      } else {
        alert('WebUSB not supported');
      }
    } catch (error) {
      console.error('USB connection failed:', error);
    }
  };

  // Wake Lock API (Limited Availability - not baseline) 
  const preventSleep = async () => {
    try {
      if ('wakeLock' in navigator) {
        const wakeLock = await (navigator as any).wakeLock.request('screen');
        console.log('Wake lock acquired');
        
        wakeLock.addEventListener('release', () => {
          console.log('Wake lock released');
        });
      } else {
        alert('Wake Lock API not supported');
      }
    } catch (error) {
      console.error('Wake lock failed:', error);
    }
  };

  // WebGPU (Limited Availability - not baseline)
  const initWebGPU = async () => {
    try {
      if ('gpu' in navigator) {
        const adapter = await (navigator as any).gpu.requestAdapter();
        if (adapter) {
          const device = await adapter.requestDevice();
          console.log('WebGPU initialized');
        }
      } else {
        alert('WebGPU not supported');
      }
    } catch (error) {
      console.error('WebGPU initialization failed:', error);
    }
  };

  return (
    <div className="experimental-features">
      <h2>⚠️ Experimental Features (Not Baseline)</h2>
      <p className="warning">
        These features are not baseline compatible and may not work in all browsers!
      </p>

      {/* Container with experimental CSS */}
      <div className="container-query-demo">
        <div className="responsive-card">
          <h3>Container Queries Demo</h3>
          <p>This card uses container queries (not fully baseline yet)</p>
        </div>
      </div>

      {/* Buttons for experimental APIs */}
      <div className="button-grid">
        <button onClick={connectBluetooth} className="experimental-button">
          📱 Connect Bluetooth
        </button>
        
        <button onClick={openFileDialog} className="experimental-button">
          📁 Open File (File System API)
        </button>
        
        <button onClick={connectUSB} className="experimental-button">
          🔌 Connect USB
        </button>
        
        <button onClick={preventSleep} className="experimental-button">
          ☀️ Prevent Sleep (Wake Lock)
        </button>
        
        <button onClick={initWebGPU} className="experimental-button">
          🎮 Initialize WebGPU
        </button>
      </div>

      {/* Status display */}
      <div className="status-display">
        <div className="status-item">
          <strong>Bluetooth Device:</strong> {bluetoothDevice ? bluetoothDevice.name : 'None'}
        </div>
        <div className="status-item">
          <strong>File Handle:</strong> {fileHandle ? 'File selected' : 'None'}
        </div>
      </div>

      {/* Web Components with experimental features */}
      <experimental-custom-element>
        <div slot="content">
          <p>This is a custom element using experimental features</p>
        </div>
      </experimental-custom-element>
    </div>
  );
};

// Custom Element with experimental features (Limited Availability)
class ExperimentalCustomElement extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    
    shadow.innerHTML = `
      <style>
        :host {
          display: block;
          container-type: inline-size;
          padding: 1rem;
          border: 2px dashed orange;
          border-radius: 8px;
          margin: 1rem 0;
        }
        
        .content {
          background: rgba(255, 165, 0, 0.1);
          padding: 1rem;
          backdrop-filter: blur(5px);
        }
        
        @container (min-width: 300px) {
          .content {
            display: flex;
            gap: 1rem;
          }
        }
      </style>
      <div class="content">
        <slot name="content"></slot>
      </div>
    `;
  }
}

// Register custom element (this will be detected by baseline-gardener)
if (!customElements.get('experimental-custom-element')) {
  customElements.define('experimental-custom-element', ExperimentalCustomElement);
}