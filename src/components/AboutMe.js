import React from 'react'

const linkedinimg = require('../local_images/linkedin.png')
const githubimg = require('../local_images/github_PNG42.png')

const AboutMe = () => {
  return (
    <div className='aboutme-text'>
      <h1>Who I am</h1>
      <p style={{ color: 'white', textShadow: '2px 2px black' }}>
        I'm a graduate from the Flatiron School's Access Labs where I studied
        JavaScript, React, Ruby, Rails, and Redux. My original pursuit was to be
        a police officer, but after I had gotten my Bachelor's in Criminal
        Justice from John Jay College, I realize just how limiting that career
        would have been. Working with code has allowed me to feel like I am
        contributing to something more than myself, that I am a part of this
        world's technological drive.
      </p>
      <p style={{ color: 'white', textShadow: '2px 2px black' }}>
        Based in New York City
      </p>
      {/* <p>
      My name is Radouane Bahi. I am a graduate from the Flatiron School. I
      got into software engineering from a friend who recommended it to me
      after I decided to not pursue a career in law enforcement following my
      graduation from John Jay College. Figures that I'd have a change of
      heart right after graduation! Please take the time to click on the
      links to the left leading to my projects and social media/blogs.
    </p> */}
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
