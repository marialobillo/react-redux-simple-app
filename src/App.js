import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

class App extends Component {
	agregarTarea = (evento) => {
		if(evento.which === 13){
			console.log(evento.target.value);
			this.props.agregar(evento.target.value, this.props.id);
		}
	}
	render() {
		const elementosTareas = this.props.tareas.map((tarea) => {
			return <h2 key={tarea.id}>{tarea.tarea}</h2>;
		})
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<div className="App-intro">
					{this.props.informacion}
					<br />
					<button onClick={this.props.aumentar}>Aumentar</button>
					<button onClick={this.props.disminuir}>Disminuir</button>
					<br />
					<input type="text" onKeyPress={this.agregarTarea.bind(this)} id=""/>
					<br />
					{elementosTareas}
					<br />
					To get started, edit <code>src/App.js</code> and save to reload.
				</div>
			</div>
		);
	}
}

// internamente hace una subscription y un get state
// por lo que conatantemente en case de un cambio en el STATE se actualiza
// o se ejecuta nuevamente
// function
const mapStateToProps = (state) => {
	return {
		informacion: state.numero,
		tareas: state.tareas,
		id: state.id
	}
}

// asume que las funciones internas son action creators
// y que al ingresarlas a nuestro componente las engloba en DISPATCH
// para que puedan ser llamadas como un distpatch
const mapDispatchToProps = (dispatch) => {
	return {
		aumentar: () => { dispatch(
			(dispatch) => {
				return dispatch( { type: 'AUM'} )
			}
		); },
		disminuir: () => { dispatch({ type: 'DIS' }); },
		// disminuir: () => { dispatch({ type: 'DIS' }); },

		agregar: (tarea, id) => { dispatch( { type: 'ADD', tarea, id}); }
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
