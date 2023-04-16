import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Login = () => {

    const { signIn, signWithGoogle } = useContext(AuthContext)


    const handleLogin = (even) => {
        even.preventDefault();

        const form = even.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                form.reset();

            })

            .catch(error => {
                console.log(error.message)
            })
    }


    const handleGoogleSignIn = () => {
        signWithGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
            })

            .catch(error => {
                console.log(error)
            })
    }



    return (

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Please Login now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                    <form onSubmit={handleLogin} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>

                    {/* <Link to='/register' className="label-text-alt link link-hover">
                        New to auth master?
                    </Link> */}

                    <label className="label m-4 ml-8">
                        <Link to="/register" className="label-text-alt link link-hover">New to auth master? Please Register!</Link>
                    </label>
                    <div className='mx-auto mb-2'>
                        <button onClick={handleGoogleSignIn} className="btn btn-active btn-primary">Google</button>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;


