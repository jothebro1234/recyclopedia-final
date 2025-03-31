import React from 'react';
import logo1 from '../assets/logo1.png';
import thinlogo from '../assets/sigh.png';
import ogbg from '../assets/ogbg.png';
import './Home.css';
import goofy from '../assets/goofy.png';

function Home() {
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
            <img src={thinlogo} alt="Logo" style={{height: '4vh'}} />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" style={{paddingRight: '50px', fontSize:'1.5rem'}} href="/" >Home</a>
              <a className="nav-link" style={{paddingRight: '50px', fontSize:'1.5rem'}} href="/video">Significance</a>
              <a className="nav-link" style={{paddingRight: '50px', fontSize:'1.5rem'}} href="/start">Start</a>
              <a className="nav-link" style={{paddingRight: '50px', fontSize:'1.5rem'}} href="/about">About Us</a>
            </div>
          </div>
        </div>
      </nav>

      <div className='home-container'>
        <div className="landing-text" style={{
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          fontSize: '4rem', 
          color: 'white',
        }}>
          Recycle Now?
        </div>

        <button className="button-57" role="button" onClick={() => window.location.href='/video'}>
          <span className="text">Start</span>
          <span>Yes</span>
        </button>
      </div>
      
      {/* First section - Left aligned text with right aligned image */}
      <div className='section-left' style={{ 
        marginTop: '10vh', 
        paddingTop: '200px',
        paddingBottom: '200px',
        paddingLeft: '100px',
        paddingRight: '100px',
        backgroundColor: 'rgba(0, 0, 0, 0.56)', 
        color: 'white',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ textAlign: 'left', maxWidth: '900px' }}>
          <h2 style={{ fontSize: '42px', marginBottom: '25px' }}>About Recyclopedia</h2>
          <p style={{ fontSize: '20px' , paddingRight:'50px'}}>
            Recyclopedia was made by Jeongseop (Joseph) Yoon and Niranjan J. in order to assist people in recycling.
            It is a web application that helps users identify recyclable materials and provides information on how to recycle them properly. For many of those who don't know where to start, Recyclopedia is the place to start as it will provide guiding steps in effectively recycling for the benefit of both themselves and Earth.
          </p>
        </div>
        <img 
          src={goofy} 
          alt="Recyclopedia Logo" 
          style={{ 
            
            maxWidth: '800px', 
            height: '250px', 
            borderRadius: "15px",
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' 
          }} 
        />
      </div>
          
      {/* Second section with centered steps text */}
      <div className='section-right' style={{ 
        marginTop: '40px',
        backgroundColor: 'rgba(0, 0, 0, 0.56)', 
        color: 'white',
        paddingTop: '100px',
        paddingBottom: '100px',
        paddingLeft: '50px',
        paddingRight: '50px'
      }}>
        <div style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '42px', marginBottom: '25px' }}>How to Use Recyclopedia</h2>
          <p style={{ fontSize: '1.5rem' }}>
            Newcomers to Recyclopedia are recommended to head to the "Significance" tab to view a quick video on the importance of recycling.
            After that, users can head to the "Start" tab to begin the process of recycling.
          </p>
          
          <div style={{ textAlign: 'center', margin: '30px 0' }}>
            <h1 style={{ fontSize: '2rem' }}></h1>
          </div>
          
          <div style={{ textAlign: 'center', margin: '30px 0' }}>
            <h1 style={{ fontSize: '2rem' }}>Step 1</h1>
            <p style={{ fontSize: '1.5rem' }}>
              This is the image scanner page. Users will be prompted to upload a photo of any material they wish to reycle to ensure that it is recyclable. Powered by Gemini AI, our image scanner page can be utilized to check if the item is recyclable or not.
            </p>
          </div>
          
          <div style={{ textAlign: 'center', margin: '30px 0' }}>
            <h1 style={{ fontSize: '2rem' }}></h1>
          </div>
          
          <div style={{ textAlign: 'center', margin: '30px 0' }}>
            <h1 style={{ fontSize: '2rem' }}>Step 2</h1>
            <p style={{ fontSize: '1.5rem' }}>This is the calculator page of the website. Users can input how many of each recyclable material (plastic bottles, aluminum cans, or glass bottles.) It will calculate the potential estimate monetary return based on CRV (California Redemption Value Program) amounts.</p>
          </div>
          
          <div style={{ textAlign: 'center', margin: '30px 0' }}>
            <h1 style={{ fontSize: '2rem' }}>Step 3</h1>
            <p style={{ fontSize: '1.5rem' }}>Step 3 is a page that displays the potential enviornmental impacts by the user.</p>
          </div>

          <div style={{ textAlign: 'center', margin: '30px 0' }}>
            <h1 style={{ fontSize: '2rem' }}>Step 4</h1>
            <p style={{ fontSize: '1.5rem' }}>Step 4 is a "take action" page where the user is provided with nearby recycle centers based on their current location. The red markers show where each nearby recycle center is, and the user can get direct directions by clicking on the markers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;