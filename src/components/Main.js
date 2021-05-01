import React from 'react'

const Main = () => {
  return (
    <div className='main-text'>
      <h1>{'<Hello />,'}</h1>
      <h1>I'm Radouane Bahi</h1>
      <p style={{ color: 'white', textShadow: '2px 2px black' }}>
        Full Stack Web Developer
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

export default Main
