const NavLinks = ({ isMobile, closeMobileMenu }) => {
  return (
    <ul className='navlinks'>
      <li onClick={() => isMobile && closeMobileMenu()}>
        <a href='#contactme-section'>Contact Me</a>
      </li>
      <li onClick={() => isMobile && closeMobileMenu()}>
        <a href='#project-section'>Projects</a>
      </li>
      <li onClick={() => isMobile && closeMobileMenu()}>
        <a href='#skillset-section'>Skills</a>
      </li>
      <li onClick={() => isMobile && closeMobileMenu()}>
        <a href='#aboutme-section'>About Me</a>
      </li>
      <li onClick={() => isMobile && closeMobileMenu()}>
        <a href='#main-section'>Main</a>
      </li>
    </ul>
  )
}

export default NavLinks
