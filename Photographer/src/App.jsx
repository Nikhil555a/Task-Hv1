import React from 'react'
import PhotoHero from './components/PhotoHero'
import AboutMe from './components/AboutMe'
import MySkills from './components/MySkills'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <PhotoHero/>
      <AboutMe/>
      <MySkills/>
      <Gallery/>
      <Contact/>
    </div>
  )
}

export default App