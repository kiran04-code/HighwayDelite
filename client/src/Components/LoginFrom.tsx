import React, { useState, useTransition } from 'react';
import GoogleButton from './GoogleButton';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Small from './Loader/small';
import { useAuth } from '../context/contextAuth';
import toast from 'react-hot-toast';

const LoginForm = () => {

  const [email, setEmail] = useState<string>('');
  const [otp, setOtp] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showOtpInput, setShowOtpInput] = useState<boolean>(true);
  const [isPending, startTransition] = useTransition();
  const {axiosInstance} = useAuth()
  const  navigete = useNavigate()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    if (name === 'Otp') {
      if (/^\d*$/.test(value) && value.length <= 6) setOtp(value); 
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
     startTransition(async()=>{
      const {data} = await axiosInstance.post("/login",{email})
      if(data.success){
        toast.success(data.message)
        setShowOtpInput(false)
      }else{
        toast.error(data.message)
      }
     })
  };
  const hnadleOtp = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
   startTransition(async()=>{
    const {data}  = await axiosInstance.post("/LoginOtp",{email,otp})
    if(data.success){
      toast.success(data.message)
      navigete("/Loder")
    }
    else{
       toast.error(data.message)
    }
   })
  }
  return (
    <div className="">
      <form
        className="bg-white rounded-[5px] shadow-lg p-6 px-10 gap-4 flex w-full flex-col"
        onSubmit={   showOtpInput  ? handleSubmit:hnadleOtp}
      >
        <h1 className="text-2xl md:text-3xl font-bold text-center">Sign in</h1>
        <p className="text-gray-600 text-center">
          Sign up to enjoy the features of HD
        </p>

        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="p-3 border border-gray-300 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-[#6210a5]"
          required
        />

        {showOtpInput ? (
          <button
            type="submit"
            disabled={isPending}
            className={`bg-[#3e7edf] text-white py-2 rounded-xl font-semibold hover:bg-[#0e4e97] transition ${
              isPending ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isPending ? <Small /> : 'Get OTP'}
          </button>
        ) : (
          <>
            <div className="relative w-full">
              <input
                type={showPassword ? 'text' : 'password'}
                name="Otp"
                value={otp}
                onChange={handleChange}
                maxLength={6}
                placeholder="Enter your OTP"
                className="w-full p-3 border border-gray-300 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-[#6210a5] pr-10"
                required
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
              disabled={isPending}
              className={`bg-[#3e7edf] w-full mt-5 text-white py-2 rounded-xl font-semibold hover:bg-[#0e4e97] transition ${
                isPending ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isPending ? <Small /> : 'Signup'}
            </button>
          </>
        )}

 
        <GoogleButton />
        <div className="flex justify-center text-sm mt-2">
          <p>
            Dont Have Account?{' '}
            <Link to="/signup" className="underline text-blue-500">
              Create One
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
