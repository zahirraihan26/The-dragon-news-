import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userimg from "../assets/user.png"
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user, logout } = use(AuthContext)
    const handelLogout = () => {
        console.log('user try to log out ')
        logout().then(() => {
           alert('Log out successful')
        }).catch((error) => {
            console.log(error)
        });
    }
    return (
        <div className='flex justify-between items-center glass-panel px-6 py-4 mb-6 sticky top-0 z-50'>
            <div className='text-sm font-medium text-gray-300'>{user && user.email}</div>
            
            {/* Center: Search Bar (New Feature) */}
            <div className="navbar-center hidden lg:flex w-full max-w-sm mx-4">
                <div className="relative w-full group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="text" id="ai-search" className="block w-full p-2 pl-10 text-sm text-white bg-black/20 border border-white/10 rounded-full focus:ring-primary focus:border-primary placeholder-gray-500 transition-all focus:bg-black/50 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)]" placeholder="Search datastreams..." />
                </div>
            </div>

            <div className='nav flex gap-8 text-gray-400 font-medium tracking-wide'>
                <NavLink to="/" className="hover:text-primary transition-colors cursor-pointer">Home</NavLink>
                <NavLink to="/about" className="hover:text-primary transition-colors cursor-pointer">About</NavLink>
                <NavLink to="/career" className="hover:text-primary transition-colors cursor-pointer">Career</NavLink>
            </div>
                <div className='login flex gap-4 items-center'>
                    {user ? (
                        <>
                            <Link to="/dashboard" className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50 overflow-hidden shadow-[0_0_10px_rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.6)] hover:border-primary transition-all cursor-pointer group">
                                {user.photoURL ? <img src={user.photoURL} alt="User" className="group-hover:scale-110 transition-transform" /> : <span className="text-primary font-bold group-hover:scale-110 transition-transform">{user.email?.charAt(0).toUpperCase()}</span>}
                            </Link>
                            <button onClick={handelLogout} className='btn-ai text-sm px-6 py-2'>Disconnect</button>
                        </>
                    ) : ( 
                        <Link to='/auth/login' className='btn-ai text-sm px-8 py-2'>Initialize Login</Link>
                    )}
                </div>
        </div>
    );
};

export default Navbar;