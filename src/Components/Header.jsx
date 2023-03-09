import { useState } from 'react'
import servicesdata from '../data/servicesdata'
import {Link} from "react-router-dom"



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
                <Link className="link" to="/"><li>Home</li></Link>
                <Link className="link" to="/About"><li>About Us</li></Link>
               
                <li onMouseOver={mouseEnter} onMouseLeave={mouseLeave}>
                  Services
                  {open ? <div className='dropdown'>{data}</div>: null}

                  </li>
                <li>New Patients</li>
                <Link className="link" to="/Contact"><li>Contact Us</li></Link>
            </ul>
           

        </div>

    </div>
  
  )
}

export default Header
