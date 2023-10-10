import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Countries from './Countries'
import Region from './Region'
import StatewiseData from './StatewiseData'
import Search from './Search'
import Navbar from './Navbar'

const AllRoutes = () => {
     return (
        <>
            <BrowserRouter>

                <Navbar />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/countries' element={<Countries />} />
                    <Route path='/region' element={<Region />} />
                    <Route path='/state' element={<StatewiseData />} />
                    <Route path='/search' element={<Search />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AllRoutes