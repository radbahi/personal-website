import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'

const NavBar = () => {
  return (
    <div className='navbar'>
      <p className='nav-name'>Radouane Bahi</p>

      <Navigation />
      <MobileNavigation />
    </div>
  )
}

export default NavBar
