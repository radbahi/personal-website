import PDFViewer from 'pdf-viewer-reactjs'

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
        <PDFViewer
          document={{
            url: '../local_files/my_resume.pdf',
          }}
        />
      </div>
    </div>
  )
}

export default ContactMe
