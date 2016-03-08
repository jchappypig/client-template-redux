import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import style from './style.css'

class App extends Component {
  render() {
    return (
      <div className={style.normal}>
        Hello
      </div>
    )
  }
}

export default App
