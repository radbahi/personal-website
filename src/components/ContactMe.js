import { useState } from 'react'
import { Document, Page } from 'react-pdf'
import myResume from '../local_files/my_resume.pdf'

const ContactMe = () => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
  }

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
        {' '}
        <div>
          <Document
            file='../local_files/my_resume.pdf'
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactMe
