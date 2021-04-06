import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

class Buttons extends React.Component {
  render () {
  return(
    <>
    {this.props.step===5?"":<div className="formButtons">
      <div className="btn">
        {
          this.props.step===1?"":<button onClick={this.props.previousStep} className="btn-previus"> <span className="previousSpan">Personal information</span><span className="previousIcon"><i className="fas fa-chevron-circle-left"></i></span> Prev step</button>
    }
      </div>
      <div className="btn">
    <button onClick={this.props.nextStep} className="btn-next">{this.props.step===4?"Submit":"Next step"}<span className="nextSpan">Personal information</span> <span className="nextIcon"><i className="fas fa-chevron-circle-right"></i></span> </button>
    </div>
        </div>}

    </>
  )
  }
}

export default Buttons;
