const ContactMe = () => {
  return (
    <section className='contactme-section'>
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
          </p>
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
