import { useState } from 'react'


function Body() {
 

  return (
    <div>

        <div className='hero'>

          <div className='main-text'>
              <div className='main-text-container'>
                <h1><span className='premier-span'>Premier</span><span className='chiro-span'>Chiropractic</span></h1>
                <h2>Specializing in Chiropractic and Accident Injury Treatment</h2>

              </div>
          </div>

        </div>

        <div className='intro-container'>

          <div className='intro-text'>
            <h1>Get Healing and Whole-Body Care at Premier Chiropractic</h1>
            <p>At Premier Chiropractic, we invite you to get well, naturally--and we'll be here to help you every step of the way. Discover how today!</p>
          </div>

          <div className="intro-img">
            <img className='spine-img' src="../assets/spine.jpg" alt="" />
          </div>

        </div>

        <div className="offer-container">

            <div className="offer-img">
              <img className='doctor-img' src="../assets/doctor.webp" alt="" />
            </div>

            <div className='offer-text'>
              <h1>At Premier Chiropractic, the patient's needs comes first</h1>
              <p>We at Premier Chiropractic, invite you to get well, naturally--and we'll be here to help you every step of the way. Discover how today!</p>
                  <div className='offers'>
                    <p className=' icons icon-transportation'>Transporation for patients</p>
                    <p className=' icons icon-calendar'>Same day appointments</p>
                    <p className=' icons icon-clock'>Convenient evening hours</p>     
                  </div>
          </div>

        </div>

        <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3083.814933229264!2d-76.53660164958376!3d39.38306552567514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c809cd26dccdc9%3A0x1323097228d46c8e!2sPremier%20chiropractic%20and%20injury%20center!5e0!3m2!1sen!2sus!4v1675670089010!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">      
            </iframe>
          </div>

          
       
      

    </div>
  
  )
}

export default Body