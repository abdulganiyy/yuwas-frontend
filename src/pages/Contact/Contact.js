import React,{useState,useRef,useEffect} from 'react';
import Hero from '../../components/Hero/Hero';

import Pin from '../../assets/pin.png';
import Telephone from '../../assets/telephone.png';
import Airplane from '../../assets/airplane.png';
import Earth from '../../assets/earth-globe.png';

import './Contact.css'


import mapboxgl from "mapbox-gl";



 
mapboxgl.accessToken = 'pk.eyJ1IjoiYWJkdWxnYW5peXkiLCJhIjoiY2tyNTRueWRlMzF5ODJ3bzZsYnNxajM2eCJ9.3F-b2a-8BsLEoTJCFb_wFg';


const Contact = () => {

    

    const mapContainer = useRef(null);
const map = useRef(null);
const [lng, setLng] = useState(3.342989);
const [lat, setLat] = useState( 6.639109);
const [zoom, setZoom] = useState(9);


useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [lng, lat],
    zoom: zoom
    });
    });


    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
        setLng(map.current.getCenter().lng.toFixed(4));
        setLat(map.current.getCenter().lat.toFixed(4));
        setZoom(map.current.getZoom().toFixed(2));
        });
        });
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
                <div ref={mapContainer} className="map-container"></div>
            </div>
            <div className="contact-details-grid">
              <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <img alt='pin' src={Pin}/>
                  </div>
                  <p>Lagos Branch:2,Adeniyi Adeleye Street,Ejigbo, Lagos</p>
                  <p>Ilorin Branch:Along Oke Ose, Ile Apa Road,Sabo Ilorin, Kwara State</p>
                  <p>Kano Branch,10 Bagudu Kebbi Lane,Daurawa Qtrs, Kano</p>

              </div>
              <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <img alt='phone' src={Telephone}/>
                  </div>
                  <p>Phone: +234 815 922 9220, +234 803 964 1194</p>
              </div>
              <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <img alt='mail' src={Airplane}/>
                  </div>
                  <p>Email: yuswas@yahoo.com, yuswasinvestmentsltd@gmail.com</p>
              </div>
              <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <img alt='website' src={Earth}/>
                  </div>
                  <p>Website: www.yuswas.com</p>
              </div>
            </div>
        </div>
    )
}

export default Contact
