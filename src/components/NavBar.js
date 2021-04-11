import React from 'react'

const linkedinimg = require('../local_images/linkedin.png')
const githubimg = require('../local_images/github_PNG42.png')

const NavBar = () => {
  return (
    <div className='whole-navbar justify-between'>
      <div className='links-left'>
        <a className='navbar-text' href='/'>
          Home
        </a>
        <a className='navbar-text' href='/projects'>
          Projects
        </a>
        <a className='navbar-text' href='/links'>
          Links
        </a>
      </div>
      <div className='links-right'>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/radbahi'
          className='navbar-icon'
        >
          <img src={githubimg} alt='GitHub' width='36' height='36' />
        </a>
        <a
          className='navbar-icon'
          target='_blank'
          rel='noopener noreferrer'
          href='https://www.linkedin.com/in/radouane-bahi-5410a1137/'
        >
          <img src={linkedinimg} alt='LinkedIn' width='36' height='36' />
        </a>
      </div>
    </div>
  )
}

export default NavBar
