import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './components/Main.js'
import Projects from './components/Projects.js'
import NavBar from './components/NavBar.js'
import AboutMe from './components/AboutMe.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <>
      <NavBar />
      <Main />
      <Projects />
      <AboutMe />
    </>
  )
}

export default App
