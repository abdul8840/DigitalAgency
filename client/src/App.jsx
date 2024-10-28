import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Team from './pages/Team'
import Contact from './pages/Contact'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import WebDesign from './pages/WebDesign'

const App = () => {
  return (
    <BrowserRouter>
    <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />

            <Route path="/services/web-design" element={<WebDesign />} />

            <Route element={<PrivateRoute />} >
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>

        </Routes>
    </BrowserRouter>
  )
}

export default App
