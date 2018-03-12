import React from 'react';
import ReactDom from 'react-dom';
import './Article.css'
import Footer from './Footer';

require('github-markdown-css')

var axios = require('axios');
var ReactMarkdown = require('react-markdown')

class Article extends React.Component{

	constructor(props){
    	super(props);
    	const url = "http://127.0.0.1:8000/v1/api/article/" + this.props.match.params.id + "/"
    	this.state = {
    		source: url,
      	article: {body:"", last_modified_time: ""}
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
    var dateStr = this.state.article.last_modified_time.replace(/T/g, ' ')
    dateStr = dateStr.replace(/Z/g, ' ')

		return (
			<div class='article-content'>

      <header class='article-header'>
        <div class='container'>
          <h1 class='article-header-title'> {this.state.article.title}
            <p class='article-header-subtitle'> Posted on {dateStr} </p>
          </h1>
        </div>

      </header>

      <article class='markdown-body'>
        <div class='container'>

           <ReactMarkdown source={this.state.article.body} />

        </div>
      </article>

      <Footer />

			</div>
		)
	}
}




export default Article;