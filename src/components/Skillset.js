import React from 'react'
import javascriptLogo from '../local_files/javascript-logo.png'
import reactLogo from '../local_files/react-logo.png'
import reduxLogo from '../local_files/redux-logo.png'
import rubyLogo from '../local_files/ruby-logo.png'
import railsLogo from '../local_files/rails-logo.png'

const Skillset = () => {
  return (
    <section className='skillset-section'>
      <div className='skillset-text'>
        <p>Background:</p>
        <br />
        <h3>Flatiron School's Access Labs Graduate</h3>
        <br />
        <h3>Bachelor's Degree in Criminal Justice</h3>
        <p>from CUNY John Jay College</p>
        <br />
        <p>Skills:</p>
      </div>
      <div className='skillset-icons-div-1'>
        <div className='skillset-icon-box'>
          <img
            className='skillset-icon'
            src={javascriptLogo}
            alt='JavaScript'
          />
          <p style={{ color: '#efe4d7', paddingTop: '1vh' }}>JavaScript</p>
        </div>
        <div className='skillset-icon-box'>
          <img className='skillset-icon' src={reactLogo} alt='React' />
          <p style={{ color: '#efe4d7', paddingTop: '1vh' }}>React</p>
        </div>
        <div className='skillset-icon-box'>
          <img className='skillset-icon' src={reduxLogo} alt='Redux' />
          <p style={{ color: '#efe4d7', paddingTop: '1vh' }}>Redux</p>
        </div>
        <br />
      </div>
      <div className='skillset-icons-div-2'>
        <div className='skillset-icon-box'>
          <img className='skillset-icon' src={rubyLogo} alt='Ruby' />
          <p style={{ color: '#efe4d7', paddingTop: '1vh' }}>Ruby</p>
        </div>
        <div className='skillset-icon-box'>
          <img className='skillset-icon' src={railsLogo} alt='Rails' />
          <p style={{ color: '#efe4d7', paddingTop: '1vh' }}>Rails</p>
        </div>
      </div>
    </section>
  )
}

export default Skillset
