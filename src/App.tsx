import React from 'react'
import Sidebar from './sidebar/Sidebar'
import MainSection from './sidebar/MainSection/MainSection'
import './App.css'

function App() {
	return (
			<div className='app'>
				<Sidebar />
				<MainSection />
		</div>
	)
}

export default App
