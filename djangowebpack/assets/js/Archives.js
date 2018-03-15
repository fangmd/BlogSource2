import React from 'react';
import './Archives.css';
import SideBar2 from './SideBar2';
import ArchiveList from './ArchiveList';

var axios = require('axios');

export default class Archives extends React.Component{



	render(){
		return (
	      <div class="archives-container">
	        <SideBar2 />
	        <ArchiveList />
	      </div>
		);
	}
}

