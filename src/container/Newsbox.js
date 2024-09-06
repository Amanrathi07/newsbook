import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class newsbox extends Component {
  render() {
    return (<>

      <div className="container">
        <h2 className='mt-3'>Top-Headlins</h2>
        <div className="row mt-3">
          <div className='col-md-4'>
            <Newsitem title="title" description="description" />
          </div>
          <div className='col-md-4'>
            <Newsitem title="title" description="description"/>
          </div>
          <div className='col-md-4'>
            <Newsitem title="title" description="description"/>
          </div>
        </div>

      </div>
    </>
    )
  }
}
