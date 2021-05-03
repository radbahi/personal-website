import React from 'react'
import portraitOfMe from '../local_images/f26efe7e0435ae9972fc079789ab8d59.jpeg'

const linkedinimg = require('../local_images/linkedin.png')
const githubimg = require('../local_images/github_PNG42.png')
// const portraitOfMe = require('../local_images/f26efe7e0435ae9972fc079789ab8d59.jpeg')

const AboutMe = () => {
  return (
    <div className='aboutme-div'>
      <img src={portraitOfMe} alt='Portrait of me!' />

      <div className='aboutme-text'>
        <h1 style={{ textAlign: 'center' }}>Who I am</h1>
        <p>
          I'm a graduate from the Flatiron School's Access Labs where I studied
          JavaScript, React, Ruby, Rails, and Redux. My original pursuit was to
          be a police officer, but after I had gotten my Bachelor's in Criminal
          Justice from John Jay College, I realize just how limiting that career
          would have been. Working with code has allowed me to feel like I am
          contributing to something more than myself, that I am a part of this
          world's technological drive.
        </p>
        <p>
          Coding was always something that piqued my interest, even dabbling in
          HTML when I was a pre-teen. A friend of mine who had also attended
          Flatiron recommended the school to me. After taking the
          pre-coursework, I got hooked and wanted to immerse myself into the
          world completely. Graduated in late March 2020 and I am still learning
          as much as I can to keep myself sharp for the industry.
        </p>
        <p>
          I'm looking for opportunities! Please contact me via{' '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/radouane-bahi-5410a1137/'
            style={{ textShadow: '1px 1px blue' }}
          >
            LinkedIn
          </a>
          ,{' '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/radbahi'
            style={{ textShadow: '1px 1px blue' }}
          >
            GitHub
          </a>
          , or at{' '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='mailto:radbahi@gmail.com'
            style={{ textShadow: '1px 1px blue' }}
          >
            radbahi@gmail.com
          </a>
        </p>
      </div>
    </div>
  )
}

// const AboutMe = () => {
//   return (
//     <div className='links-div'>
//       <a
//         target='_blank'
//         rel='noopener noreferrer'
//         href='https://github.com/radbahi'
//       >
//         <Figure>
//           <Figure.Image
//             width={171}
//             height={180}
//             alt='171x180'
//             src={githubimg}
//           />
//           <Figure.Caption>GitHub</Figure.Caption>
//         </Figure>
//       </a>
//       <a
//         target='_blank'
//         rel='noopener noreferrer'
//         href='https://www.linkedin.com/in/radouane-bahi-5410a1137/'
//       >
//         <Figure>
//           <Figure.Image
//             width={171}
//             height={180}
//             alt='171x180'
//             src={linkedinimg}
//           />
//           <Figure.Caption>LinkedIn</Figure.Caption>
//         </Figure>
//       </a>
//     </div>
//   )
// }

export default AboutMe
