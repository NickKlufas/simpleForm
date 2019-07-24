import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import formReducer from './reducers/form-reducer';

const allReducers = combineReducers({
	form: formReducer
});

const store = createStore(
	allReducers, 
	{
		form: [{ name: 'Nick'}]
	},
	window.devToolsExtension && window.devToolsExtension()
	);

console.log(store.getState());

ReactDOM.render(<Provider store={store}> <App aRandomProps="whatever" /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
