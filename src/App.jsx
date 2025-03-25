import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import  InstituteLogin from './Institute_login/InstituteLogin'
import AdminLogin from "./Institute_login/AdminLogin"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<InstituteLogin/>}></Route>
      <Route path="/Adminlogin" element={<AdminLogin/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App