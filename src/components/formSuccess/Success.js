import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

class SuccessForm extends React.Component {
  render () {
  return(
    <>
<div className="successForm">
<div className="successContent">
<div className="icon"><i class="far fa-thumbs-up"></i></div>
<div className="text">
<p>Thank you!</p>
<p>Your submission has been sent.</p>
</div>
</div>
</div>
    </>
  )
  }
}

export default SuccessForm;
