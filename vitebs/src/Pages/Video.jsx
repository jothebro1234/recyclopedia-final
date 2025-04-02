//Credits: This website is programmed by Jeongseop Yoon for the Congressional App Challenge
import React from 'react'
import logo1 from '../assets/logo1.png'
import thinlogo from '../assets/sigh.png'
import ogbg from '../assets/ogbg.png'
import video1 from '../assets/ahvideo.mp4'
import { Link } from 'react-router-dom'

function Video() {
  return (
    <div style={{ 
      backgroundImage: `url(${ogbg})`,
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height: '100vh', 
      fontFamily: 'Montserrat, sans-serif', 
      position: 'relative'
    }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: '62px',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: '80%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '20px',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '20px',
      }}>
        <video 
          src={video1} 
          autoPlay 
          loop
          style={{
            width: '100%',
            height: '80%',
            borderRadius: '10px',
            objectFit: 'cover',
          }} 
        />
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          zIndex: 2,
          pointerEvents: 'none',
        }} />
        <p style={{
          color: 'white',
          fontSize: '12px',
          textAlign: 'center',
          marginTop: '20px',
          padding: '0 20px',
        }}>
          Recycling isn't just a choice—it’s a responsibility! 🌍♻️ Every bottle, can, and piece of paper we recycle helps reduce waste, conserve natural resources, and protect our planet for future generations. Small actions, like sorting your recyclables and reusing materials, make a huge impact in reducing pollution and saving energy. Let’s work together to keep our environment clean and sustainable. Start today—because every effort counts! 💚✨
        </p>

      </div>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', paddingTop: '30px', paddingBottom: '30px', paddingLeft: '20px', alignItems: 'center'}} data-bs-theme="dark">
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
              <a className="nav-link active" style={{ paddingRight: '50px', fontSize: '20px' }} href="/video">Significance</a>
              <a className="nav-link" style={{ paddingRight: '50px', fontSize: '20px' }} href="/start">Start</a>
              <a className="nav-link" style={{ paddingRight: '50px', fontSize: '20px' }} href="/about">About Us</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Video
