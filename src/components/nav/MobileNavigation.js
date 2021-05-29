import NavLinks from './NavLinks'
import { CgMenuBoxed, CgClose } from 'react-icons/cg'
import { useState } from 'react'

const MobileNavigation = () => {
  const [open, setOpen] = useState(false)
  const hamburgerIconOpen = (
    <CgMenuBoxed
      className='hamburger'
      size='40px'
      color='beige'
      onClick={() => setOpen(!open)}
    />
  )

  const hamburgerIconClose = (
    <CgClose
      className='hamburger'
      size='40px'
      color='beige'
      onClick={() => setOpen(!open)}
    />
  )
  const closeMobileMenu = () => setOpen(false)
  return (
    <nav className='mobile-navigation'>
      {open ? hamburgerIconClose : hamburgerIconOpen}
      {open && <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} />}
    </nav>
  )
}

export default MobileNavigation
