import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Switch } from 'react-router'





class About extends React.Component{
	render() {
		return(
			<div className="About">
				<h1> About </h1>
			</div>
		);
	}
}


class Home extends React.Component {
  render() {
    return (
      <div className="home" >

    
      <img id="backgroundimage" src="/static/imgs/home-bg01.jpeg" border="0" alt=""/>

      <div>

      	<div class="profile">

      		<div class="avatar">
						<a href="#open"> <img src="/static/imgs/avatar.jpg" class="z-depth-4"/> </a>				
						<p>FangMingDong</p>
						<p>Android dev</p>
					</div>

      		<div class="short-line"></div>      

      		<ul class="nav">
      			<li class="nav-blog"> <a href="/blog"> Blog </a> </li>
      			<li class="nav-blog"> <a href="/about"> About </a> </li>
      			<li class="nav-blog"> <a href="/archives"> Archives </a> </li>
      		</ul>

      	</div>

      </div>
     
      </div>
    );
  }
}

// React.render((
//   <Router>
//     <Route path="/" component={Home}>
//       <Route path="about" component={About} />
//     </Route>
//   </Router>
// ), document.body)

ReactDOM.render(
	<Router >
		<Route path="about" component={About}/>
		<Route path='/' component={Home}/>
  </Router>,
  document.getElementById('root')
);


// ReactDOM.render(
// 	<Router>
// <Switch>
// <Route path="/about" component={About}/>
// 		<Route path='/' component={Home}>
			
// 		</Route>  


// </Switch>
// </Router>,
//   document.getElementById('root')
// );








