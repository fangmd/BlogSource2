import React from 'react';
import ReactDom from 'react-dom';
import './BlogList.css';
import BlogItem from './BlogItem';

var axios = require('axios');

function my_nav(props){
  const nextPage = new Number(this.props.pageIndex) + 1
  const prePage = new Number(this.props.pageIndex) - 1
  return (<h1> Title </h1>);
  if(props.pageIndex == 0){
    return (
        <nav class="pagination" role="navigation">
          <a class="btn-floating disabled"><i class="fa fa-angle-left"></i></a>
          <span class="page-number">{this.props.pageIndex} / {this.state.totalPageCnt}</span>
          <a class="btn-floating waves-effect red" href={"/blog/" + nextPage + "/"}><i class="fa fa-angle-right"></i></a>
        </nav>
      );
  }else{
    return(
        <nav class="pagination" role="navigation">
          <a class="btn-floating waves-effect red" href={"/blog/" + prePage + "/"}><i class="fa fa-angle-left"></i></a>
          <span class="page-number">{this.props.pageIndex} / {this.state.totalPageCnt}</span>
          <a class="btn-floating waves-effect red" href={"/blog/" + nextPage + "/"}><i class="fa fa-angle-right"></i></a>
        </nav>
      );
  }
  
}

class BlogList extends React.Component{

	constructor(props){
    	super(props);

      var url = "http://127.0.0.1:8000/v1/api/article/?limit=10"
      if(this.props.pageIndex == undefined || this.props.pageIndex == 0){
        this.props.pageIndex = 1
      }else{
        const offset = new Number(this.props.pageIndex) * 10
        url = "http://127.0.0.1:8000/v1/api/article/?limit=10&offset=" + offset
      }
    	this.state = {
    		source: url,
      	articles:[],
        totalPageCnt: 0,
    	};
	}

	componentDidMount() {
		var th = this;
		this.serverRequest = axios.get(this.state.source)
      .then(function(result) {
      	console.log(result);
        th.setState({
          articles: result.data.results,
          totalPageCnt: ~~(result.data.count / 10) + 1,
        });
     })
  }

	render(){
    const nextPage = new Number(this.props.pageIndex) + 1
    const havePre = !(this.props.pageIndex <= 1)
    const prePage = this.props.pageIndex - 1
    this.props.nextPage = nextPage;

    var navMy;
    if(havePre){
      navMy = <nav class='pagination' role='navigation'>
          <a class='btn-floating waves-effect red' href={'/blog/' + prePage + '/'}><i class='fa fa-angle-left'></i></a>
          <span class='page-number'>{this.props.pageIndex} / {this.state.totalPageCnt}</span>
          <a class='btn-floating waves-effect red' href={'/blog/' + nextPage + '/'}><i class='fa fa-angle-right'></i></a>
        </nav>
    }else{
      navMy = <nav class='pagination' role='navigation'>
          <a class='btn-floating disabled'><i class='fa fa-angle-left'></i></a>
          <span class='page-number'>{this.props.pageIndex} / {this.state.totalPageCnt}</span>
          <a class='btn-floating waves-effect red' href={'/blog/' + nextPage + '/'}><i class='fa fa-angle-right'></i></a>
        </nav>
    }

		return (
			<div class="content pure-u-1 pure-u-md-3-4">

			  {this.state.articles.map( article =>
          <BlogItem article={article}/>
        )}

        {navMy}
        
			</div>
		);
	}
}

// pure-u-1 pure-u-md-3-4

export default BlogList;