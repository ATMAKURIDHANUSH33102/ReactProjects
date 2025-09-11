import React, { Component } from 'react'
import'./css/Page6.css'
import { Link } from 'react-router-dom'


export default class Page6 extends Component {
    constructor() {
    super();
    this.state = {index: 0, slideCount: 3};
    this.autoSlide = this.autoSlide.bind(this);
  }
  componentDidMount() {
    this.interval = setInterval(this.autoSlide, 3000);
  }
  autoSlide(){
    let nextIndex = (this.state.index + 1)  % this.state.slideCount;
    this.setState({index: nextIndex});
    document.getElementById("slideRef").style.transform = `translateX(-${nextIndex * 100}%)`;
  }
    menuClick(){
        const navlist=document.getElementById("navlist");
        navlist.classList.toggle("active");
    }

  render() {
    return (
      <div>
        <header>
      <nav>
        <div className='logo'>My Website</div>
        <ul id="navlist">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
        <div className='menu'onClick={()=>this.menuClick()}>&#9776;</div>
      </nav>
        </header>
        <section>
            <h1>Welcome to Responsive WebPage</h1>
            <p>This is an example page which can adopt any screen size</p>
            <div className='slider'>
                <div className='slides' id="slideRef">
                    <div className='slide s1'></div>
                    <div className='slide s2'></div>
                    <div className='slide s3'></div>
                </div>

            </div>
        </section>
        <footer>
            copyright @ 2025 All rights reserved
        </footer>

      </div>
    )
  }
}
