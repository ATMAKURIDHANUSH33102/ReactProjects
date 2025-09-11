import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import'./css/Page2.css'


export default class Page2 extends Component {
  render() {
    return (
      <div className='main1'>
        <h1>It's Page 2</h1>
        <br /><br />
        <div id='text1'>
        <h3>Today is thursday</h3>
        <br /><br />
        </div>
        <br />
        <div className='link1'>
        <Link to="/Page1"> Go To Page1 </Link></div>
        <br /><br />
        <div className='link2'>
        <Link to="/"> Main Page </Link>
        </div>
        <br /><br />
      </div>
    )
  }
}
