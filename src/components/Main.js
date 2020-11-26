import React from 'react'
import { Media } from 'react-bootstrap'

const mediaStyle = {
  // justifyContent: 'center',
  // padding: 10,
  backgroundColor: 'white',
  width: '50vw',
  // marginLeft: '15rem',
  // marginRight: '-133rem',
  marginTop: '9vh',
  position: 'fixed',
}

const Main = () => {
  return (
    <div className='main-div'>
      <Media style={mediaStyle}>
        <Media.Body>
          <h5>Welcome to my site!</h5>
          <p>
            My name is Radouane Bahi. I am a graduate from the Flatiron School.
            I got into software engineering from a friend who recommended it to
            me after I decided to not pursue a career in law enforcement
            following my graduation from John Jay College. Figures that I'd have
            a change of heart right after graduation! Please take the time to
            click on the links to the left leading to my projects and social
            media/blogs.
          </p>
        </Media.Body>
      </Media>
    </div>
  )
}

export default Main
