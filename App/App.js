import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './header'
import './App.css';
import Postlist from './postlist'
import data from './testData'

class App extends Component {
	state = {
		pageHeader: 'Naming posts',
		contests: []
	};
	componentDidMount() {
		this.setState({
			contests: data.contests
		}) 
	}
	componentWillMount() {
		
	}


  	render() {
	    return (
	    	<div className="App">
	    		<Header message={this.state.pageHeader}/>
	    		{this.state.contests.map(contest =>
	    			<Postlist key={contest.id} {...contest}/>
	    		)}

	    	</div>
	    );
  	}
}

export default App;
