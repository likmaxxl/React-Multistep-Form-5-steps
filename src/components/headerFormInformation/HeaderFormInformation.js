import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

class AccountInformation extends React.Component {
  render () {
  return(
    <>
<div className="headerFormInformations">
  <div className="headerTextInfo">
    <div className="icon"><i className="fas fa-lock"></i></div>
  <div className="text"><b>{
      this.props.step===1&&"Account"||
this.props.step===2&&"Personal"||
this.props.step===3&&"Payment"||
this.props.step===4&&"Confirm"
    }</b> information</div>
  </div>
  <div className="stepsInfo">
    Steps {this.props.step} - 5
  </div>
</div>
    </>
  )
  }
}

export default AccountInformation;
