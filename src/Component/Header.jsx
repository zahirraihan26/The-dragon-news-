import React from 'react';
import logo from "../assets/logo.png"
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-4 py-8'>

            <img className='w-[400px] drop-shadow-[0_0_15px_rgba(6,182,212,0.5)] transition-all hover:drop-shadow-[0_0_25px_rgba(8,145,178,0.8)]' src={logo} alt="Dragon News Logo" />

            <p className='tracking-widest uppercase text-sm font-light glow-text'>Journalism Without Fear or Favour</p>

        
            <p className='font-semibold text-gray-300 bg-white/5 px-6 py-2 rounded-full border border-white/10 shadow-[0_4px_10px_rgba(0,0,0,0.5)]'>
                {format(new Date(),'EEEE, MMM d, yyyy')}
            </p>
        </div>
    );
};

export default Header;