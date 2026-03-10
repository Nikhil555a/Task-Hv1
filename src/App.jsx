import React from 'react'
import NailHero from '../NailArtist/src/components/NailHero'
import AboutMeSection from '../NailArtist/src/components/AboutMeSection'
import Services from '../NailArtist/src/components/Services'
import Testimonial from '../NailArtist/src/components/Testimonial'
import Contact from '../NailArtist/src/components/Contact'



const App = () => {
  return (
    <div>
      {/* <WeddingHero/>
      <AboutMe/> */}
     
      <NailHero/>

      <AboutMeSection/>
      
 
      <Services/>

      <Testimonial/>
      <Contact/>
     
    </div>
  )
}

export default App