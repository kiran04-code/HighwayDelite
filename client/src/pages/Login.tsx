import Navbar from '../Components/Navbar';
import SideIMage from '../Components/SideIMage';
import LoginFrom from '../Components/LoginFrom';

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full">
      

      <div className="w-full md:w-full">
        <Navbar />
      </div>


      <div className="flex-1 flex justify-center items-center px-6 md:px-20 py-10">
        <div className="w-full max-w-md">
          <LoginFrom />
        </div>
      </div>

    
      <div className="hidden md:flex flex-[1.5] justify-center items-center bg-gray-100">
        <SideIMage />
      </div>

    </div>
  );
};

export default Login;
