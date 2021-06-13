import React from 'react'
import javascriptLogo from '../local_files/javascript-logo.png'
import reactLogo from '../local_files/react-logo.png'
import reduxLogo from '../local_files/redux-logo.png'
import rubyLogo from '../local_files/ruby-logo.png'
import railsLogo from '../local_files/rails-logo.png'

const Skillset = () => {
  return (
    <section className='skillset-section' id='skillset-section'>
      <div className='skillset-text'>
        <p>Skills:</p>
      </div>
      <div className='skillset-icons-div-1'>
        <div className='skillset-icon-box'>
          <img
            className='skillset-icon'
            src={javascriptLogo}
            alt='JavaScript'
          />
          <p className='skillset-icon-text'>JavaScript</p>
        </div>
        <div className='skillset-icon-box'>
          <img className='skillset-icon' src={reactLogo} alt='React' />
          <p className='skillset-icon-text'>React</p>
        </div>
        <div className='skillset-icon-box'>
          <img className='skillset-icon' src={reduxLogo} alt='Redux' />
          <p className='skillset-icon-text'>Redux</p>
        </div>
      </div>
      <div className='skillset-icons-div-2'>
        <div className='skillset-icon-box'>
          <img className='skillset-icon' src={rubyLogo} alt='Ruby' />
          <p className='skillset-icon-text'>Ruby</p>
        </div>
        <div className='skillset-icon-box'>
          <img className='skillset-icon' src={railsLogo} alt='Rails' />
          <p className='skillset-icon-text'>Rails</p>
        </div>
      </div>
    </section>
  )
}

export default Skillset
