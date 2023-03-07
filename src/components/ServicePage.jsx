import React from 'react';
import './ServicePage.css';
import './FeedbackPage'
import FeedbackPage from './FeedbackPage';
import Footer from './Footer';
function ServicePage() {
  return (
    <div className="service-page">
      <div className='z1'>
        <h1 className='h1_tag'>Our Services</h1>
        <div className="service-list">
          <div className="service-item">
            <h2 className='h2_tag1'>Web Design</h2>
            <p className='p_block1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="service-item">
            <h2 className='h2_tag1'>Graphic Design</h2>
            <p className='p_block1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="service-item">
            <h2 className='h2_tag1'>Mobile App Development</h2>
            <p className='p_block1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>
      <div className='feedback_page'><FeedbackPage /></div>
     <Footer /> 
    </div>
  );
}

export default ServicePage;