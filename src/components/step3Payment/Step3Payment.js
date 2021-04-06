import React from 'react'
import PropTypes from 'prop-types'
import InputMask from 'react-input-mask';
import './style.css'

class Step3Payment extends React.Component {


  render () {
let {cardTypeSt3,
  cardNumberSt3,
  cardCvcSt3,
  cardHolderNameSt3,
cardExpiryMonthSt3,
cardExpiryYearSt3,
errorCardTypeSt3,
errorCardNumberSt3,
errorCardCvcSt3,
errorCardHolderNameSt3,
errorCardExpiryMonthSt3,
errorCardExpiryYearSt3}=this.props
let now=new Date();
let year = now.getFullYear()
  return (
    <>
  <div className="step3Payment">
    <div>
    <div className="select">
      <div className="selectBox">
        <div className="label">
    Card type
        </div>
        <div className="selectOption">
        <select
          name="cardTypeSt3"
          onChange={this.props.inputChange}
          value={cardTypeSt3}>
            <option value="Visa">Visa</option>
          <option value="Master">Master Card</option>
          </select>
</div>
      </div>
    </div>
    </div>
    <div>
    <div className="inputs">
      <div className="input">
        <div className="label">
          Card number
        </div>
        <InputMask
          name="cardNumberSt3"
          mask="9999-9999-9999-9999"
          maskChar={null}
          value={cardNumberSt3}
           placeholder="Number"
           onChange={this.props.inputChange}
beforeMaskedValueChange={this.props.beforeMaskedValueChange}
         />
       {errorCardNumberSt3&&  <div className="errorInput">
           <p>Please enter your Card Number</p>
           <p><i class="fas fa-lock"></i> Your information in Safe here &amp; never shared</p>
           </div>}
      </div>
      <div className="input">
        <div className="label">
          CVC
        </div>
        <InputMask
            mask="9999"
          maskChar={null}
          beforeMaskedValueChangeCvc={this.props.beforeMaskedValueChangeCvc}
           placeholder="Cvc"
           name="cardCvcSt3"
           value={cardCvcSt3}
           onChange={this.props.inputChange}
         />
       {errorCardCvcSt3&&  <div className="errorInput">
             <p>Please enter your Card CVC</p>
             <p><i class="fas fa-lock"></i> Your information in Safe here &amp; never shared</p>
             </div>}
      </div>
    </div>
      </div>
      <div>
      <div className="inputs">
        <div className="input">
          <div className="label">
          Card holder name
          </div>
          <input
            type="email"
            placeholder="Please enter your email ID"
            name="cardHolderNameSt3"
            value={cardHolderNameSt3}
            onChange={this.props.inputChange}
          />
        {errorCardHolderNameSt3&&  <div className="errorInput">
                <p>Please enter your Card Holder Name (Email)</p>
                <p><i class="fas fa-lock"></i> Your information in Safe here &amp; never shared</p>
                </div>}
      <div className="icon"><i className="fas fa-user-tie"></i></div>
        </div>
      </div>
      </div>
      <div>
      <div className="select">
        <div className="selectBox">
        <div className="label">
        Expiry month
        </div>
          <div className="selectOption">
        <select value={cardExpiryMonthSt3} name="cardExpiryMonthSt3"onChange={this.props.inputChange}>
            {[...Array(12)].map((x, i) =>
                  <option value={i+1}>{i+1}</option>
            )}

          </select>
          {errorCardExpiryMonthSt3&&  <div className="errorInput">
                  <p>Please enter your Username</p>
                  <p><i class="fas fa-lock"></i> Your information in Safe here &amp; never shared</p>
                  </div>}
              </div>
              </div>
              <div className="selectBox">
              <div className="label">
              Expiry year
              </div>
              <div className="selectOption">
              <select value={cardExpiryYearSt3} name="cardExpiryYearSt3" onChange={this.props.inputChange}>

                  {[...Array(10)].map((x, i) =>
                        <option value={year+i}>{year+i}</option>
                  )}

                </select>
                {errorCardExpiryYearSt3&&  <div className="errorInput">
                        <p>Please enter your Username</p>
                        <p><i class="fas fa-lock"></i> Your information in Safe here &amp; never shared</p>
                        </div>}
                    </div>
                      </div>
      </div>
      </div>
  </div>
    </>
  )
  }
}

export default Step3Payment;
