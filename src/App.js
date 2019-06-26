import React,{Component} from 'react';
import './App.css';
import'./footer.css';
// import './clock.css'
import {BrowserRouter, Route} from 'react-router-dom';
import content from './component/content';
// import Clock from './component/clock';
class shownWeb extends Component{
	render() { 
		return (
			<div>
				<BrowserRouter>
					<Route exact path= '/' component = {content}/>
					{/* <Route exact path= '/' component = {Clock}/> */}
				</BrowserRouter>
			</div>
		);
	} 
}

export default shownWeb ;