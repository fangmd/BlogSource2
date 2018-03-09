import React from 'react';
import ReactDOM from 'react-dom';
import SideBar from './SideBar';
import BlogList from './BlogList';
// import './SideBar.css'

class Blog extends React.Component{

	render(){
		return(
			<div class="blog pure-g">

				<SideBar />
				<BlogList />

			</div>
		);
	}
}

//pure-u-1 pure-u-md-1-4 pure-u-md-3-4

//

export default Blog;
