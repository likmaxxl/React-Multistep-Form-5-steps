import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

class Step1 extends React.Component {
  render () {
let {userName,password,confirmPassword,emailIdStep1,errorUserName,errorPassword,errorConfirmPassword,errorEmailIdStep1,eye}=this.props

  return(

    <>

<div className="step1">

  <div className="input">
  <div className="label">Username</div>
<input autoComplete="off" onChange={this.props.inputChange} value={userName} type="text" placeholder="Login" name="userName"/>
<div className="icon"><i className="fas fa-user-tie"></i></div>
{errorUserName&&  <div className="errorInput">
  <p>Please enter your Username</p>
  <p><i className="fas fa-lock"></i> Your information in Safe here &amp; never shared</p>
  </div>}

</div>
<div className="input">
<div className="label">Password min 8 characters</div>
<input onChange={this.props.inputChange} value={password} type={eye?"text":"password"} placeholder="Password" name="password"/>
{errorPassword&& <div className="errorInput">
  <p>Please enter your Password</p>
  <p><i className="fas fa-lock"></i> Your information in Safe here &amp; never shared</p>
  </div>
}
  <div className="icon" onClick={this.props.showPassword}>
  
{eye?<i className="fas fa-eye-slash"></i>:<i className="fas fa-eye"></i>}
</div>
</div>
<div className="input">
<div className="label">Confirm password</div>
<input onChange={this.props.inputChange} value={confirmPassword} type={eye?"text":"password"} placeholder="Password" name="confirmPassword"/>
  {errorConfirmPassword&& <div className="errorInput">
  <p>Please confirm your Password</p>
  <p><i className="fas fa-lock"></i> Your information in Safe here &amp; never shared</p>
  </div> }

</div>
<div className="input">
<div className="label">Email ID</div>
<input autoComplete="off" onChange={this.props.inputChange} value={emailIdStep1} type="email" placeholder="Please enter your email ID" name="emailIdStep1"/>
<div className="icon"><i className="fas fa-envelope"></i></div>
  {errorEmailIdStep1&&<div className="errorInput">
  <p>Please enter your Email adress</p>
  <p><i className="fas fa-lock"></i> Your information in Safe here &amp; never shared</p>
  </div>}
</div>



</div>

    </>
  )
  }
}

export default Step1;
