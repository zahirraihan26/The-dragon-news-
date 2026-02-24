import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userimg from "../assets/user.png"
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user, logout } = use(AuthContext)
    const handelLogout = () => {
        console.log('user try to log out ')
        logout().then(() => {
           alert('LOg out sussess full')
        }).catch((error) => {
            console.log(error)
        });
    }
    return (
        <div className='flex justify-between items-center'>
            <div className=''>{user && user.email}</div>
            <div className='nav flex gap-5 text-accent'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="career">career</NavLink>
            </div>
            <div className="login-btn flex gap-5">
                <img src={userimg} alt="" />
                {
                    user ? <button onClick={handelLogout} className='btn btn-primary px-10'>Logut</button> : <Link to='/auth/login' className='btn btn-primary px-10'>Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;