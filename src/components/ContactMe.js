const ContactMe = () => {
  return (
    <div className='contactme-div'>
      <h1
        style={{
          textAlign: 'center',
        }}
      >
        I am currently looking for opportunities!
      </h1>
      <div className='contactme-info'>
        <iframe
          className='pdf'
          src='pdf/web/viewer.html?file=../../../src/local_files/my_resume.pdf'
          title="Radouane Bahi's resume"
          style={{ border: '0' }}
          width='50%'
          height='50%'
        />
      </div>
    </div>
  )
}

export default ContactMe
