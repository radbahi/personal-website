import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import covid19TrackerImg from '../local_files/covid19tracker.png'
import proShopImg from '../local_files/proshop.png'
import HanxImg from '../local_files/HANXIMG.jpg'

const Projects = () => {
  return (
    <section className='project-section'>
      <h1>My Finished Projects</h1>
      <Carousel
        style={{ background: '#5b5b5b', paddingTop: '5vh', zIndex: '0' }}
      >
        <Carousel.Item>
          <img
            style={{ height: '70vh', width: '50vw', paddingBottom: '20vh' }}
            src={covid19TrackerImg}
          />
          <Carousel.Caption>
            <h1>COVID-19 Tracker</h1>
            <p>A data tracking and visual tool for the virus</p>
            <a
              style={{ color: '#89CFF0' }}
              href='https://github.com/teapuddles/CovidTrackerBackend'
            >
              Backend
            </a>
            {' | '}
            <a
              style={{ color: '#89CFF0' }}
              href='https://github.com/radbahi/CovidTrackerFrontend'
            >
              Frontend
            </a>
            {' | '}
            <a
              style={{ color: '#89CFF0' }}
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

            <a
              style={{ color: '#89CFF0' }}
              href='https://github.com/radbahi/UdemyProShop'
            >
              GitHub
            </a>
            {' | '}
            <a
              style={{ color: '#89CFF0' }}
              href='https://www.youtube.com/watch?v=NwZI-5Ej-44'
            >
              Demo
            </a>
            {' | '}
            <a
              style={{ color: '#89CFF0' }}
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
              style={{ color: '#89CFF0' }}
              href='https://github.com/radbahi/hanx-backend'
            >
              Backend
            </a>
            {' | '}
            <a
              style={{ color: '#89CFF0' }}
              href='https://github.com/hylobates-lar/hanx-frontend'
            >
              Frontend
            </a>
            {' | '}
            <a
              style={{ color: '#89CFF0' }}
              href='https://www.youtube.com/watch?v=wLqJUypct4o'
            >
              Demo
            </a>
            {' | '}
            <a style={{ color: '#89CFF0' }} href='https://hanx.netlify.app/'>
              Website
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  )
}

export default Projects
