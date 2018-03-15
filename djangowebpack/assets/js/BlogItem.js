import React from 'react';
import ReactDom from 'react-dom';

import './BlogItem.css';

class BlogItem extends React.Component{

	render(){
		var dateStr = this.props.article.last_modified_time.replace(/T/g, ' ')
    	dateStr = dateStr.replace(/Z/g, ' ')

		return (
			<div class="blog-item">


				<a class="readmore" href={'/article/' + this.props.article.id}></a>

				<div class="item-header">
					<p>{this.props.article.title}</p>
					<span><i class="fa fa-calendar"></i> {dateStr}</span>
				</div>
				<div class="item-content">
					<p>
					{this.props.article.body.substring(0, 600)}
					</p>

				</div>

			</div>
		)
	};
}

export default BlogItem;