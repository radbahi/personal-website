const ContactMe = () => {
  return (
    <section className='contactme-section'>
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        I am currently looking for opportunities!
      </h1>
      <br />
      <div className='contactme-text column'>
        <p>
          You can contact me via <strong>LinkedIn</strong> and{' '}
          <strong>Github</strong>.
        </p>
      </div>
      <div className='contactme-resume column'>
        <iframe
          className='pdf'
          src='pdf/web/viewer.html?file=../../my_resume.pdf'
          title='My resume'
          style={{ border: '0' }}
          width='700vw'
          height='800vh'
        />
      </div>
    </section>
  )
}

export default ContactMe
