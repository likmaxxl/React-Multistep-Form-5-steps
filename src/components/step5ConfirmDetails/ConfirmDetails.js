import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

class ConfirmDetails extends React.Component {
  render () {
  let {userName,
  emailIdStep1,
  genderSt2,
  firstNameSt2,
  lastNameSt2,
  phoneNmbrSt2,
  zipCodeSt2,
  homeAddressSt2,
  contrySt2,
  cardTypeSt3}=this.props

  let arrayProps=[
    userName,
    emailIdStep1,
    firstNameSt2,
    lastNameSt2,
    genderSt2,
    phoneNmbrSt2,
    zipCodeSt2,
    homeAddressSt2,
    contrySt2,
    cardTypeSt3
  ];
  let arrayText=["Username",
"Email ID",
"First Name",
"Last Name" ,
"Gender",
"Telephone NO",
"Zip Code",
"Address",
"Country",
"Card Type",
]

   console.log(arrayProps);
  return (

<>
<div className="confirmPage">


{[...Array(arrayProps.length)].map((x, i) =>
  <div className="userDetails">
    <p>{arrayText[i]}</p>
  <p>{arrayProps[i]}</p>
  </div>
  )}


</div>
</>
  )
  }
}

export default ConfirmDetails;
