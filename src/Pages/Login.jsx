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
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-bold text-2xl text-center'>Login your Account</h2>
                <form onSubmit={handelLogin } className="card-body">
                    <fieldset className="fieldset">
                        {/* Email */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        {/* Password */}
                        <label className="label">Password</label>
                       <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                       
                        <button type='submmit' className="btn btn-neutral mt-4">Login</button>
                         <p className='font-semibold text-center pt-5'>Don't Have An Accoun ?{" "} <Link className='text-secondary' to='/auth/register'>Register</Link> </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Login;