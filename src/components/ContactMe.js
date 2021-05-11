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
      <div className='contactme-info'>
        <h1>YO</h1>
        <iframe
          className='pdf'
          src='pdf/web/viewer.html?file=../../my_resume.pdf'
          title="Radouane Bahi's resume"
          style={{ border: '0' }}
          width='50%'
          height='500vh'
        />
      </div>
    </section>
  )
}

export default ContactMe
