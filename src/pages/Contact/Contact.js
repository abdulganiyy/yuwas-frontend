import React from 'react'
import Hero from '../../components/Hero/Hero';

import Pin from '../../assets/pin.png';
import Telephone from '../../assets/telephone.png';
import Airplane from '../../assets/airplane.png';
import Earth from '../../assets/earth-globe.png'

import './Contact.css'

const Contact = () => {
    return (
        <div>
            <Hero label='Contact' /> 
            <div className="contact-wrapper">
                <div className="contact">
                    <h3>Contact Us</h3>
                    <form className="contact-form">
                      <div className="contact-form-group">
                          <div>
                          <label >FULL NAME</label>
                          <input type="text" placeholder='Name' className="contact-form-input" />
                          </div>
                          <div>
                          <label >EMAIL ADDRESS</label>
                          <input type="text" placeholder='Email' className="contact-form-input" />
                          </div>
                      </div>
                      <div className="contact-form-group">
                      <label >SUBJECT</label>
                          <input type="text" placeholder='Subject' className="contact-form-input" />
                      </div>
                      <div className="contact-form-group">
                          <label >MESSAGE</label>
                          <textarea type="text" placeholder='Message' className="contact-form-textarea" /> 
                      </div>
                      <div className="contact-form-group">
                          <button className="contact-form-button">Send Message</button>
                      </div>
                    </form>
                </div>
                <div className="map-container">hello</div>
            </div>
            <div className="contact-details-grid">
              <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <img alt='pin' src={Pin}/>
                  </div>
                  <p>Address: Plot 4 Tanke, Ilorin, Kwara State</p>
              </div>
              <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <img alt='pin' src={Telephone}/>
                  </div>
                  <p>Address: Plot 4 Tanke, Ilorin, Kwara State</p>
              </div>
              <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <img alt='pin' src={Airplane}/>
                  </div>
                  <p>Address: Plot 4 Tanke, Ilorin, Kwara State</p>
              </div>
              <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <img alt='pin' src={Earth}/>
                  </div>
                  <p>Address: Plot 4 Tanke, Ilorin, Kwara State</p>
              </div>
            </div>
        </div>
    )
}

export default Contact
