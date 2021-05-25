import linkedInImage from '../local_files/linkedin.png'
import gitHubImage from '../local_files/github_PNG42.png'

const ContactMe = () => {
  return (
    <section className='contactme-section' id='contactme-section'>
      <h1
        style={{
          textAlign: 'center',
          paddingBottom: '5%',
          paddingTop: '5%',
        }}
      >
        I am currently looking for opportunities!
      </h1>
      <br />
      <div className='contactme-content'>
        <div className='contactme-text column'>
          <p>
            You can contact me via <strong>LinkedIn</strong> and{' '}
            <strong>Github</strong>.
            <br />
            You may also email me at{' '}
            <a href='mailto:radbahi@gmail.com'>radbahi@gmail.com</a>
          </p>
          <a
            href='https://www.linkedin.com/in/radouane-bahi-5410a1137/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              alt="Radouane Bahi's LinkedIn"
              src={linkedInImage}
              className='contactme-icon'
            />
          </a>{' '}
          <a
            href='https://github.com/radbahi'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              alt="Radouane Bahi's GitHub"
              src={gitHubImage}
              className='contactme-icon'
            />
          </a>
        </div>
        <div class='vl column' />
        <div className='contactme-resume column'>
          <iframe
            className='pdf'
            src='pdf/web/viewer.html?file=../../my_resume.pdf'
            title='My resume'
            style={{ border: '0' }}
            width='670'
            height='600'
          />
        </div>
      </div>
    </section>
  )
}

export default ContactMe
