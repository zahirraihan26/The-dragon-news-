import React, { use, useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import useWeather from '../hooks/useWeather';

const Navbar = () => {
    const { user, logout } = use(AuthContext)
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [currentTime, setCurrentTime] = useState(new Date());
    const [isQuantumLight, setIsQuantumLight] = useState(() => {
        return localStorage.getItem('dragon-theme') === 'light';
    });
    const { weather } = useWeather();

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    // Matrix Theme Toggle (Professional attribute-based switching)
    useEffect(() => {
        const theme = isQuantumLight ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('dragon-theme', theme);
    }, [isQuantumLight]);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim() !== '') {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
    }
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
            {/* Left side: Global Clock & Identity */}
            <div className='flex items-center gap-4'>
                <div className='hidden sm:flex items-center gap-3 bg-base-200/50 backdrop-blur-sm px-4 py-2 rounded-xl border border-base-content/10 shadow-inner group hover:border-primary/50 transition-all duration-500'>
                    {/* Clock Section */}
                    <div className='flex items-center gap-3'>
                        <div className='relative'>
                            <div className='w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className='absolute -top-1 -right-1 w-2 h-2 bg-primary animate-pulse rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]'></div>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-sm font-black text-base-content font-mono tracking-widest leading-none drop-shadow-[0_0_8px_rgba(var(--color-base-content),0.2)]'>
                                {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                            </span>
                            <div className='flex items-center gap-2 mt-1'>
                                <span className='text-[9px] text-primary font-bold uppercase tracking-tighter opacity-80 flex items-center gap-1'>
                                    <span className='w-1 h-1 bg-primary rounded-full animate-ping'></span>
                                    {currentTime.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Weather Section (The "Water" too) */}
                    {weather && (
                        <div className='flex items-center gap-3 border-l border-base-content/10 pl-3 ml-1'>
                            <div className='flex flex-col items-end'>
                                <span className='text-sm font-black text-base-content font-mono leading-none'>
                                    {Math.round(weather.main?.temp)}°C
                                </span>
                                <span className='text-[10px] text-secondary font-bold uppercase tracking-tighter opacity-80 mt-1 capitalize'>
                                    {weather.weather?.[0]?.description}
                                </span>
                            </div>
                            {weather.weather?.[0]?.icon && (
                                <img
                                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                                    alt="weather icon"
                                    className="w-10 h-10 drop-shadow-[0_0_8px_rgba(0,0,0,0.5)] bg-base-100/20 rounded-full"
                                />
                            )}
                        </div>
                    )}
                </div>
                {user && (
                    <div className='h-8 w-[1px] bg-base-content/10 hidden xl:block mx-1'></div>
                )}
                <div className='text-xs font-mono text-base-content/40 hidden xl:block'>
                    {user && user.email}
                </div>
            </div>

            {/* Center: Search Bar (New Feature) */}
            <form onSubmit={handleSearchSubmit} className="navbar-center hidden lg:flex w-full max-w-sm mx-4">
                <div className="relative w-full group">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-400 group-focus-within:text-primary transition-colors" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="block w-full p-2 pl-10 text-sm text-white bg-black/20 border border-white/10 rounded-full focus:ring-primary focus:border-primary placeholder-gray-500 transition-all focus:bg-black/50 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                        placeholder="Search datastreams..."
                    />
                    <button type="submit" className="hidden">Search</button>
                </div>
            </form>

            <div className='nav flex gap-6 items-center'>
                <div className="hidden lg:flex space-x-6 text-gray-400 font-medium tracking-wide items-center mr-2">
                    <NavLink to="/" className="hover:text-primary transition-colors cursor-pointer">Home</NavLink>
                    <NavLink to="/about" className="hover:text-primary transition-colors cursor-pointer">About</NavLink>
                    <NavLink to="/career" className="hover:text-primary transition-colors cursor-pointer">Career</NavLink>
                </div>

                {/* Notifications Bell */}
                <div className="dropdown dropdown-end">
                    <button tabIndex={0} className="p-2 rounded-full border border-white/10 bg-black/40 hover:bg-white/10 transition-colors text-white relative">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-error rounded-full border border-black animate-ping"></span>
                        <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-error rounded-full border border-black"></span>
                    </button>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)] border border-primary/20 bg-black/90 backdrop-blur-xl rounded-2xl w-80 mt-4 animate-in slide-in-from-top-2">
                        <li className="font-bold text-lg mb-2 border-b border-white/10 pb-2 text-white">System Alerts <span className="text-error text-xs ml-2 bg-error/10 px-2 py-0.5 rounded-full">New Vectors</span></li>
                        <li><a className="py-3 hover:bg-primary/20"><span className="text-primary mr-2">●</span> New neural intercept in Technology cluster</a></li>
                        <li><a className="py-3 hover:bg-success/20"><span className="text-success mr-2">●</span> Server connection stabilized</a></li>
                        <li><a className="py-3 hover:bg-warning/20 text-gray-400"><span className="text-gray-600 mr-2">●</span> Matrix alignment re-calibrated</a></li>
                        <button className="btn btn-sm btn-ghost mt-3 text-xs tracking-widest text-primary w-full shadow-none border border-white/5">Purge Logs</button>
                    </ul>
                </div>

                {/* Theme Toggle Button */}
                {/* <button 
                    onClick={() => setIsQuantumLight(!isQuantumLight)}
                    className="p-2 rounded-full border border-white/10 bg-black/40 hover:bg-white/10 transition-colors text-primary shadow-[0_0_10px_rgba(6,182,212,0.2)] hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                    title={isQuantumLight ? "Engage Cyber Dark Mode" : "Engage Quantum Light Mode"}
                >
                    {isQuantumLight ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-warning drop-shadow-[0_0_5px_rgba(253,224,71,0.8)]">
                            <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                        </svg>
                    )}
                </button> */}
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