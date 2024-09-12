import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faUser, faBriefcase, faGlobe, faHeart, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faUserMd, faStethoscope, faSyringe, faPlane, faPassport, faHouseUser } from '@fortawesome/free-solid-svg-icons';
import './VolunteerNow.css';

const VolunteerNow = () => {
  const form = useRef();
  const [responseMessage, setResponseMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm('VII_smtp_service', 'template_xbjollk', form.current, 'EZkIjgNdwq8cuEOym')
      .then(
        () => {
          setResponseMessage('Your application has been submitted successfully!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setResponseMessage('There was an error submitting your application. Please try again.');
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div>
      <div className='volunteernowimgdiv'>
        <div className='becomeavolunteertext'>
          <h1 className="application-title">Become a Volunteer</h1>
        </div>
      </div>
      <div className="volunteer-form-container">
        <h2>Become a Volunteer</h2>
        <form ref={form} onSubmit={sendEmail}>
          
          <input type="text" name="name" placeholder="Name" required />

          
          <input type="text" name="phone number" placeholder="Phone Number" required />

          
          <input type="email" name="email" placeholder="Email" required />

          <input type="text" name="country of residence" placeholder="Country of Residence" />

          
          <input type="text" name="occupation" placeholder="Occupation" />

          
          <select name="Area of Interest" required>
            <option value="">Select Area of Interest</option>
            <option value="Farming">Farming</option>
            <option value="Teaching">Teaching</option>
            <option value="Health">Health</option>
            <option value="Microfinance">Microfinance</option>
          </select>

          
          <textarea name="Additional Information" placeholder="Any additional information" />

          <button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : 'SUBMIT'}</button>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
      </div>
      <div className="volunteer-page">
        <section className="volunteer-details">
          <h1>Ghana Medical Volunteers</h1>
          <p>Volunteers Impact Initiative offers internship and volunteerism in the medical field to students studying medicine and professionals.</p>
          <p>
            <FontAwesomeIcon icon={faInfoCircle} /> Access to medical care is low in Ghana especially in rural areas, hence the need for volunteers to bring their skills to help improve lives.
          </p>
          
          <h2>Volunteer Opportunities</h2>
          <ul className="volunteer-opportunities">
            <li><FontAwesomeIcon icon={faUserMd} /> Provide medical support to people in rural Ghana</li>
            <li><FontAwesomeIcon icon={faStethoscope} /> Gain great medical experience and share your experience while helping others</li>
            <li><FontAwesomeIcon icon={faHouseUser} /> Spend your stay in Ghana with a wonderful host family</li>
          </ul>

          <h2>How Volunteers Can Help</h2>
          <ul className="help-list">
            <li><FontAwesomeIcon icon={faSyringe} /> Providing post and ante natal care</li>
            <li><FontAwesomeIcon icon={faStethoscope} /> Educating patients</li>
            <li><FontAwesomeIcon icon={faUserMd} /> Recording patient attendance</li>
            <li><FontAwesomeIcon icon={faSyringe} /> Pharmacology</li>
            <li><FontAwesomeIcon icon={faUserMd} /> Assisting in delivery</li>
            <li><FontAwesomeIcon icon={faStethoscope} /> Patient examination</li>
            <li><FontAwesomeIcon icon={faSyringe} /> Checking temperature</li>
          </ul>

          <h2>Requirements for Medical Volunteers and Interns</h2>
          <ul className="requirements">
            <li>Not less than 18 years old</li>
            <li>Ability to work in a multicultural environment</li>
            <li>Good spoken and written English</li>
            <li>Ability to adjust to working conditions</li>
            <li>Good communication skills</li>
            <li>Team player</li>
          </ul>

          <h2>Health and Safety</h2>
          <p>Ghana is known for its peace and stability. Our team provides 24/7 support for your health and safety during your stay.</p>

          <h2>Visa Requirements</h2>
          <ul className="visa-info">
            <li><FontAwesomeIcon icon={faPassport} /> A passport and a visa are required with at least six months validity.</li>
            <li>Volunteers should obtain a Volunteer Visa for travel to Ghana.</li>
            <li>Vaccinations recommended: Hepatitis A and B, Polio, Yellow fever, Typhoid, Antimalarial drugs.</li>
          </ul>

          <h2>Fees</h2>
          <table className="fees-table">
            <thead>
              <tr>
                <th>Length of Stay</th>
                <th>Amount (Euros)</th>
                <th>Amount (GBP)</th>
                <th>Amount (USD)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1 Week</td>
                <td>€320</td>
                <td>£350</td>
                <td>$400</td>
              </tr>
              <tr>
                <td>2 Weeks</td>
                <td>€420</td>
                <td>£427</td>
                <td>$585</td>
              </tr>
              <tr>
                <td>3 Weeks</td>
                <td>€520</td>
                <td>£534</td>
                <td>$695</td>
              </tr>
              <tr>
                <td>4 Weeks (1 Month)</td>
                <td>€620</td>
                <td>£621</td>
                <td>$805</td>
              </tr>
              <tr>
                <td>5 Weeks </td>
                <td>€720</td>
                <td>£708</td>
                <td>$915</td>
              </tr>
              <tr>
                <td>6 Weeks </td>
                <td>€920</td>
                <td>£795</td>
                <td>$1025</td>
              </tr>
              <tr>
                <td>8 Weeks </td>
                <td>€1100</td>
                <td>£949</td>
                <td>$1225</td>
              </tr>
              <tr>
                <td>3 Months </td>
                <td>€1520</td>
                <td>£1275</td>
                <td>$1700</td>
              </tr>
              <tr>
                <td>4 Months </td>
                <td>€1920</td>
                <td>£1610</td>
                <td>$2145</td>
              </tr>
              <tr>
                <td>5 Months </td>
                <td>€2240</td>
                <td>£1880</td>
                <td>$2505</td>
              </tr>
              <tr>
                <td>6 Months </td>
                <td>€2380</td>
                <td>£2000</td>
                <td>$2680</td>
              </tr>
            </tbody>
          </table>

          <p>Note: All programs attract a Registration Fee of €130 / £100 / $150 on top of the Program Fee.</p>

          <h2>What's Included</h2>
          <ul className="included-info">
            <li>Accommodation and daily meals</li>
            <li>Airport pick-up and drop-off</li>
            <li>In-country support</li>
            <li>Local orientation and training</li>
            <li>24/7 emergency support</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default VolunteerNow;
