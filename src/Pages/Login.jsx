import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const {signIn}=use(AuthContext)
    const handelLogin =(e)=>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log({email,password})

        signIn(email,password)
        .then(result => {
                const user = result.user
                console.log(user)
                
            })
             .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage,errorCode)
            });

    }
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-100px)] py-10 relative overflow-hidden'>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-base-100 to-base-100 pointer-events-none"></div>
            
            <div className="card glass-panel neon-border w-full max-w-md shrink-0 py-8 px-6 z-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full pointer-events-none -mt-10 -mr-10"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 blur-[50px] rounded-full pointer-events-none -mb-10 -ml-10"></div>
                
                <h2 className='font-bold text-3xl text-center glow-text mb-6'>Login to Your Account</h2>
                <form onSubmit={handelLogin } className="flex flex-col gap-5 relative z-10">
                    <fieldset className="flex flex-col gap-5">
                        {/* Email */}
                        <div className="form-control">
                            <label className="label mb-1"><span className="text-gray-300 font-medium">Email</span></label>
                            <input type="email" name='email' className="input w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all rounded-xl shadow-inner" placeholder="Enter your email" required />
                        </div>
                        
                        {/* Password */}
                        <div className="form-control">
                            <label className="label mb-1"><span className="text-gray-300 font-medium">Password</span></label>
                            <input type="password" name='password' className="input w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all rounded-xl shadow-inner" placeholder="Enter your password" required />
                        </div>
                        
                        <div className="flex justify-end">
                            <a href="#" className="text-sm text-primary hover:text-secondary hover:underline transition-colors mt-1">Forgot password?</a>
                        </div>
                       
                        <button type='submit' className="btn-ai w-full mt-4 py-3 text-lg font-semibold tracking-wide">Login to Core</button>
                         <p className='font-light text-center pt-6 text-gray-400'>
                            Don't Have An Account?{" "} 
                            <Link className='text-primary hover:text-secondary font-medium transition-colors underline-offset-4 hover:underline' to='/auth/register'>Register</Link> 
                        </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;