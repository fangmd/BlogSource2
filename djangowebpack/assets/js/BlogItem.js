import React from 'react';
import ReactDom from 'react-dom';

import './BlogItem.css';

class BlogItem extends React.Component{

	render(){
		return (
			<div class="blog-item">
				
				<a class="readmore" href={'/article/' + this.props.article.id}></a>
				
				<div class="item-header">
					<p>{this.props.article.title}</p>
					<span><i class="fa fa-calendar"></i> {this.props.article.last_modified_time}</span>
				</div>
				<div class="item-content">
					{this.props.article.body.substring(0, 600)}
				</div>
				
			</div>
		)
	};
}

export default BlogItem;