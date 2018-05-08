// import './sytles/pure-min.css';
// import './sytles/grids-responsive-min.css';
import './sytles/base.css';


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import About from './About';
import Blog from './Blog';
import Article from './Article';
import Archives from './Archives';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router-dom";


import CssLearn from './cssLearn/CssLearn';


var axios = require('axios');

class App extends React.Component{

	constructor(props){
    super(props);
    this.state = {
    	source: "http://127.0.0.1:8000/v1/api/users/",
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
      <div class="container" >

        <img id="backgroundimage" class="blur" src="/static/home-bg01.jpg" border="0" alt=""/>

        	<div class="home-profile">

  						<a href="/"> <img src="/static/avatar.jpg"/> </a>

  						<p class="home-title">FangMingDong</p>

  						<p class="home-subtitle">Android Developer / Java</p>

              <div class="short-line"/>

              <p class="home-menu-item"><a href="/blog"> Blog </a></p>
              <p class="home-menu-item"><a href="/about"> About </a></p>
              <p class="home-menu-item"><a href="/archives"> Archives </a></p>

              <div class="short-line"/>


        </div>

      </div>
    );
  }
}

// <div class="short-line"></div>
            // <div>
            //   <ul class="nav pure-menu pure-menu-horizontal pure-menu-list">
            //     <li class="pure-menu-item nav-item"> <a href="/blog" class="pure-menu-link"> temp </a> </li>
            //   </ul>
            // </div>

ReactDOM.render(
  <Router >

    <Switch>
      <Route path='/csslearn' component={CssLearn}/>

      <Route path='/about' component={About}/>
      <Route path='/archives' component={Archives}/>

      <Route path='/blog/:id' component={Blog}/>
      <Route path='/blog/' component={Blog}/>

      <Route path='/article/:id' component={Article}/>
      <Route path='/' component={App}/>

      
    </Switch>
  </Router>,
  document.getElementById('app')
);
