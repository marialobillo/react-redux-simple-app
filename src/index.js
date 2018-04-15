import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

const reducer = (state, action) => {
	var nuevoEstado = Object.assign({}, state);
	if(action.type === 'AUM'){
		 console.log("dentro del reducer con el action.type === AUM");
		 nuevoEstado.cantidad = state.cantidad + 1;
		 return nuevoEstado;
	} else if(action.type === 'DIS'){
		nuevoEstado.cantidad = state.cantidad - 1;
		return nuevoEstado;
	}
	return state;
}

const state = { cantidad : 2 };

const store = createStore(reducer, state);

ReactDOM.render(
	// Implementar el Provider
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
