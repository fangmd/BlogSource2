import React from 'react';
import ReactDom from 'react-dom';
import './SideBar.css';

class SideBar2 extends React.Component{


	render(){
		return(
			<div class="sidebar pure-u-1 pure-u-md-1-4">

				<a href="/"> <img src="/static/avatar.jpg"/> </a>

				<p>FangMingDong</p>
				<p>Android dev</p>

				<p><a href="/blog">Blog</a></p>
				<p><a href="/archives">Archives</a></p>
				<p><a href="/about">About</a></p>

			</div>

		);
	}
}

export default SideBar2;
