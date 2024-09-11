import {React, useState } from 'react'
import './Contact.css'
import phone from '../Assets/phone.png'
import location from '../Assets/location.png'
import email from '../Assets/email.png'
import facebook from '../Assets/facebook.png'
import twitter from '../Assets/twitter.png'
import instagram from '../Assets/instagram.png'

const Contact = () => {
// begining of changes made to the website (contact form)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('volunteers-impact-initiative-backend-deployed.vercel.app/contact', {// URL to interact with backend
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setResponseMessage('Your message has been sent!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setResponseMessage('There was an error sending your message.');
            }
        } catch (error) {
            console.error('Error:', error);
            setResponseMessage('There was an error sending your message.');
        } finally {
            setIsSubmitting(false);
        }
    };
  //end of changes

  return (
    <div className='maincontactpagecontainer'>
      <div className='heroSection'>
        Contact Us
      </div>
      <div className='contactfirstdiv'>
        <br/> <br/>
        <div className='gridbox'>
            <div className='phonebox'><div className='imgdiv'><img src={phone} alt='' className='contacticon'/></div><br/>Phone <div className='contactdetails'><br/>+233(0)24-712-5235</div> <div className='contactdetails'>+233(0)20-122-1507</div></div>
            <div className='officebox'><div className='imgdiv'><img src={location} alt='' className='contacticon'/></div><br/>Location<br/><div className='contactdetails'><br/>Opintinse Street, Kotobabi, Accra Ghana</div></div>
            <div className='mailbox'><div className='imgdiv'><img src={email} alt='' className='contacticon'/></div><br/>Email<br/><div className='contactdetails'><br/>gettydenkyi@gmail.com</div></div>
        </div>
        <br/> <br/>
      </div>

      <div className='socialmediacontainer'>
        <div className='socialmedia'>
          <a href='https://www.facebook.com/VolunteersImpactInitiative/'><div className='socialmediagridbox'><img src={facebook} alt='' className='socialicon'/></div></a>
          <a href='www.twitter.com'><div className='socialmediagridbox'><img src={twitter} alt='' className='socialicon'/></div></a>
          <a href='www.instagram.com'><div className='socialmediagridbox'><img src={instagram} alt='' className='socialicon'/></div></a>
        </div>
        <div style={{fontSize:28, fontWeight:'bold', marginBottom:20, fontFamily:'Arial'}}><br/>Connect With Us Using Our Social Media Handles</div>
        <div style={{fontSize:28, fontWeight:'bold', fontFamily: 'Arial',}}>And Take A Look At Productive Endeavours</div>
      </div>

      

      <div className='contact-form-div'>
            <div className="contact-page">
                <h2 className="contact-title">Contact Us</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" placeholder="Enter your Name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter a valid email address" value={formData.email} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Enter your message" value={formData.message} onChange={handleChange} required />
                    </div>
                    <button type="submit" className="submit-button" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'SUBMIT'}
                    </button>
                </form>
                {responseMessage && <p>{responseMessage}</p>}
            </div>
        </div>


    </div>
  )
}

export default Contact