import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/Bank'
import MainPage from './pages/MainPage'
import Calculator from './pages/Calculator'
import Services from './pages/Services'
import Contact from './pages/Content'
import RetireMent from './components/Retirement'
import StockCalculator from './components/StockCalculator'
import WealthCalculator from './components/WealthCalculator'

import RuralBankLogin from "./components/RuralBankLogin";
import FaceLogin from "./components/FaceLogin";   // ✅ Missing import added

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/retirement" element={<RetireMent />} />
        <Route path="/stock-calculator" element={<StockCalculator />} />
        <Route path="/wealth-calculator" element={<WealthCalculator />} />

        <Route path="/biometric-login" element={<RuralBankLogin />} />

        {/* ✅ Add this route so your face recognition page loads */}
        <Route path="/facelogin" element={<FaceLogin />} />
      </Routes>
    </Router>
  )
}
