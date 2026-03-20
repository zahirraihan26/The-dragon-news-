import React from 'react';
import Navbar from '../Component/Navbar';
import { Outlet } from 'react-router';

const AuthLaout = () => {
    return (
        <div className='bg-base-100 min-h-screen text-gray-200 relative overflow-hidden'>
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 blur-[100px] rounded-full pointer-events-none"></div>

           <header className='w-11/12 mx-auto py-8 relative z-20'>
            <Navbar></Navbar>
           </header>
           <main className='w-11/12 mx-auto py-4 relative z-10'>
           <Outlet></Outlet>

           </main>
        </div>
    );
};

export default AuthLaout;