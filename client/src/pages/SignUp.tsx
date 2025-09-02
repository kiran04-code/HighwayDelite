import React from 'react'
import Navbar from '../Components/Navbar'
import SideIMage from '../Components/SideIMage'
import From from '../Components/From'

const SignUp = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between py-5 h-full w-full ">
      <div className="flex flex-col justify-start ">
        <div className='md:flex w-full '>
          <Navbar />
        </div>
        <div className="md:px-40 px-15 md:mb-10 ">
          <From />
        </div>
      </div>
      <div className="flex-1 overflow-hidden">
    <SideIMage />
  </div>
    </div>
  )
}

export default SignUp
