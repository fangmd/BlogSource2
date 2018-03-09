import './sytles/pure-min.css';
import './sytles/grids-responsive-min.css';
import './sytles/base.css';


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import About from './About';
import Blog from './Blog';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router-dom";




var axios = require('axios');

class App extends React.Component{

	constructor(props){
    super(props);
    this.state = {
    	source: "http://localhost:8000/v1/api/users/",
      users:[],
			date: new Date(),
    };
	}

	componentDidMount() {
		var th = this;
		this.serverRequest = axios.get(this.state.source)
      .then(function(result) {
      	console.log(result);
        th.setState({
        	source: "11",
          users: result.data,
        });
      })
  }

  render() {
    return (
      <div className="home" >

      <img id="backgroundimage" src="/static/home-bg01.jpeg" border="0" alt=""/>

      <div>

      	<div class="profile">

      		<div class="sidebar_index">
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

            <p>{this.state.date.toLocaleTimeString()}</p>


					</div>

      	</div>

      </div>

      </div>
    );
  }
}

          // {this.state.users.map(user =>
          //   <h2> {user.username} -- {user.url} </h2>
          // )}

ReactDOM.render(
  <Router >

    <Switch>
      <Route path='/about' component={About}/>
      <Route path='/blog' component={Blog}/>
      <Route path='/' component={App}/>
    </Switch>
  </Router>,
  document.getElementById('app')
);
