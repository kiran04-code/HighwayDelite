import React from 'react'
import {Toaster} from "react-hot-toast"
import './App.css'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  return (
   <div className=' h-screen w-full'>
    <Toaster position='top-right'/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Signup' element={<SignUp/>}/>
    <Route path='/signin' element={<Login/>}/>
  </Routes>
</div>

  )
}

export default App
