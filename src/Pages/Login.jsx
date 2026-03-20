import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const { signIn, googleLogin } = use(AuthContext)
    const navigate = useNavigate()

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
                navigate('/')
            })
             .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage,errorCode)
            });
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-100px)] py-10 relative overflow-hidden'>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-base-100 to-base-100 pointer-events-none"></div>
            
            <div className="card glass-panel neon-border w-full max-w-md shrink-0 py-8 px-6 z-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full pointer-events-none -mt-10 -mr-10"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/20 blur-[50px] rounded-full pointer-events-none -mb-10 -ml-10"></div>
                
                <h2 className='font-bold text-3xl text-center glow-text mb-6'>Login to Your Account</h2>
                <form onSubmit={handelLogin} className="flex flex-col gap-5 relative z-10 mb-6">
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
                       
                        {/* Biometric Scanner Button effect */}
                         <button type='submit' className="group relative w-full mt-4 py-4 rounded-xl overflow-hidden bg-black/40 border border-primary/50 text-white font-bold tracking-[0.2em] uppercase text-sm shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all duration-300">
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent group-hover:h-full group-hover:opacity-20 transition-all duration-500 ease-out z-0"></div>
                            
                            {/* Scanning Laser Line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-secondary opacity-0 group-hover:opacity-100 group-hover:animate-[scan_1.5s_ease-in-out_infinite] blur-[1px] z-10"></div>
                            
                            <span className="relative z-20 flex items-center justify-center gap-3 drop-shadow-[0_0_5px_rgba(0,0,0,1)]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                                </svg>
                                Scan Biometrics & Login
                            </span>
                        </button>
                    </fieldset>
                </form>

                <div className="relative flex items-center justify-center w-full my-6">
                    <div className="absolute w-full border-t border-white/10"></div>
                    <span className="bg-base-100 px-3 text-gray-500 text-sm font-medium relative z-10">OR</span>
                </div>

                <button onClick={handleGoogleLogin} type="button" className="btn-ai w-full py-3 text-lg font-semibold tracking-wide flex items-center justify-center gap-3 bg-[#1e1e1e] border-white/10 hover:bg-white/5 hover:border-white/30 text-white shadow-none">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
                    Initialize via Google
                </button>

                <p className='font-light text-center pt-6 text-gray-400'>
                    Don't Have An Account?{" "} 
                    <Link className='text-primary hover:text-secondary font-medium transition-colors underline-offset-4 hover:underline' to='/auth/register'>Register</Link> 
                </p>
            </div>
        </div>
    );
};

export default Login;