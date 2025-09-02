import Navbar from '../Components/Navbar';
import SideIMage from '../Components/SideIMage';
import LoginFrom from '../Components/LoginFrom';

const Login = () => {
  return (
    <div className=" w-full h-screen md:flex md:justify-between md:px-30 md:py-10 p-3 md:items-center  flex justify-center items-center">

      <div className='md:flex   py-10 md:justify-between gap-5'>
        <div className='mb-5  h-full md:absolute top-10 left-0  '><Navbar/></div>
        <div><LoginFrom /></div>
      </div>
      <div className='hidden md:flex'>
        <SideIMage />
      </div>

    </div>
  );

};

export default Login;
