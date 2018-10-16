import React, {Component} from 'react'
import Greeting from './components/Greeting'
import ExampleComponent from './components/ExampleComponent'
import Button from './components/Button'

class App extends Component {
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(res => res.json)
      .then(res => console.log(res))
  }

  render() {
    return (
      <div>
        <Greeting />
        <ExampleComponent />
        <Button />
      </div>
    )
  }
}

export default App
