import React from 'react';
import './ArchivesItem.css';



export default class ArchivesItem extends React.Component{

	constructor(props){
		super(props)


	}

	render(){
		return (
			<ul>
      	{this.state.articles.map( article =>
        	<li>
        		<time>{article.last_modified_time}</time>
        		<a href="">{article.title}</a>
        	</li>
      	)}
			</ul>
		);
	}
}