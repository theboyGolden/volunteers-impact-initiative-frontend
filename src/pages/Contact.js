import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import phone from '../Assets/phone.png';
import location from '../Assets/location.png';
import email from '../Assets/email.png';
import facebook from '../Assets/facebook.png';
import twitter from '../Assets/twitter.png';
import instagram from '../Assets/instagram.png';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('VII_smtp_service', 'template_c2600rb', form.current, 'EZkIjgNdwq8cuEOym')
      .then(
        () => {
          setResponseMessage('Your message has been sent!');
          e.target.reset(); // Reset form fields
        },
        (error) => {
          console.error('EmailJS error:', error.text);
          setResponseMessage('There was an error sending your message.');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className='maincontactpagecontainer'>
      <div className='heroSection'>
        Contact Us
      </div>
      <div className='contactfirstdiv'>
        <br /> <br />
        <div className='gridbox'>
          <div className='phonebox'>
            <div className='imgdiv'><img src={phone} alt='Phone icon' className='contacticon' /></div><br />Phone
            <div className='contactdetails'><br />+233(0)24-712-5235</div>
            <div className='contactdetails'>+233(0)20-122-1507</div>
          </div>
          <div className='officebox'>
            <div className='imgdiv'><img src={location} alt='Location icon' className='contacticon' /></div><br />Location
            <br />
            <div className='contactdetails'><br />Opintinse Street, Kotobabi, Accra Ghana</div>
          </div>
          <div className='mailbox'>
            <div className='imgdiv'><img src={email} alt='Email icon' className='contacticon' /></div><br />Email
            <br />
            <div className='contactdetails'><br />gettydenkyi@volunteersimpactinitiative.org</div>
          </div>
        </div>
        <br /> <br />
      </div>

      <div className='socialmediacontainer'>
        <div className='socialmedia'>
          <a href='https://www.facebook.com/VolunteersImpactInitiative/'><div className='socialmediagridbox'><img src={facebook} alt='Facebook' className='socialicon' /></div></a>
          <a href='https://www.twitter.com'><div className='socialmediagridbox'><img src={twitter} alt='Twitter' className='socialicon' /></div></a>
          <a href='https://www.instagram.com'><div className='socialmediagridbox'><img src={instagram} alt='Instagram' className='socialicon' /></div></a>
        </div>
        <div style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 20, fontFamily: 'Arial' }}><br />Connect With Us Using Our Social Media Handles</div>
        <div style={{ fontSize: 28, fontWeight: 'bold', fontFamily: 'Arial' }}>And Take A Look At Productive Endeavours</div>
      </div>

      <div className='contact-form-div'>
        <div className="contact-page">
          <h2 className="contact-title">Contact Us</h2>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="user_name">Name</label>
                <input
                  type="text"
                  id="user_name"
                  name="name"
                  placeholder="Enter your Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="user_email">Email</label>
                <input
                  type="email"
                  id="user_email"
                  name="email"
                  placeholder="Enter a valid email address"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                required
              />
            </div>
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'SUBMIT'}
            </button>
          </form>
          {responseMessage && <p>{responseMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
