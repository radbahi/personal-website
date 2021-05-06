import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import covid19TrackerImg from '../local_images/covid19tracker.png'
import proShopImg from '../local_images/proshop.png'
import HanxImg from '../local_images/HANXIMG.jpg'

const Projects = () => {
  return (
    <div className='project-div'>
      <Carousel style={{ background: '#5b5b5b', paddingTop: '5vh' }}>
        <Carousel.Item>
          <img
            style={{ height: '70vh', width: '50vw', paddingBottom: '20vh' }}
            src={covid19TrackerImg}
          />
          <Carousel.Caption style={{ marginTop: '600px' }}>
            <h1>COVID-19 Tracker</h1>
            <p>A data tracking and visual tool for the virus</p>
            <a href='https://github.com/teapuddles/CovidTrackerBackend'>
              Backend
            </a>
            {' | '}
            <a href='https://github.com/radbahi/CovidTrackerFrontend'>
              Frontend
            </a>
            {' | '}
            <a
              style={{ textShadow: '1px 1px blue' }}
              href='https://covid19trackerfrontend.herokuapp.com/'
            >
              Website
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: '70vh', width: '50vw', paddingBottom: '20vh' }}
            src={proShopImg}
          />
          <Carousel.Caption>
            <h1>Gadget Pro Shop</h1>
            <p>A mock e-commerce site with a PayPal SDK</p>

            <a href='https://github.com/radbahi/UdemyProShop'>GitHub</a>
            {' | '}
            <a href='https://www.youtube.com/watch?v=NwZI-5Ej-44'>Demo</a>
            {' | '}
            <a
              style={{ textShadow: '1px 1px blue' }}
              href='https://udemyproshop.herokuapp.com/'
            >
              Website
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: '70vh', width: '50vw', paddingBottom: '20vh' }}
            src={HanxImg}
          />
          <Carousel.Caption>
            <h1>HANX!</h1>
            <p>A mock e-commerce and fan site utilizing a styling library </p>

            <a
              style={{ textShadow: '1px 1px blue' }}
              href='https://github.com/radbahi/hanx-backend'
            >
              Backend
            </a>
            {' | '}
            <a href='https://github.com/hylobates-lar/hanx-frontend'>
              Frontend
            </a>
            {' | '}
            <a href='https://www.youtube.com/watch?v=wLqJUypct4o'>Demo</a>
            {' | '}
            <a href='https://hanx.netlify.app/'>Website</a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Projects
