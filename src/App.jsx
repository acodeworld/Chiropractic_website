import { useState } from 'react'
import Header from '../Components/Header'
import Body from '../Components/Body'
import Footer from '../Components/Footer'
import servicesdata from '../data/servicesdata'


function App() {

  
const data = servicesdata.map(item => {
  return  <div>
            <h1>{item.service}</h1>
          </div>
})





 

  return (
    <div>

      <Header />
      <Body />
      <Footer />
      
      
      
    </div>

  )
}

export default App
