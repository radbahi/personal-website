import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import javascriptLogo from '../local_images/javascript-logo.png'
import reactLogo from '../local_images/react-logo.png'
import reduxLogo from '../local_images/redux-logo.png'
import rubyLogo from '../local_images/ruby-logo.png'
import railsLogo from '../local_images/rails-logo.png'

const Projects = () => {
  return (
    <div className='project-div'>
      <Carousel style={{ background: '#5b5b5b' }}>
        <Carousel.Item>
          <img src={javascriptLogo} />
          <Carousel.Caption>
            <p>test 1</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={reactLogo} />
          <Carousel.Caption>
            <p>test 1</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={reduxLogo} />
          <Carousel.Caption>
            <p>test 1</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={rubyLogo} />
          <Carousel.Caption>
            <p>test 1</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={railsLogo} />
          <Carousel.Caption>
            <p>test 1</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Projects
