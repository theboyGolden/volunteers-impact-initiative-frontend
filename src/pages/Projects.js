import React from 'react'
import './Projects.css'
import img1 from '../Assets/poultry.JPG'
import img2 from '../Assets/eggharvest.JPG'
import img3 from '../Assets/eggharvest1.JPG'
import img4 from '../Assets/henCoup.JPG'
import img5 from '../Assets/teachingImg1.jpg'
import img6 from '../Assets/teachingImg2.jpg'
import img7 from '../Assets/teachingImg3.png'
import img8 from '../Assets/teachingImg4.jpg'
import img9 from '../Assets/healthImg1.jpg'
import img10 from '../Assets/healthImg2.jpg'
import img11 from '../Assets/healthImg3.png'
import img12 from '../Assets/healthImg4.jpeg'
import img13 from '../Assets/microfinanceImg1.webp'
import img14 from '../Assets/microfinanceImg2.jpg'
import img15 from '../Assets/microfinanceImg3.jpg'
import img16 from '../Assets/microfinanceImg4.jpg'
import img17 from '../Assets/cropFarming.jpeg'
import img18 from '../Assets/cropFarmingimg.jpeg'


const Projects = () => {
  return (
    <div>
      <div className='farmingsection'>
      <h1>We have undertaken a lot of life changing projects</h1>
        <h2>1. Farming</h2>
        <div className='farmingflexbox'>
            <div className='farmingTextbox'>
              Volunteer Impact Initiative undertakes projects which focuses on plant (crop) and animal (poultry and rabbit) farming at the Mephibosheth Training Centre in the Central Region of Ghana. 
              The farm plays a crucial role in providing food for the residents of the training centre, which supports physically and mentally challenged children and adults. 
              Located in Gomoa Ankamu, the Mephibosheth Training Centre is dedicated to offering education, care, and opportunities for growth to individuals with disabilities.
              Volunteers are encouraged to bring their knowledge, experience, and skills in farming to contribute to the success of the project. 
              Creativity and initiative are also valued as key components in driving positive outcomes.
            </div>
            <div className='farmingImgGrid'>
              <img src={img1} alt='' className='farmingImg'/>
              <img src={img2} alt='' className='farmingImg'/>
              <img src={img3} alt='' className='farmingImg'/>
              <img src={img4} alt='' className='farmingImg'/>
              <img src={img17} alt='' className='farmingImg'/>
              <img src={img18} alt='' className='farmingImg'/>
            </div>
        </div>
      </div>
      <div className='teachingsection'>
        <h2>2. Teaching </h2>
        <div className='teachingflexbox'>
            <div className='teachingTextbox'>
              Volunteer Impact Initiative undertakes projects which focuses on providing educational support at local schools and community learning centers in Ghana. 
              Volunteers play a vital role in enhancing the quality of education by assisting with teaching, tutoring, and classroom management, particularly in under-resourced areas.
              The initiative aims to empower students by improving their literacy, numeracy, and critical thinking skills. Volunteers will work alongside local teachers to deliver engaging lessons, foster a love for learning, and provide individualized attention to students who need extra support.
              Creativity, patience, and adaptability are highly valued, as volunteers are encouraged to bring their unique teaching methods and perspectives to create a dynamic and inclusive learning environment. 
              Whether it’s teaching English, mathematics, or arts, your contribution will make a significant impact on the educational journey of these young learners.
            </div>
            <div className='teachingImgGrid'>
              <img src={img5} alt='' className='teachingImg'/>
              <img src={img6} alt='' className='teachingImg'/>
              <img src={img7} alt='' className='teachingImg'/>
              <img src={img8} alt='' className='teachingImg'/>
            </div>
        </div>
      <div className='healthsection'>
        <h2>3. Health </h2>
        <div className='healthflexbox'>
            <div className='healthTextbox'>
              Volunteer Impact Initiative undertakes projects which focuses on providing essential health services and support to underserved communities in Ghana, particularly in rural and remote areas where access to healthcare is limited. 
              Volunteers will collaborate with local health professionals at clinics, hospitals, and community health centers, contributing to a wide range of activities such as health education, basic medical care, and patient support.
              The initiative aims to improve overall community health through preventive care, health screenings, and education on hygiene and disease prevention. Volunteers with skills in nursing, medicine, public health, or even a passion for helping others are encouraged to participate.
              Compassion, adaptability, and a willingness to learn are key, as volunteers will be working in diverse and often challenging environments. Your involvement will not only provide crucial healthcare support but also help to build healthier and more resilient communities.
            </div>
            <div className='healthImgGrid'>
              <img src={img9} alt='' className='healthImg'/>
              <img src={img10} alt='' className='healthImg'/>
              <img src={img11} alt='' className='healthImg'/>
              <img src={img12} alt='' className='healthImg'/>
            </div>
        </div>
      </div>
      <div className='microfinancesection'>
        <h2>4. Microfinance </h2>
        <div className='microfinanceflexbox'>
            <div className='microfinanceTextbox'>
            This project is dedicated to empowering women through microfinance initiatives that provide small loans and financial education to women entrepreneurs in underserved communities across Ghana. 
            By offering access to capital and resources, the project aims to foster financial independence, improve living standards, and support the growth of small businesses run by women.
            Volunteers will work closely with local women to provide training in basic financial management, business planning, and savings strategies. The goal is to help these women develop sustainable businesses that can lift their families out of poverty and contribute to the economic development of their communities.
            Volunteers with skills in finance, business, education, or a passion for women's empowerment are encouraged to participate. Creativity, patience, and strong communication skills are highly valued, as volunteers will play a key role in guiding and inspiring these women to achieve their financial goals.
            </div>
            <div className='microfinanceImgGrid'>
              <img src={img13} alt='' className='microfinanceImg'/>
              <img src={img14} alt='' className='microfinanceImg'/>
              <img src={img15} alt='' className='microfinanceImg'/>
              <img src={img16} alt='' className='microfinanceImg'/>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Projects