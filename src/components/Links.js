import React from 'react'
import { Figure } from 'react-bootstrap'

const linkedinimg = require('../local_images/linkedin.png')
const githubimg = require('../local_images/github_PNG42.png')
const mediumimg = require('../local_images/medium.png')

const Links = () => {
  return (
    <div className='links-div'>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/radbahi'
      >
        <Figure>
          <Figure.Image
            width={171}
            height={180}
            alt='171x180'
            src={githubimg}
          />
          <Figure.Caption>GitHub</Figure.Caption>
        </Figure>
      </a>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.linkedin.com/in/radouane-bahi-5410a1137/'
      >
        <Figure>
          <Figure.Image
            width={171}
            height={180}
            alt='171x180'
            src={linkedinimg}
          />
          <Figure.Caption>LinkedIn</Figure.Caption>
        </Figure>
      </a>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://medium.com/@radbahi'
      >
        <Figure>
          <Figure.Image
            width={171}
            height={180}
            alt='171x180'
            src={mediumimg}
          />
          <Figure.Caption>Medium</Figure.Caption>
        </Figure>
      </a>
    </div>
  )
}

export default Links
