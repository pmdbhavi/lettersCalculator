import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputCount: 0}

  onCount = event => {
    this.setState({inputCount: event.target.value.length})
  }

  render() {
    const {inputCount} = this.state
    return (
      <div className="main-container">
        <div className="con1">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label htmlFor="input" className="label">
            Enter the phrase
          </label>
          <input
            id="input"
            type="text"
            placeholder="Enter the phrase"
            className="input"
            onChange={this.onCount}
          />
          <p className="para">No.of letters: {inputCount}</p>
        </div>
        <div className="con2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
