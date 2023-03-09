import { useState } from 'react'


function Footer() {


  return (
            <div className='footer-container'>
                <div className='footer-title'>
                    <h1>Premier</h1>
                    <h2>Chiropractic</h2>
                </div>
                <div className='footer-location'>
                    <h2>Location</h2>
                    <h2>8713 Harford Rd, Suite 101</h2>
                    <h2>Parkville, MD 21234</h2>
                </div>
                <div className='footer-hours'>
                    <h2>Hours</h2>
                    <h3><span className='days-open'>Monday:</span>     9:30am - 1:00pm  2:00pm - 6pm</h3>
                    <h3><span className='days-open'>Wenesday:</span>  9:30am - 1:00pm  2:00pm - 6pm</h3>
                    <h3><span className='days-open'>Friday:</span>    9:30am - 1:00pm  2:00pm - 6pm</h3>

                </div>
            </div>
  
  )
}

export default Footer