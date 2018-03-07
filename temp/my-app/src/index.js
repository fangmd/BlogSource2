import React from 'react';
import ReactDOM from 'react-dom';
import './sytles/pure-min.css'
import './index.css';
import About from './About';
import Blog from './Blog';



import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from 'react-router'



class Home extends React.Component {
  render() {
    return (
      <div className="home" >

      <img id="backgroundimage" src="/static/imgs/home-bg01.jpeg" border="0" alt=""/>

      <div>

      	<div class="profile">

      		<div class="sidebar">
						<a href="#open"> <img src="/static/imgs/avatar.jpg" class="z-depth-4"/> </a>
						<p>FangMingDong</p>
						<p>Android dev</p>

            <div>
              <ul class="nav pure-menu pure-menu-horizontal pure-menu-list">
                <li class="pure-menu-item nav-item"> <a href="/blog" class="pure-menu-link"> Blog </a> </li>
                <li class="nav-item pure-menu-item"> <a href="/about" class="pure-menu-link"> About </a> </li>
                <li class="nav-item pure-menu-item"> <a href="/archives" class="pure-menu-link"> Archives </a> </li>
              </ul>
            </div>

            <div class="short-line"></div>

            <div>
              <ul class="nav pure-menu pure-menu-horizontal pure-menu-list">
                <li class="pure-menu-item nav-item"> <a href="/blog" class="pure-menu-link"> temp </a> </li>
              </ul>
            </div>

					</div>

      	</div>

      </div>

      </div>
    );
  }
}

// <Route path='/about' component={About}/>
// <Route path='/blog' component={Blog}/>


ReactDOM.render(
	<Router >


    <Route path='/' component={Home}/>

  </Router>,
  document.getElementById('root')
);











