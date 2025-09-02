
import Navbar from '../Components/Navbar'
import SideIMage from '../Components/SideIMage'
import From from '../Components/SignupFrom'

const SignUp = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:py-10 h-full w-full  ">
        <div className='   '>
          <Navbar />
        </div>
      <div className="flex flex-col  justify-center items-center   ">
        <div className="md:px-40 px-15 md:mb-10  justify-center items-center  flex   py-5 md:mt-9  ">
          <From />
        </div>
      </div>
      <div className="flex-2"> 
    <SideIMage />
  </div>
    </div>
  )
}

export default SignUp
