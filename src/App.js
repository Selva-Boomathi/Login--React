import {Component} from 'react'

import Welcome from './component/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  renderButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === false) {
      return <button type="button">LogIn</button>
    }
    return <button type="button">LogOut</button>
  }

  render() {
    return (
      <div className="container">
        <Welcome greeting="Hello!" name="User" />
        {this.renderButton()}
      </div>
    )
  }
}

export default App
