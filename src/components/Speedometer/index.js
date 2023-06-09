// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onApply = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="Container">
        <h1 className="heading">SPEEDOMETER</h1>

        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />

        <h1 className="sub-heading">Speed is 0mph{speed} mph</h1>

        <p className="paragraph">Min Limit is 0mph, Max Limit is 200mph </p>

        <div>
          <button type="button" className="button" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button type="button" className="button1" onClick={this.onApply}>
            Apply Brake{' '}
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
