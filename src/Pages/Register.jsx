import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

    const { creatUser,setuser, googleLogin } = use(AuthContext)
    const navigate = useNavigate()

    const handelRegister = (e) => {
        e.preventDefault()
        console.log(e.target)

        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, photo, email, password)
        creatUser(email, password)
            .then(result => {
                const user = result.user
                // console.log(user)
                setuser(user)
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
                
                <h2 className='font-bold text-3xl text-center glow-text mb-6'>Create an Account</h2>
                <form onSubmit={handelRegister} className="flex flex-col gap-3 relative z-10 mb-6">
                    <fieldset className="flex flex-col gap-3">
                        {/* name */}
                        <div className="form-control">
                            <label className="label mb-1"><span className="text-gray-300 font-medium text-sm">Name</span></label>
                            <input type="text" name='name' className="input input-sm h-10 w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all rounded-xl shadow-inner" placeholder="Your full name" required />
                        </div>
                        {/* photo*/}
                        <div className="form-control">
                            <label className="label mb-1"><span className="text-gray-300 font-medium text-sm">Photo URL</span></label>
                            <input type="text" name='photo' className="input input-sm h-10 w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all rounded-xl shadow-inner" placeholder="Link to your avatar" required />
                        </div>
                        {/* email */}
                        <div className="form-control">
                            <label className="label mb-1"><span className="text-gray-300 font-medium text-sm">Email</span></label>
                            <input type="email" name='email' className="input input-sm h-10 w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all rounded-xl shadow-inner" placeholder="Email address" required />
                        </div>
                        {/* pass */}
                        <div className="form-control">
                            <label className="label mb-1"><span className="text-gray-300 font-medium text-sm">Password</span></label>
                            <input type="password" name='password' className="input input-sm h-10 w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all rounded-xl shadow-inner" placeholder="Secure password" required />
                        </div>

                        <button type='submit' className="btn-ai w-full mt-4 py-2.5 text-lg font-semibold tracking-wide">Initialize Account</button>
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
                    Already Have An Account?{" "} 
                    <Link className='text-primary hover:text-secondary font-medium transition-colors underline-offset-4 hover:underline' to='/auth/login'>Login</Link> 
                </p>
            </div>
        </div>
    );
};

export default Register;