import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import'./footer.css';
// import Clock from './component/clock';
ReactDOM.render(<App />, document.getElementById('app'));
// ReactDOM.render(<Clock />,document.getElementById('dateTime'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
