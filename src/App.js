import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
				</header>
				<p className="App-intro">
					{this.props.informacion}
					<br />
					<button onClick={this.props.aumentar}>Aumentar</button>
					<button onClick={this.props.disminuir}>Disminuir</button>
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
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
		informacion: state.cantidad
	}
}

// asume que las funciones internas son action creators
// y que al ingresarlas a nuestro componente las engloba en DISPATCH
// para que puedan ser llamadas como un distpatch
const mapDispatchToProps = {
	aumentar: () => { return { type: 'AUM'}},
	disminuir: () => { return { type: 'DIS' }}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
