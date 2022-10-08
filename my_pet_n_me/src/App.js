import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Main from './pages/Main'
import Login from './pages/Login'
import Popup from './pages/VetPopup'
import Search from './pages/Search'
import Register from './pages/Register'
import RegisterVet from './pages/RegisterVet'
import FAQ from './pages/FAQ'
import HeaderComponent from './pages/components/HeaderComponent'
import MapVet from './pages/MapVet'

const App = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        {' '}
                        <Main />{' '}
                    </>
                }
            ></Route>
            <Route
                path="/emergency"
                element={
                    <>
                        {' '}
                        <HeaderComponent /> <MapVet />{' '}
                    </>
                }
            ></Route>
            <Route
                path="/search"
                element={
                    <>
                        {' '}
                        <HeaderComponent /> <Search />{' '}
                    </>
                }
            ></Route>
            <Route
                path="/login"
                element={
                    <>
                        {' '}
                        <Login />{' '}
                    </>
                }
            ></Route>
            <Route
                path="/register"
                element={
                    <>
                        {' '}
                        <Register />{' '}
                    </>
                }
            ></Route>
            <Route
                path="/Popup"
                element={
                    <>
                        {' '}
                        <Popup />{' '}
                    </>
                }
            ></Route>
            <Route
                path="/RegisterVet"
                element={
                    <>
                        {' '}
                        <RegisterVet />{' '}
                    </>
                }
            ></Route>
            <Route
                path="/faq"
                element={
                    <>
                        {' '}
                        <HeaderComponent /> <FAQ />{' '}
                    </>
                }
            ></Route>
        </Routes>
    )
}

export default App

/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
Edit <code>src/App.js</code> and save to reload.
</p>
<a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
>
Learn React
</a>
</header> */
