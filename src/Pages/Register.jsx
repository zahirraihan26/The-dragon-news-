import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {


    const { creatUser,setuser } = use(AuthContext)

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
                <h2 className='font-bold text-2xl text-center'>Register your Account</h2>
                <form onSubmit={handelRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* name */}
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" required />
                        {/* photo*/}
                        <label className="label">Photo Url</label>
                        <input type="text" name='photo' className="input" placeholder="Photo" required />
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />
                        {/* pass */}
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required />



                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='font-semibold text-center pt-5'>Allrady Have An Accoun ?{" "} <Link className='text-secondary' to='/auth/login'>Login</Link> </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;