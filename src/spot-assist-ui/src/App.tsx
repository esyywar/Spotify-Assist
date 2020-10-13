import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from './components/navigation/NavBar'

function App() {
	return (
		<div className="container">
			<Router>
				<NavBar />
				<div className="App">Content Incoming</div>
			</Router>
		</div>
	)
}

export default App
