import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import'./css/Page7.css'




export default class Page7 extends Component {
  render() {
    return (
      <>
        <div id="header">
            <div className='logo'>
                My Project Logo
            </div>
        </div>
        <div id="section">
            <div className='card'>
                <img src="images/img1.png" alt="image1"></img>
                <label>Profile</label>
            </div>
            <div className='card'>
                <img src="images/img2.jpeg" alt="image2"></img>
                <label>insta</label>
            </div>
            <div className='card'>
                <img src="images/img3.jpeg" alt="image3"></img>
                <label>png</label>
            </div>
        </div>
        <div id="footer">
            copyright @ 2025 All rights reserved
        </div>
      </>
    )
  }
}
