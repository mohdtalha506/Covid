import React from 'react'
import StatewiseData from './components/StatewiseData'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './components/Home'
import Search from './components/Search'
import Region from './components/Region'
import Countries from './components/Countries'
import AllRoutes from './components/AllRoutes'

const App = () => {
 
  return (
    <> 
     <AllRoutes/>
    </>
  )
}

export default App