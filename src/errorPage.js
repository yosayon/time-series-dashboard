import React from 'react'
import pup from './labradoodle-pup.jpeg'

const errorPage = ({ errorMessage }) => {
  return(
    <div id="error-background-container">
      <div className="important-messages">
        <p className="error-messages">{errorMessage}</p>
        <p>Not to worry, we are on it. In the meantime, enjoy this adorable labradoodle</p>
      </div>
      <div className="general-image-size">
        <img src={pup} alt="calm"/>
      </div>
    </div>
  )
}

export default errorPage
