import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocalLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'> login with</h2>
            <div className='flex flex-col space-y-3'>
                <button className='btn btn-outline btn-secondary w-full'> <FaGoogle></FaGoogle> Login with Google</button>
                <button className='btn btn-outline btn-primary w-full'> <FaGithub></FaGithub> Login with Github</button>
                </div>
        </div>
    );
};

export default SocalLogin;