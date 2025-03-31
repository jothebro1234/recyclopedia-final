import React, { useState } from 'react';
import logo1 from '../assets/logo1.png';
import thinlogo from '../assets/sigh.png';
import ogbg from '../assets/ogbg.png';
import './Start.css';
import Map1 from './Map1';
import Calc from './Calc';
import Scanner from './Scanner';

function Start() {
  const [currentStep, setCurrentStep] = useState(1);
  const [demographics, setDemographics] = useState({});

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleDemographics = (data) => {
    setDemographics(data);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div style={{ textAlign: 'center', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Scanner />
          </div>
        );
      case 2:
        return <Calc onCalculateDemographics={handleDemographics} />;
      case 3:
        return (
          <div style={{ textAlign: 'center', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <h2 style={{ marginBottom: '30px', color: 'white', fontSize: '2.5rem' }}>Impact</h2>
            {Object.entries(demographics).length > 0 ? (
              <ul style={{ listStyleType: 'none', padding: 0, margin: 0, textAlign: 'left', width: '80%' }}>
                {Object.entries(demographics).map(([key, value]) => (
                  <li key={key} style={{ margin: '15px 0', fontSize: '1.6rem' }}>
                    <strong style={{ color: themeGreen }}>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
            ) : (
              <p style={{ fontSize: '1.6rem' }}>No impact data available. Please complete the calculator step first.</p>
            )}
          </div>
        );
      case 4:
        return (
          <div style={{ textAlign: 'center', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Map1 />
          </div>
        );
      default:
        return null;
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return "Image Scanner";
      case 2:
        return "Calculator";
      case 3:
        return "Impact";
      case 4:
        return "Geolocation";
    }
  };

  const themeGreen = '#2e8b57'; // Forest green that fits with the theme
  const darkThemeGreen = '#1a5733'; // Darker version for hover effects

  return (
    <div style={{
      backgroundImage: `url(${ogbg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      fontFamily: 'Montserrat, sans-serif',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <nav className="navbar navbar-expand-lg" style={{
        backgroundColor: 'rgba(0, 0, 0, 0.7)', 
        paddingTop: '30px', 
        paddingBottom: '30px', 
        paddingLeft: '20px', 
        alignItems: 'center'
      }} data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={thinlogo} alt="Logo" style={{height: '40px'}} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" style={{paddingRight: '50px', fontSize:'20px'}} href="/" >Home</a>
              <a className="nav-link" style={{paddingRight: '50px', fontSize:'20px'}} href="/video">Significance</a>
              <a className="nav-link" style={{paddingRight: '50px', fontSize:'20px'}} href="/start">Start</a>
              <a className="nav-link" style={{paddingRight: '50px', fontSize:'20px'}} href="/about">About Us</a>
            </div>
          </div>
        </div>
      </nav>

      
      <div style={{ position: 'relative', flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ position: 'absolute', left: '5%', fontSize: '3rem', fontWeight: 'bold', color: 'white' }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '8px', color: 'white' }}>
            {currentStep}/4
          </div>
          {getStepTitle()}
        </div>
        <div style={{ position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0, 0, 0, 0.7)', width: '65%', height: '90%', padding: '20px', borderRadius: '15px', color: 'white', overflow: 'auto' }}>
          {renderStepContent()}
        </div>
        <div style={{ position: 'absolute', left: '5%', top: 'calc(50% + 80px)', display: 'flex', gap: '15px' }}>
          <button 
            className="previous" 
            onClick={previousStep} 
            disabled={currentStep === 1} 
            style={{ 
              fontSize: '1.2rem', 
              padding: '15px 30px', 
              backgroundColor: currentStep === 1 ? 'gray' : themeGreen, 
              color: 'white', 
              border: 'none', 
              borderRadius: '10px',
              cursor: currentStep === 1 ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => { if (currentStep > 1) e.target.style.backgroundColor = darkThemeGreen; }}
            onMouseOut={(e) => { if (currentStep > 1) e.target.style.backgroundColor = themeGreen; }}
          >
            Previous
          </button>
          <button 
            className="next" 
            onClick={nextStep} 
            disabled={currentStep === 4} 
            style={{ 
              fontSize: '1.2rem', 
              padding: '15px 30px', 
              backgroundColor: currentStep === 4 ? 'gray' : themeGreen, 
              color: 'white', 
              border: 'none', 
              borderRadius: '10px',
              cursor: currentStep === 4 ? 'not-allowed' : 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseOver={(e) => { if (currentStep < 4) e.target.style.backgroundColor = darkThemeGreen; }}
            onMouseOut={(e) => { if (currentStep < 4) e.target.style.backgroundColor = themeGreen; }}
          >
            Next
          </button>
        </div>
      </div>
      
    </div>
  );
}

export default Start;