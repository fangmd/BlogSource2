import React from 'react';
import ReactDOM from 'react-dom';
import './sytles/pure-min.css'
import './index.css';

import About from './About';
import Blog from './Blog';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

var axios = require('axios');

class App extends React.Component{

	constructor(props){
    super(props);
    this.state = {
    	source: "http://localhost:8000/v1/api/users/",
			users: [],
			date: new Date()
    };
	}

	componentDidMount() {
		var th = this;
		this.serverRequest = axios.get(this.state.source)
      .then(function(result) {
      	console.log(result);
        th.setState({
        	source: "11",
          
        });
      })
  }

  render() {
    return (
      <div className="home" >

      <img id="backgroundimage" src="/static/home-bg01.jpeg" border="0" alt=""/>

      <div>

      	<div class="profile">

      		<div class="sidebar">
						<a href="#open"> <img src="/static/avatar.jpg"/> </a>

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

            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>

            <h2>It is {this.state.users[0]}.</h2>

            {this.state.users.map(function(user) {

  						return  <div> user.username </div>;

        		})}

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
  	<Route path='/' component={App}/>
  </Router>,
  document.getElementById('app')
);