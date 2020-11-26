import React from 'react'
import { Media } from 'react-bootstrap'

const smilingimg = require('../local_images/f26efe7e0435ae9972fc079789ab8d59.jpeg')

const NavBar = () => {
  return (
    <div className='whole-navbar'>
      <Media>
        <img width={128} height={128} src={smilingimg} alt='Navbar' />
      </Media>
      <h5>Radouane Bahi</h5>
      <a href='/'>Main Page</a>
      <a href='/projects'>Projects</a>
      <a href='/links'>Links</a>
    </div>
  )
}

export default NavBar
