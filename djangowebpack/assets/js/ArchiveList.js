import React from 'react';
import './ArchiveList.css';

var axios = require('axios');

export default class ArchiveList extends React.Component{

	constructor(props){
    	super(props);
    	const url = "http://127.0.0.1:8000/v1/api/articles/?limit=100000"
    	this.state = {
    		source: url,
    		article: [],
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

  //::before

	render(){
		return(
			<div class="archive-list-container">
				<h1>Archives</h1>

				<div class="archives">

				<div class="archive-list-item">
					<h3>
						<i class="fa fa-calendar fa-fw" aria-hidden="true">

						</i>
						2018-03
					</h3>
					<ul class="archives-list list-2018-03">
						<li>
							<time>12日</time>
							<a href="">blog title></a>
						</li>
												<li>
							<time>12日</time>
							<a href="">blog title></a>
						</li>
					</ul>
				</div>

				</div>


			</div>
		);
	}
}