import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

class Step2PersonalInfo extends React.Component {
  render () {
    let {states,salutationSt2,genderSt2,firstNameSt2,lastNameSt2,emailSt2,phoneNmbrSt2,zipCodeSt2,stateSt2,homeAddressSt2,contrySt2,errorSalutationSt2,errorGenderSt2,errorFirstNameSt2,errorLastNameSt2,errorEmailSt2,errorPhoneNmbrSt2,errorZipCodeSt2,errorStateSt2,errorHomeAddressSt2,errorContrySt2}=this.props
  return(
    <>
    <div className="step2Personalinfo">
      <div>
      <div className="select">
        <div className="selectBox">
        <div className="label">
          Salutation
        </div>
          <div className="selectOption">
        <select onChange={this.props.inputChange} value={salutationSt2} name="salutationSt2">
          <option value=""></option>
            <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          </select>
          {
            errorSalutationSt2===true&&<div className="errorInput">
            <p>Mr or Mrs ?</p>
            <p><i class="fas fa-lock"></i> Your information in Safe here &amp; never shared</p>
            </div>
          }

              </div>
              </div>
              <div className="selectBox">
              <div className="label">
                Gender
              </div>
              <div className="selectOption">
              <select onChange={this.props.inputChange} value={genderSt2} name="genderSt2">
                <option value=""></option>
                  <option value="Male">Male</option>
                <option value="Female">Female</option>
                </select>
                {
                errorGenderSt2&& <div className="errorInput">
                  <p>Please Select Gender</p>
                  <p><i class="fas fa-lock"></i> Your information in Safe here &amp; never shared</p>
                  </div>
                }

                    </div>
                      </div>
      </div>
      </div>
      <div>
      <div className="inputs">
        <div className="input">
          <div className="label">
            First name
          </div>
          <input autocomplete="off" onChange={this.props.inputChange} type="text" placeholder="Name" value={firstNameSt2} name="firstNameSt2"/>
{
    errorFirstNameSt2&&  <div className="errorInput">
      <p>Please enter your First Name</p>
      <p><i class="fas fa-lock"></i> Your information in Safe here &amp; never shared</p>
      </div>
}

        </div>
        <div className="input">
          <div className="label">
            Last name
          </div>
          <input autocomplete="off" onChange={this.props.inputChange} name="lastNameSt2" value={lastNameSt2} type="text" placeholder="Surname"/>
{
  errorLastNameSt2&&<div className="errorInput">
    <p>Please enter your Surname</p>
    <p><i class="fas fa-lock"></i> Your information in Safe here &amp; never shared</p>
    </div>
}

        </div>
      </div>
      </div>
      <div>
      <div className="inputs">
        <div className="input">
          <div className="label">
          Email
          </div>
          <input autocomplete="off" onChange={this.props.inputChange} name="emailSt2" value={emailSt2} type="email" placeholder="Please enter your email ID"/>
          <div className="icon"><i className="fas fa-envelope"></i></div>
{errorEmailSt2&&<div className="errorInput">
  <p>Please enter your Email address</p>
  <p><i class="fas fa-lock"></i> Your information in Safe here &amp; never shared</p>
  </div>}

      </div>
      </div>
      </div>
      <div>
      <div className="inputs">
        <div className="input">
          <div className="label">
          Phone
          </div>
          <input onChange={this.props.inputChange} name="phoneNmbrSt2" value={phoneNmbrSt2} type="number" placeholder="Number"/>
          <div className="icon"><i className="fas fa-phone"></i></div>
{errorPhoneNmbrSt2&&  <div className="errorInput">
    <p>Please enter your Phone number</p>
    <p><i class="fas fa-lock"></i> Your information in Safe here &amp; never shared</p>
    </div>}

      </div>
      </div>
      </div>
      <div>
      <div className="select">
        <div className="input">
          <div className="label">
          Zip code
          </div>
          <input
            onChange={this.props.inputChange}
            name="zipCodeSt2"
            value={zipCodeSt2}
            type="number"
            oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
            placeholder="Code"
            maxLength={5}
             />

      {errorZipCodeSt2&&<div className="errorInput">
          <p>Must have 5 numbers</p>
          <p><i class="fas fa-lock"></i> Your information in Safe here &amp; never shared</p>
          </div>}
        </div>
        <div className="selectBox">
          <div className="label">
          Select State
          </div>
          <div className="selectOption">
          <select onChange={this.props.inputChange} value={stateSt2} name="stateSt2">

                 <option value=""></option>
            {states.map((all)=>{
              return <>

  <option value={all.name}>{all.name}</option>
              </>
            })}
            </select>

          {errorStateSt2&&<div className="errorInput">
            <p>Please enter your State</p>
            <p><i class="fas fa-lock"></i> Your information in Safe here &amp; never shared</p>
            </div>}
</div>
        </div>
      </div>
      </div>
      <div>
      <div className="inputs">
        <div className="input">
          <div className="label">
        Home adress
          </div>
          <input onChange={this.props.inputChange} value={homeAddressSt2} name="homeAddressSt2" type="text" placeholder="Adress"/>

      {errorHomeAddressSt2&&<div className="errorInput">
          <p>Please enter your Home address</p>
          <p><i class="fas fa-lock"></i> Your information in Safe here &amp; never shared</p>
          </div>}
        </div>
      </div>
      </div>
      <div>

      <div className="select">
        <div className="selectBox">
          <div className="label">
          Select Contry
          </div>
          <div className="selectOption">
          <select onChange={this.props.inputChange} value={contrySt2} name="contrySt2">
              <option value=""></option>
              <option value="Usa">Usa</option>
            <option value="Canada">Canada</option>
            </select>
{errorContrySt2&&<div className="errorInput">
<p>Select State</p>
<p><i class="fas fa-lock"></i> Your information in Safe here &amp; never shared</p>
</div>
}

</div>
        </div>
      </div>
      </div>
    </div>
    </>
  )
  }
}

export default Step2PersonalInfo;
