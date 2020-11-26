import React from 'react'
import { Card, Button } from 'react-bootstrap'

const pokemonimg = require('../local_images/POKEMONIMG.png')
const covidimg = require('../local_images/COVID19IMG.jpg')
const hanximg = require('../local_images/HANXIMG.jpg')

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '50vw',
  // marginLeft: '10vw',
  // marginRight: '-133rem',
  alignItems: 'center',
  textAlign: 'center',
  justifyContent: 'center',
}

const Projects = () => {
  return (
    <div className='project-div'>
      <Card style={cardStyle}>
        <Card.Img variant='top' src={covidimg} />
        <Card.Body>
          <Card.Title>COVID-19 Tracker</Card.Title>
          <Card.Text>
            Aptly named. A world map with bubbles that you can hover over for
            quick statistics in each country regarding the virus. Also a news
            section which contains top international headlines.
          </Card.Text>
          <Button
            target='_blank'
            href='https://covid19trackerflatiron.herokuapp.com/'
            variant='primary'
          >
            Visit project
          </Button>
        </Card.Body>
      </Card>
      <Card style={cardStyle}>
        <Card.Img variant='top' src={hanximg} />
        <Card.Body>
          <Card.Title>HANX!</Card.Title>
          <Card.Text>
            Browse some of the many movies of our national American treasure,
            Tom Hanks. Also be sure to take a look at the Hanks-inspired
            merchandise that (isn't actually) on sale in the store! My personal
            favorites are the shower curtain and miniskirt.
          </Card.Text>
          <Button
            target='_blank'
            href='https://hanx-app.herokuapp.com/'
            variant='primary'
          >
            Visit project
          </Button>
        </Card.Body>
      </Card>
      <Card style={cardStyle}>
        <Card.Img variant='top' src={pokemonimg} />
        <Card.Body>
          <Card.Title>Pokemon Battle</Card.Title>
          <Card.Text>
            Pick out three of your favorite first-gen Pokemon and have them
            battle against other users! Submit your name at the top and scroll
            through the list on the left to create your team.
          </Card.Text>
          <Button
            target='_blank'
            href='https://radbahi.github.io/pokemon_battle_frontend/'
            variant='primary'
          >
            Visit project
          </Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Projects
