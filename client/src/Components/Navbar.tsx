import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <Link to={"/"}><div className='flex justify-center items-center   gap-2 p-3 '  >
      <img src="/icon.png" alt="" />
      <h1 className='md:text-2xl text-xl'>HD</h1>
    </div>
    </Link>
  )
}

export default Navbar
