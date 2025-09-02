import React, { useState, useTransition, } from 'react'
import GoogleButton from './GoogleButton'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import Small from './Loader/small'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthContext'
const From = () => {
  // context Data //
  const { axiosInstance } = useAuth()
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showOtpInput, setshowOtpInput] = useState<boolean>(true)
  const [error, setError] = useState<string>("");
  const navigate = useNavigate()
  const [otp, setOtp] = useState<number>()
  const [isPending, setIsPending] = useTransition()
  const [from, setfrom] = useState({
    name: "",
    email: "",
    DateOfBirth: ""
  })
  const hnadleOtpChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setOtp(Number(value));
  }

  const optHnadler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!otp) {
      return toast.error("Please Enter OTP")
    }
    console.log("OTP", otp)
    setIsPending(async()=>{
      const {data} = await axiosInstance.post("/VerifiedOtp",{otp,from})
      console.log(data)
      if(data.success){
        toast.success(data.message)
        navigate("/")
      }else{
        toast.error(data.message)
      }
    })
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setfrom({ ...from, [name]: value });

    if (name === "DateOfBirth" && value) {
      const dob = new Date(value);
      dob.setHours(0, 0, 0, 0);

      if (!isNaN(dob.getTime())) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (dob.getTime() === today.getTime()) {
          setError("Date of Birth cannot be today");
        } else {
          setError("");
        }
      } else {
        setError("");
      }
    }
  };

  const HandleSubmitFrom = async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault()
    if (!from.DateOfBirth || !from.email || !from.name) {
      return toast.error("Please Fill All Details!")
    }
    if (error) {
      return toast.error("Enter Valid Date of Birth")
    }
    setIsPending(async () => {
      const { data } = await axiosInstance.post("/Signup", from)
      console.log(data)
      if (data.success) {
        toast.success(data.message)
        setshowOtpInput(false)
      }
      else {
     toast.error(data.message)
      }
    });
  }
  return (
    <div className=' '>
      <form className="bg-white rounded-[5px] shadow-lg p-6 px-10 gap-4 flex flex-col" onSubmit={showOtpInput ? HandleSubmitFrom : optHnadler}>
        <h1 className='font-bold  text-2xl'>SignUp</h1>
        <label className='text-gray-600 text-nowrap'> Sign Up To Enjoy The Feature of HD</label>
        <input
          type="text"
          name='name'
          placeholder="Enter Your Name"
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-[#6210a5]"
        />
        <input
          type="date"
          name='DateOfBirth'
          placeholder="Enter DateOfBirth"
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-[#6210a5]"
        />
        <p className='text-red-500 px-2 '>{error}</p>
        <input
          type="email"
          name='email'
          placeholder="Enter Your  Email "
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-[#6210a5]"
        />
        {
          showOtpInput ? <button
            type="submit"
            className="bg-[#3e7edf] text-white py-2 rounded-[12px] font-semibold hover:bg-[#0e4e97] transition"
          >

            <p> {
              isPending ? <Small /> : "Get OTP"
            }</p>
          </button>
            :
            <div className='w-full'>
              <div className="relative w-full">
                <input
                  type={showPassword ? "tel" : "password"}
                  name="Otp"
                  maxLength={6}
                  placeholder="Enter your OTP"
                  onChange={hnadleOtpChnage}
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
              <button
                type="submit"
                className="bg-[#3e7edf] w-full mt-5 text-white py-2 rounded-[12px] font-semibold hover:bg-[#0e4e97] transition"
              >
                Signup
              </button>
            </div>
        }
        <GoogleButton />
        <div className='flex justify-center  text-nowrap'><p>Already have an account? <Link to={"/signin"} className='underline text-blue-500'>Sign in</Link></p></div>

      </form>
    </div>
  )
}

export default From
