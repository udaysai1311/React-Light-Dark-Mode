import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {
    isTrue: false,
    text: 'Dark Mode',
    className: 'card',
    head: 'heading',
  }

  changeButton = () => {
    this.setState(prevState => ({isTrue: !prevState.isTrue}))
  }

  getButton = () => {
    const {isTrue, text, className, head} = this.state
    if (isTrue === true) {
      console.log(1)
      return {text: 'Dark Mode', className: 'card', head: 'heading'}
    }
    console.log(0)
    return {text: 'Light Mode', className: 'card1', head: 'heading1'}
  }

  render() {
    const {text, className, head} = this.getButton()

    return (
      <div className="bg">
        <div className={className}>
          <h1 className={head}>Click To Change Mode</h1>
          <button className="button" onClick={this.changeButton}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
