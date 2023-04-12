import React from 'react'
import StatewiseData from './components/StatewiseData'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search'
import Region from './components/Region'
import Countries from './components/Countries'


const App = () => {
  return (
    <>
     <BrowserRouter>
     
      <Navbar />
     
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/countries' element={<Countries/> }/>
          <Route path='/region' element={<Region /> }/>
          <Route path='/state' element={<StatewiseData /> }/>
          <Route path='/search' element={<Search /> }/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App