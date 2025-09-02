import React, { useState } from 'react'
import GoogleButton from './GoogleButton'
import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const From = () => {
    const [showPassword,setShowPassword]  = useState(false)
  return (
    <div>
        <form className="bg-white rounded-xl shadow-lg p-6 md:w-90  gap-4 flex flex-col">
            <h1 className='font-bold  text-2xl'>SignUp</h1>
            <label className='text-gray-600'> Sign Up To Enjoy The Feature of HD</label>
          <input
            type="text"
            name='name'
            placeholder="Enter Your Name"
   
            className="p-3 border border-gray-300 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-[#6210a5]"
          />
          <input
            type="email"
            name='email'
            placeholder="Enter Your  Email "
          
       
            className="p-3 border border-gray-300 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-[#6210a5]"
          />
        
         <div className="relative w-full">
      <input
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Enter your password"
        className="w-full p-3 border border-gray-300 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-[#6210a5] pr-10"
      />
      <button
        type="button"
        className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-[#6210a5]"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
        
          <input
            type="date"
            name='DateOfBirth'
            placeholder="Enter DateOfBirth"
          

            className="p-3 border border-gray-300 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-[#6210a5]"
          />
          <button
            type="submit"
            className="bg-[#3e7edf] text-white py-2 rounded-[5px] font-semibold hover:bg-[#0e4e97] transition"
          >
            
              create Campaign
        
          </button>
          <GoogleButton/>
          <div className='flex justify-center'><p>Already have an account? <Link to={"/signin"} className='underline text-blue-500'>Sign in</Link></p></div>
          
        </form>
    </div>
  )
}

export default From
