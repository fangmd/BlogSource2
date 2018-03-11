import React from 'react';
import ReactDom from 'react-dom';

import './Article.css'

var axios = require('axios');

class Article extends React.Component{

	constructor(props){
    	super(props);
    	const url = "http://127.0.0.1:8000/v1/api/article/" + this.props.match.params.id + "/"
    	this.state = {
    		source: url,
      	article: {body:""}
    	};
	}

	componentDidMount() {
		var th = this;
		this.serverRequest = axios.get(this.state.source)
      .then(function(result) {
      	console.log(result);
        th.setState({        	
          article: result.data,
        });
      })
  }

  _getBody(){
  	let ret = "";
  	if(this.state.article !== undefined){
  		ret = this.state.article.body
  	}
  	return ret;
  }

	render(){
		
		return (
			<div class='article-content'>
				<h1> content </h1>
				<h1> {this.props.match.params.id}</h1>


				<p>{this.state.article.body}</p>

			</div>
		)
	};
}


export default Article;