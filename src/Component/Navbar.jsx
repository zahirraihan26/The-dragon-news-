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
            <div className='nav flex gap-8 text-gray-400 font-medium tracking-wide'>
                <NavLink to="/" className="hover:text-primary transition-colors cursor-pointer">Home</NavLink>
                <NavLink to="/about" className="hover:text-primary transition-colors cursor-pointer">About</NavLink>
                <NavLink to="/career" className="hover:text-primary transition-colors cursor-pointer">Career</NavLink>
            </div>
            <div className="login-btn flex gap-4 items-center">
                <img src={userimg} alt="User Avatar" className='w-10 h-10 rounded-full border-2 border-primary/40 shadow-[0_0_10px_rgba(6,182,212,0.3)]' />
                {
                    user ? <button onClick={handelLogout} className='btn-ai'>Logout</button> : <Link to='/auth/login' className='btn-ai'>Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;