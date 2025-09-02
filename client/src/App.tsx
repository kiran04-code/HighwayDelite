import React from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'

function App() {


  return (
   <div className='bg-blue-100 h-screen w-full'>
  <Routes>
    <Route path='/' element={<SignUp/>}/>
  </Routes>
</div>

  )
}

export default App
