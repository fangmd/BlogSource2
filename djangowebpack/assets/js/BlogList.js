import React from 'react';
import ReactDom from 'react-dom';
import './BlogList.css';
import BlogItem from './BlogItem';

var axios = require('axios');

class BlogList extends React.Component{

	constructor(props){
    	super(props);
    	this.state = {
    		source: "http://127.0.0.1:8000/v1/api/article/",
      	articles:[]
    	};
	}

	componentDidMount() {
		var th = this;
		this.serverRequest = axios.get(this.state.source)
      .then(function(result) {
      	console.log(result);
        th.setState({        	
          articles: result.data.results,
        });
        th.props.next = result.data.next
        th.props.pre = result.data.prevous
     })
  }

	render(){
		return (
			<div class="content pure-u-1 pure-u-md-3-4">

			  {this.state.articles.map( article =>
          <BlogItem article={article}/>
        )}
				
			</div>
		);
	}
}

export default BlogList;