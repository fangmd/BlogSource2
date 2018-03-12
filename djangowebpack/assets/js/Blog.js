import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './SideBar';
import BlogList from './BlogList';

import './Blog.css';


class Blog extends React.Component{

	render(){
		return(
			<div class="blog pure-g">

				<SideBar />
				<BlogList pageIndex = {this.props.match.params.id}/>

			</div>
		);
	}
}

// content
//sideBar:pure-u-1 pure-u-md-1-4
//BlogList: pure-u-1 pure-u-md-3-4

//

export default Blog;
