import React,{Component} from 'react';
import './App.css';
import { Button } from 'reactstrap';
import {BrowserRouter, Route} from 'react-router-dom';
import content from './component/content';
import Introduce from './component/introduce';
import Help from './component/help';
import Contact from './component/contact';
import  Errorpage  from './component/errorPage';
import Menu from './component/menu';
import Detail from './component/detail';
import { Switch} from 'react-router-dom'
class shownWeb extends Component{
	
	render() { 
		return (
			<div>
				<BrowserRouter>
					<Route  path= '/' exact component = {content}/>
					<Route  path= '/introduce' exact component = {Introduce}/> 
					<Route  path= '/help' exact component = {Help}/> 
					<Route path= '/contact' exact component = {Contact}/> 
					<Route path= '/errorPage' exact component = { Errorpage }/>
					<Route path= '/menu' exact component = { Menu }/>
					<Route path='/detail/:id' exact component={Detail} />
					
					{/* path:'/detail/:id',
					exact:false,
					main: ({match}) => <Detail match={match}/> */}
				</BrowserRouter>
				
			</div>
		);
	} 
}


export default shownWeb ;