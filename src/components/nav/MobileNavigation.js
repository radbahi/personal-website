import NavLinks from './NavLinks'
import { CgMenuBoxed } from 'react-icons/cg'
import { useState } from 'react'

const MobileNavigation = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className='mobile-navigation'>
      <CgMenuBoxed
        className='hamburger'
        size='40px'
        color='white'
        onClick={() => setOpen(!open)}
      />
      {open && <NavLinks />}
    </nav>
  )
}

export default MobileNavigation
