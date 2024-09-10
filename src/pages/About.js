import React from 'react';
import './About.css'; // Import the corresponding CSS file
import { FaBook, FaChild, FaSeedling, FaHospital } from 'react-icons/fa';
import Getrude from '../Assets/Getrude.jpg'

// MissionCard Component
const icons = {
  teaching: <FaBook />,
  disabilities: <FaChild />,
  agriculture: <FaSeedling />,
  medical: <FaHospital />
};

const MissionCard = ({ title, description, icon }) => (
  <div className="mission-card">
    <div className="card-icon">
      {icons[icon]}
    </div>
    <div className="card-content">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  </div>
);

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Empowering Communities, One Step at a Time</h1>
          <p className="hero-subtitle">
            Dedicated to transforming lives through education, health, and volunteer support.
          </p>
          <a href="/VolunteerNow" className="hero-button">
            Join Our Mission
          </a>
        </div>
      </section>

      <div className="container">
      <div className="card mission-carddd">
        <h2 className="card-title">
          <span className="card-title-text">MISSION</span>
        </h2>
        <p className="card-text">
          Our mission is to work with volunteers around the world to assist
          less privileged rural communities and orphanages in Ghana with
          solution oriented project that will enable rural communities improve
          their lives.
        </p>
      </div>
      <div className="card goal-card">
        <h2 className="card-title">
          <span className="card-title-text">GOAL</span>
        </h2>
        <p className="card-text">
          VII is an NGO which is based in Ghana with the aim to improve the
          lives of people at less privileged rural communities through better
          education, health and support to orphanages.
        </p>
      </div>
      <div className="card objectives-card">
        <h2 className="card-title">
          <span className="card-title-text">OBJECTIVES</span>
        </h2>
        <ul className="card-list">
          <li>
            Objectives are linked to the sustainable development goals.
          </li>
          <li>
            Create enriching opportunities for deprived individuals and
            communities
          </li>
        </ul>
      </div>
    </div>

      {/* Mission Section */}
        <h3 className="mission-subheading">Programmes</h3>
      <section className="mission-section">
        <div className="mission-cards">
          <MissionCard
            title="Teaching"
            description="Educating and improving the literacy level of less privileged community schools in the Central region of Ghana."
            icon="teaching"
          />
          <MissionCard
            title="Working with children with disabilities"
            description="Making a great impact in the lives of children and young adults who are deaf and mentally challenged by working and teaching at Miphibosheth orphanage in the Central region of Ghana."
            icon="disabilities"
          />
          <MissionCard
            title="Agriculture"
            description="Passionate about poultry and rabbit farming? Make a lasting impact by volunteering with the Mephibosheth orphanage in the Central region to raise more poultry, sell to rural communities, and help them make a living."
            icon="agriculture"
          />
          <MissionCard
            title="Medical Support"
            description="Volunteer Impact Initiative offers opportunities for medical students to have internships and volunteer at rural hospitals in the Central region of Ghana."
            icon="medical"
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="team-container">
          <div className="team-text">
            <h2 className="team-title">Meet Our Founder</h2>
            <p className="team-description">
              Getrude Nana Adjoa Denkyi has over nine years of experience in the nonprofit sector and earned a Master's in Development Studies from the University of Ghana. 
              Previously, Getrude worked with Campaign for Female Education (CAMFED) as an Administrative Assistant and also volunteered for two Non-Governmental organizations called Solutions for Life Initiative Ghana and Street Library Ghana. She was responsible for organizing empowerment and mentorship programs for about 500 young ladies at various rural communities in Ghana, making presentations on a self-development manual designed to build the mental, literacy, psychological, and self-esteem of less privileged young people during club activities in their various schools and communities. These activities have enhanced Getrude’s leadership skills.
              Besides all these activities, Getrude is passionate about mentoring and empowering young ladies. She has set up a "Change Makers Ambassadors Club", which provides psychological, emotional, and financial support to young ladies in the junior high schools and her community. So far, over ninety percent of those in the junior high school have gained admission into the senior high school.
            </p>
          </div>
          <div className="team-image">
            <img src={Getrude} alt="Team at Work" />
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <h2 className="impact-title">Our Impact</h2>
        <p className="impact-stats">500+ Children Educated | 100+ Healthcare Initiatives | 200+ Volunteers</p>
        <blockquote className="testimonial">
          "Volunteering with the initiative changed my life and gave me purpose." – Volunteer
        </blockquote>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2 className="cta-title">Ready to Make a Difference?</h2>
        <a href="/VolunteerNow" className="cta-button">
          Join Us Now
        </a>
      </section>
    </div>
  );
};

export default AboutPage;
