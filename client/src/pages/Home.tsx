import React from 'react';
import Notes from '../Components/Notes/Notes';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="p-4 md:p-8 bg-gray-100 min-h-screen">

            <div className="flex items-center gap-3 mb-6   w-full justify-between p-2">
                <div className='flex gap-2 justify-center items-center'>
                    <img src="/icon.png" alt="Dashboard Icon" className="w-8 h-8 md:w-10 md:h-10" />
                    <h1 className="text-xl md:text-2xl font-bold">Dashboard</h1>
                </div>
                <div>
                    <Link to={"/"} className=' text-blue-400  underline'>SignOut</Link>
                </div>
            </div>


            <div className="bg-white shadow-lg rounded-xl p-6 md:p-8 w-full max-w-md mx-auto">
                <h2 className="text-lg md:text-xl font-semibold mb-2">Welcome, Kiran Rathod</h2>
                <p className="text-gray-600 text-sm md:text-base">Email: Kr551344@gmail.com</p>
            </div>
            <Notes />
        </div>
    );
};

export default Home;
