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
import SEO from './pages/SEO'
import PPC from './pages/PPC'
import EmailMark from './pages/EmailMark'
import SocialMark from './pages/SocialMark'
import Footer from './components/Footer'

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
            <Route path="/services/search-engine-optimization" element={<SEO />} />
            <Route path="/services/pay-per-click-advertising" element={<PPC />} />
            <Route path="/services/email-and-sms-marketing" element={<EmailMark />} />
            <Route path="/services/social-media-marketing" element={<SocialMark />} />

            <Route element={<PrivateRoute />} >
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>

        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
