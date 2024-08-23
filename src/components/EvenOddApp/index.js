import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    const randomValue = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + randomValue}))
  }

  evenOrOdd = () => {
    const {count} = this.state
    if (count % 2 === 0) {
      return 'Even'
    }
    return 'Odd'
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="detailed-card">
          <h1 className="counter">Count {count}</h1>
          <p className="result">Count is {this.evenOrOdd()}</p>
          <button className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
