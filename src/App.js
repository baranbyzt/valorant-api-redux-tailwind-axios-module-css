""
// import'./style/GeneralStyle.css'
// import style from './style/HeaderComponent.module.css'

import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

// Pages
import AgentsPage from './pages/AgentsPage'
import MapsPage from './pages/MapsPage'
import WeaponryPage from './pages/WeaponryPage'
import ErrorPage from './pages/ErrorPage'
import OpeningPage from './pages/OpeningPage'

// components
import HeaderComponent from './components/HeaderComponent'

function App() {

  return (

<Router>
<HeaderComponent/>
  <Routes>
  <Route  path='/' element={<OpeningPage/>} />
  <Route  path='/weapons' element={<WeaponryPage/>} />
  <Route  path='/agents' element={<AgentsPage/>} />
  <Route  path='/maps' element={<MapsPage/>} />
  <Route  path='*' element={<ErrorPage/>} />
  </Routes>
</Router>

  );
}

export default App;
