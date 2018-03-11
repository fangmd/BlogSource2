import React from 'react';
import ReactDom from 'react-dom';
import './SideBar.css';

class SideBar extends React.Component{


	render(){
		return(
			<div class="sidebar pure-u-1 pure-u-md-1-4">

				<a href="/"> <img src="/static/avatar.jpg"/> </a>

				<p>FangMingDong</p>
				<p>Android dev</p>

            	<div>
              		<ul class="nav pure-menu pure-menu-horizontal pure-menu-list">
                		<li class="pure-menu-item nav-item"> <a href="/blog" class="pure-menu-link"> Blog </a> </li>
                		<li class="nav-item pure-menu-item"> <a href="/about" class="pure-menu-link"> About </a> </li>
                		<li class="nav-item pure-menu-item"> <a href="/archives" class="pure-menu-link"> Archives </a> </li>
              		</ul>
            	</div>

			</div>

		);
	}
}

export default SideBar;