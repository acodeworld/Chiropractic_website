import { useState } from 'react'
import servicesdata from '../data/servicesdata'



function Header() {

  const [open, setOpen] = useState(false);

  const data = servicesdata.map(item => {
    return  <div >
              <h3 className='drop-item'>{item.service}</h3>
            </div>
  })

  
 
  function mouseEnter() {
    setOpen(true);
  }
  function mouseLeave() {
    setOpen(false);
  }
 

  return (
    <div>
        <nav>
            <div>
            <h1 className='title'><span className='premier-span'>Premier</span><span className='chiro-span'>Chiropractic</span></h1>

            </div>
            <div className='number-container'>
            <h2 className='phone-number'>410-35-<span className='number-span'>SPINE</span></h2>

            </div>
        </nav>
        <div className='menu'>
            <ul className='menu-list'>
                <li>Home</li>
                <li >About Us</li>
                <li onMouseOver={mouseEnter} onMouseLeave={mouseLeave}>
                  Services
                  {open ? <div className='dropdown'>{data}</div>: null}

                  </li>
                <li>New Patients</li>
                <li>Contact Us</li>
            </ul>
           

        </div>

    </div>
  
  )
}

export default Header
