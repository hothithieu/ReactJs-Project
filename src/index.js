import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
// import Clock from './component/clock';
import  Errorpage  from './component/errorPage';
import  Menu  from './component/menu';
ReactDOM.render(<App />, document.getElementById('app'));
// ReactDOM.render(<Clock />,document.getElementById('dateTime'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
