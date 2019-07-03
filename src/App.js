import React,{Component} from 'react';
import './App.css';
import { Button } from 'reactstrap';
import {BrowserRouter, Route} from 'react-router-dom';
import content from './component/content';
import Introduce from './component/introduce';
import Help from './component/help';
import Contact from './component/contact';
import Slider from './component/slider';
// import Clock from './component/clock';
class shownWeb extends Component{
	
	render() { 
		return (
			<div>
				<BrowserRouter>
					<Route exact path= '/' component = {content}/>
					<Route exact path= '/introduce' component = {Introduce}/> 
					<Route exact path= '/help' component = {Help}/> 
					<Route exact path= '/contact' component = {Contact}/> 
				</BrowserRouter>
			</div>
		);
	} 
}

export default shownWeb ;