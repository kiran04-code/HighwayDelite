import  { useEffect } from 'react';
import Notes from '../Components/Notes/Notes';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/contextAuth';
import toast from 'react-hot-toast';

const Home = () => {
  const { User, axiosInstance,loading,setLoading,setUser } = useAuth();
  console.log(User)
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const { data } = await axiosInstance.get("/logout");
      if (data.success) {
        toast.success(data.message);
        navigate("/");
        setLoading(false)
        setUser(null)
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error("Logout failed");
    }
  };
  useEffect(() => {
    if (!User && !loading) {
      navigate("/signin");
    }
  }, [User, navigate,logout]);
    return (
        <div className="p-4 md:p-8 bg-gray-100 min-h-screen">
           
            {
                loading ? <div> <div className="flex items-center gap-3 mb-6   w-full justify-between p-2">
                <div className='flex gap-2 justify-center items-center'>
                    <img src="/icon.png" alt="Dashboard Icon" className="w-8 h-8 md:w-10 md:h-10" />
                    <h1 className="text-xl md:text-2xl font-bold">Dashboard</h1>
                </div>
                <div>
                    <Link to={"/"} onClick={logout} className=' text-blue-400  underline'>SignOut</Link>
                </div>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 w-full max-w-md mx-auto">
                <h2 className="text-lg md:text-xl font-semibold mb-2">Welcome, {User?.name}</h2>
                <p className="text-gray-600 text-sm md:text-base">Email: {User?.email}</p>
            </div>
            <Notes /></div>:<p>Loading....</p>
        }
     
        </div>
    );
};

export default Home;
