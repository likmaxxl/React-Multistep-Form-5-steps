import React from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask';
import {states} from './UsaStates'
import VerificationProcess from './verificationProcess/VerificationProcess'
import HeaderFormInformation from './headerFormInformation/HeaderFormInformation'
import Step1 from './step1/Step1'
import Step2PersonalInfo from './step2PersonalInfo/Step2PersonalInfo'
import Step3Payment from './step3Payment/Step3Payment'
import ConfirmDetails from './step5ConfirmDetails/ConfirmDetails'
import SuccessForm from './formSuccess/Success'
import Buttons from './buttons/Buttons'

class MultistepForm extends React.Component {

  constructor(props){

    super(props)
    this.state={
      /*STEP1*/
states:states,
step:1,
userName:'',
password:'',
confirmPassword:'',
emailIdStep1:'',
errorUserName:"",
errorPassword:"",
errorConfirmPassword:"",
errorEmailIdStep1:"",
eye:false,


  /*STEP2*/
salutationSt2:"",
genderSt2:"",
firstNameSt2:"",
lastNameSt2:"",
emailSt2:"",
phoneNmbrSt2:"",
zipCodeSt2:"",
stateSt2:"",
homeAddressSt2:"",
contrySt2:"",

errorSalutationSt2:false,
errorGenderSt2:"",
errorFirstNameSt2:"",
errorLastNameSt2:"",
errorEmailSt2:"",
errorPhoneNmbrSt2:"",
errorZipCodeSt2:"",
errorStateSt2:"",
errorHomeAddressSt2:"",
errorContrySt2:"",


//Step3Payment
cardTypeSt3:"Visa",
cardNumberSt3:"",
cardCvcSt3:"",
cardHolderNameSt3:"",
cardExpiryMonthSt3:"",
cardExpiryYearSt3:"",

errorCardTypeSt3:"",
errorCardNumberSt3:"",
errorCardCvcSt3:"",
errorCardHolderNameSt3:"",
errorCardExpiryMonthSt3:"",
errorCardExpiryYearSt3:"",

    }


  }


inputChange=(e)=>{
e.preventDefault()

  this.setState({
  [e.target.name]:e.target.value
},()=>{

  let error,errorSt2;
  /**USERNAME VALIDATION**/
if(this.state.userName.length>=2){
  error=false
  this.setState({
  errorUserName:false,
})
}


/**PASSWORD VALIDATION**/
if(this.state.password.length>=8){
error=false
this.setState({
errorPassword:false
})

/**CONFIRM PASSWORD VALIDATION***/
if(this.state.password===this.state.confirmPassword || this.state.confirmPassword.length===this.state.password.length){
error=false
this.setState({
errorConfirmPassword:false
})
}
}



/***EMAIL VALIDATION***/

if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.emailIdStep1)) {
  error=false
  this.setState({
    errorEmailIdStep1:false
  })
}

/***STEP 2***/



if(this.state.salutationSt2!=""){//Salutation
  errorSt2=false
  this.setState({
    errorSalutationSt2:false
  })
}


if(this.state.genderSt2!=""){//Gender
  errorSt2=false
  this.setState({
    errorGenderSt2:false
  },()=>{})
}



if(this.state.firstNameSt2.length>2&&this.state.firstNameSt2.match(/^[A-Za-z]+$/)){//first name step2

  errorSt2=false
  this.setState({
    errorFirstNameSt2:false
  })

}


if(this.state.lastNameSt2.length>2 && this.state.lastNameSt2.match(/^[A-Za-z]+$/)){//last name step2

  errorSt2=false
  this.setState({
    errorLastNameSt2:false
  })
}
if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.emailSt2)) {//email ST2EP
  errorSt2=false
  this.setState({
    errorEmailSt2:false
  })
}



if(this.state.phoneNmbrSt2.length>9 && this.state.phoneNmbrSt2.length<=15){//phone number stage2
  errorSt2=false
  this.setState({
    errorPhoneNmbrSt2:false
  })
}


if(this.state.zipCodeSt2.length===5){//phone number stage2
  errorSt2=false
  this.setState({

    errorZipCodeSt2:false
  })
}

if(this.state.stateSt2!=""){//state stage2
  errorSt2=false
  this.setState({
    errorStateSt2:false
  })
}


if(this.state.homeAddressSt2.length>10){//home address stage2
  errorSt2=false
  this.setState({
    errorHomeAddressSt2:false
  })
}


if(this.state.contrySt2!=""){//contry stage2
  errorSt2=false
  this.setState({
    errorContrySt2:false
  })
}

/**STEP 3****/
let errorSt3
if(this.state.cardNumberSt3.length===19){//card number
  errorSt3=false;
  this.setState({
    errorCardNumberSt3:false
  })
}

if(this.state.cardCvcSt3.length===4){//card CVC
  errorSt3=false;
  this.setState({
    errorCardCvcSt3:false
  })
}


if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.cardHolderNameSt3)) {//card holder name step3
  errorSt2=false
  this.setState({
    errorCardHolderNameSt3:false
  })
}


})

}



beforeMaskedValueChange = (newState, oldState, userInput) => {//card number STEP 3
  var { value } = newState;
  var selection = newState.selection;
  var cursorPosition = selection ? selection.start : null;

  // keep minus if entered by user
  if (value.endsWith('-') && userInput !== '-' && !this.state.cardNumberSt3.endsWith('-')) {
    if (cursorPosition === value.length) {
      cursorPosition--;
      selection = { start: cursorPosition, end: cursorPosition };
    }
    value = value.slice(0, -1);
  }

  return {
    value,
    selection
  };
}


beforeMaskedValueChangeCvc = (newState, oldState, userInput) => {//card CVC STEP 3
  var { value } = newState;
  var selection = newState.selection;
  var cursorPosition = selection ? selection.start : null;

  // keep minus if entered by user
  if (value.endsWith('-') && userInput !== '-' && !this.state.cardCvcSt3.endsWith('-')) {
    if (cursorPosition === value.length) {
      cursorPosition--;
      selection = { start: cursorPosition, end: cursorPosition };
    }
    value = value.slice(0, -1);
  }

  return {
    value,
    selection
  };
}


nextStep=(e)=>{

e.preventDefault()
  /**USERNAME VALIDATION**/

let error=false;

if(this.state.userName.length<=2){
  error=true
  this.setState({
    errorUserName:true,

  })
}


/**PASSWORD VALIDATION**/
if(this.state.password==="" || this.state.password.length<8){
  error=true
this.setState({
  errorPassword:true
})
}

/**CONFIRM PASSWORD VALIDATION**/
  if(this.state.confirmPassword!=this.state.password || this.state.password===""){
    error=true;
  this.setState({
    errorConfirmPassword:true
  })
  }

/***EMAIL VALIDATION***/
if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.emailIdStep1)) {
  error=true
  this.setState({
    errorEmailIdStep1:true
  })
}




/***STEP 2**/
let errorSt2=false;
if(this.state.step===1){
  errorSt2=false
}
if(this.state.salutationSt2==="" && this.state.step===2){ //Salutation
  errorSt2=true
  this.setState({
    errorSalutationSt2:true
  })
}

if(this.state.genderSt2==="" && this.state.step===2){//Gender
  errorSt2=true
  this.setState({
    errorGenderSt2:true
  })
}

if(this.state.step===2){
if(this.state.firstNameSt2.length<2 || !this.state.firstNameSt2.match(/^[A-Za-z]+$/)){//first name step2
  errorSt2=true
  this.setState({
    errorFirstNameSt2:true
  })
}
}
if(this.state.step===2){
if(this.state.lastNameSt2.length<3 || !this.state.lastNameSt2.match(/^[A-Za-z]+$/)){//last name step2

  errorSt2=true
  this.setState({
    errorLastNameSt2:true
  })
}

}



if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.emailSt2) && this.state.step===2) {//email ST2EP
  errorSt2=true
  this.setState({
    errorEmailSt2:true
  })
}

if(this.state.step===2){


if(this.state.phoneNmbrSt2.length<9 || this.state.phoneNmbrSt2.length>15){//phone number stage2
  errorSt2=true
  this.setState({
    errorPhoneNmbrSt2:true
  })
}
}

if(this.state.zipCodeSt2.length!=5 && this.state.step===2){//phone number stage2
  errorSt2=true
  this.setState({
    errorZipCodeSt2:true
  })
}

if(this.state.stateSt2==="" && this.state.step===2){//state stage2
  errorSt2=true
  this.setState({
    errorStateSt2:true
  })
}

if(this.state.homeAddressSt2.length<10 && this.state.step===2){//home address stage2
  errorSt2=true
  this.setState({
    errorHomeAddressSt2:true
  })
}

if(this.state.contrySt2==="" && this.state.step===2){//contry stage2
  errorSt2=true
  this.setState({
    errorContrySt2:true
  })
}




/**STEP 3**/
let errorSt3=false;
if(this.state.cardNumberSt3.length<19 && this.state.step===3){//card number
  errorSt3=true;
  this.setState({
    errorCardNumberSt3:true
  })
}

if(this.state.cardCvcSt3.length<4 && this.state.step===3){//card CVC
  errorSt3=true;
  this.setState({
    errorCardCvcSt3:true
  })
}

if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.cardHolderNameSt3) && this.state.step===3) {//card holder name step3
  errorSt3=true
  this.setState({
    errorCardHolderNameSt3:true
  })
}


if(error===false&&this.state.step===1){
errorSt2=false
  this.setState({
    step:2,

  })

}


if(errorSt2===false && this.state.step===2){
  errorSt3=false
  this.setState({
    step:3
  })
}

if(errorSt3===false && this.state.step===3){
  this.setState({
    step:4
  })
}

if(this.state.step===4 && errorSt3===false){
  this.setState({
    step:5
  })
}

}


/***Previous Button***/
previousStep=(e)=>{
  e.preventDefault()
  this.setState(prevState =>
          ({step: prevState.step? prevState.step-1: 0})
      )
}

showPassword=(e)=>{
  e.preventDefault()
this.setState({
  eye:!this.state.eye
})

}
  render () {

  return(
    <>

    <div id="multistepFormSignUp">
      <div className="multiStepForm">
      <VerificationProcess
step={this.state.step}
      />
    <HeaderFormInformation step={this.state.step}/>
  <div id="steps">
    <form onSubmit={this.nextStep}>
    {
this.state.step===1&&
      <Step1

      eye={this.state.eye}
      showPassword={this.showPassword}
      errorEmailIdStep1={this.state.errorEmailIdStep1}
      errorConfirmPassword={this.state.errorConfirmPassword}
        errorPassword={this.state.errorPassword}
          errorUserName={this.state.errorUserName}
          inputChange={this.inputChange}
          userName={this.state.userName}
          password={this.state.password}
          confirmPassword={this.state.confirmPassword}
          emailIdStep1={this.state.emailIdStep1}
      />||

        this.state.step===2&& <Step2PersonalInfo
        states={this.state.states}
           inputChange={this.inputChange}
            salutationSt2={this.state.salutationSt2}
           genderSt2={this.state.genderSt2}
           firstNameSt2={this.state.firstNameSt2}
           lastNameSt2={this.state.lastNameSt2}
           emailSt2={this.state.emailSt2}
            phoneNmbrSt2={this.state.phoneNmbrSt2}
            zipCodeSt2={this.state.zipCodeSt2}
            stateSt2={this.state.stateSt2}
            homeAddressSt2={this.state.homeAddressSt2}
              contrySt2={this.state.contrySt2}
              errorSalutationSt2={this.state.errorSalutationSt2}
              errorGenderSt2={this.state.errorGenderSt2}
              errorFirstNameSt2={this.state.errorFirstNameSt2}
              errorLastNameSt2={this.state.errorLastNameSt2}
              errorEmailSt2={this.state.errorEmailSt2}
              errorPhoneNmbrSt2={this.state.errorPhoneNmbrSt2}
              errorZipCodeSt2={this.state.errorZipCodeSt2}
              errorStateSt2={this.state.errorStateSt2}
              errorHomeAddressSt2={this.state.errorHomeAddressSt2}
              errorContrySt2={this.state.errorContrySt2}
           />||

this.state.step===3&&<Step3Payment
beforeMaskedValueChangeCvc={this.beforeMaskedValueChangeCvc}
inputChange={this.inputChange}
beforeMaskedValueChange={this.beforeMaskedValueChange}
cardTypeSt3={this.state.cardTypeSt3}
cardNumberSt3={this.state.cardNumberSt3}
cardCvcSt3={this.state.cardCvcSt3}
cardHolderNameSt3={this.state.cardHolderNameSt3}
cardExpiryMonthSt3={this.state.cardExpiryMonthSt3}
cardExpiryYearSt3={this.state.cardExpiryYearSt3}

errorCardTypeSt3={this.state.errorCardTypeSt3}
errorCardNumberSt3={this.state.errorCardNumberSt3}
errorCardCvcSt3={this.state.errorCardCvcSt3}
errorCardHolderNameSt3={this.state.errorCardHolderNameSt3}
errorCardExpiryMonthSt3={this.state.errorCardExpiryMonthSt3}
errorCardExpiryYearSt3={this.state.errorCardExpiryYearSt3}

/>|| this.state.step===4&&
<ConfirmDetails
userName={this.state.userName}
emailIdStep1={this.state.emailIdStep1}
genderSt2={this.state.genderSt2}
firstNameSt2={this.state.firstNameSt2}
lastNameSt2={this.state.lastNameSt2}
phoneNmbrSt2={this.state.phoneNmbrSt2}
zipCodeSt2={this.state.zipCodeSt2}
homeAddressSt2={this.state.homeAddressSt2}
contrySt2={this.state.contrySt2}
cardTypeSt3={this.state.cardTypeSt3}

/>

    }

{/* <ConfirmDetails/> */}
<Buttons
step={this.state.step}
previousStep={this.previousStep}
/>
    </form>
{this.state.step===5&&<SuccessForm/>}
  </div>

      </div>
    </div>
    </>
  )
  }
}

export default MultistepForm;
