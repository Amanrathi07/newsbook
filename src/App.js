import React, { Component } from 'react'
import Navbar from './container/Navbar'
import Newsbox from './container/Newsbox'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar  title="newsBook"/>
        <Newsbox />
      </div>
    )
  }
}
