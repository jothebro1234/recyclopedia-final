import React from 'react';
import thinlogo from '../assets/sigh.png';
import ogbg from '../assets/ogbg.png';
import person1 from '../assets/59.png'; 
import person2 from '../assets/67.png'; 
import './About.css';

function About() {
  return (
    <div style={{ 
      backgroundImage: `url(${ogbg})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      minHeight: '100vh', 
      fontFamily: 'Montserrat, sans-serif'
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
            <img src={thinlogo} alt="Logo" style={{ height: '40px' }} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link" style={{ paddingRight: '50px', fontSize: '20px' }} href="/">Home</a>
              <a className="nav-link" style={{ paddingRight: '50px', fontSize: '20px' }} href="/video">Significance</a>
              <a className="nav-link" style={{ paddingRight: '50px', fontSize: '20px' }} href="/start">Start</a>
              <a className="nav-link active" style={{ paddingRight: '50px', fontSize: '20px' }} href="/about">About Us</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="about-container" style={{
        display: 'flex', 
        justifyContent: 'center', 
        gap: '40px', 
        padding: '30px', 
        flexWrap: 'wrap', 
        marginTop: '70px',
      }}>
        <div className="person-box" style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)', 
          color: 'white', 
          borderRadius: '15px', 
          width: '650px', 
          height: '600px', 
          overflow: 'hidden', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          padding: '25px', 
          boxShadow: '0 6px 15px rgba(0, 0, 0, 0.6)',
        }}>
          <img src={person1} alt="Person 1" style={{
            width: '300px', 
            height: '300px', 
            objectFit: 'cover', 
            borderRadius: '50%', 
            marginBottom: '20px',
          }} />
          <div className="person-info" style={{ textAlign: 'center' }}>
            <h2 style={{ margin: '0' }}>Person 1</h2>
            <p style={{ fontSize: '16px', lineHeight: '1.5' }}>Jeongseop (Joseph) Yoon, a freshman at Whitney High School (CA45), is passionate about robotics, AI, and technology. He hones his skills through competitions like the First Tech Challenge and the Congressional App Challenge while developing leadership in the Civil Air Patrol AirForce Program. A national-level writer, he enjoys exploring contemporary tech and giving back by teaching and managing programs for local schools.
  <p></p>
Contact: Josephyoon25@gmail.com | 562-547-1759 </p>
          </div>
        </div>

        <div className="person-box" style={{
          backgroundColor: 'rgba(0, 0, 0, 0.7)', 
          color: 'white', 
          borderRadius: '15px', 
          width: '650px', 
          height: '600px', 
          overflow: 'hidden', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          padding: '25px', 
          boxShadow: '0 6px 15px rgba(0, 0, 0, 0.6)',
        }}>
          <img src={person2} alt="Person 2" style={{
            width: '300px', 
            height: '300px', 
            objectFit: 'cover', 
            borderRadius: '50%', 
            marginBottom: '20px',
          }} />


          <div className="person-info" style={{ textAlign: 'center' }}>
            <h2 style={{ margin: '0' }}>Person 2</h2>
            <p style={{ fontSize: '16px', lineHeight: '1.5' }}>Niranjan Janardhanan is a freshman at Whitney High School in Cerritos, California. He is passionate about computer science and has experience in software development, but is currently interested in cybersecurity and AI.

Niranjan loves participating in competitions like First Tech Challenge, CyberPatriot, and Congressional App Challenge and giving back to the community by volunteering at robotics summer camps and tutoring students in math.
          
Contact:
njanardhanan28@gmail.com
424-449-6936</p>
          </div>



        </div>
      </div>

      <footer style={{ 
        position: 'fixed', 
        bottom: '10px', 
        left: '50%', 
        transform: 'translateX(-50%)', 
        color: 'white', 
        fontSize: '14px',
        textAlign: 'center',
      }}>
    
      </footer>
    </div>
  );
}

export default About;
