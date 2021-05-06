import React from 'react'
import Main from './components/Main.js'
import Projects from './components/Projects.js'
import NavBar from './components/NavBar.js'
import AboutMe from './components/AboutMe.js'
import Skillset from './components/Skillset.js'
import ContactMe from './components/ContactMe.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <Main />
      <AboutMe />
      <Skillset />
      <Projects />
      <ContactMe />
    </>
  )
}

export default App
