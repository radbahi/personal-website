import React from 'react'

// const linkedinimg = require('../local_images/linkedin.png')
// const githubimg = require('../local_images/github_PNG42.png')
// const gmailimg = require('../local_images/512px-Gmail_icon_(2020).svg.png')

const NavBar = () => {
  return (
    <div className='whole-navbar justify-between'>
      <div className='navbar-text' style={{ paddingLeft: '10%' }}>
        Radouane Bahi
      </div>
      <div className='links-right'>
        <a className='navbar-text' href='/'>
          Home
        </a>
        <a className='navbar-text' href='/projects'>
          Projects
        </a>
        <a className='navbar-text' href='/aboutme'>
          About Me
        </a>
      </div>
    </div>
  )
}

export default NavBar
