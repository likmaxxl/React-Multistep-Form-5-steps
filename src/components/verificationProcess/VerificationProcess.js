import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

class VerificationProcess extends React.Component {
  render () {
    let {step}=this.props

  return(
    <>
<div className="processHeader">
<h2>Advance sign up <span>form wizard</span></h2>
</div>
<div className="processCircles">
<div className="circle">
<div className={step===1?"icon iconSucssesBackgroundRed sucsessBarFromLeftToRightRed":"icon iconSucssesBackgroundGreen sucsessBarFromLeftToRightGreen"}>
<i className="fas fa-lock"></i>
</div>
<div className="circleInfo">
<div className="circleIconInfo">
{step>1&&<i className="fas fa-check-circle"></i>}
</div>
<div className="circleTextInfo">
<h4>Account Information</h4>
<p>Enter your account informations all field must be filed</p>
</div>
</div>
</div>
<div className="circle">
<div className={step===2?"icon iconSucssesBackgroundRed sucsessBarFromLeftToRightRed":"icon" && step>2?"icon iconSucssesBackgroundGreen sucsessBarFromLeftToRightGreen":"icon"}>
<i className="fas fa-user-tie"></i>
</div>
<div className="circleInfo">
<div className="circleIconInfo">
{step>2&&<i className="fas fa-check-circle"></i>}
</div>
<div className="circleTextInfo">
<h4>Personal Information</h4>
<p>Enter your personal informations all field must be filed</p>
</div>
</div>
</div>
<div className="circle">
<div className={step===3?"icon iconSucssesBackgroundRed sucsessBarFromLeftToRightRed":"icon" && step>3?"icon iconSucssesBackgroundGreen sucsessBarFromLeftToRightGreen":"icon"}>
<i className="far fa-credit-card"></i>
</div>
<div className="circleInfo">
<div className="circleIconInfo">
{step>3&&<i className="fas fa-check-circle"></i>}
</div>
<div className="circleTextInfo">
<h4>Payment Information</h4>
<p>Enter your payment informations all field must be filed</p>
</div>
</div>
</div>
<div className="circle">
<div className={step>4?"icon iconSucssesBackgroundGreen":"icon"}>
<i className="far fa-file-alt"></i>
</div>
<div className="circleInfo">
<div className="circleIconInfo">
{step>4&&<i className="fas fa-check-circle"></i>}
</div>
<div className="circleTextInfo">
<h4>Confirm Your Details</h4>
<p>Confirm your details all field must be filed</p>
</div>
</div>
</div>

</div>
    </>
  )
  }
}

export default VerificationProcess;
