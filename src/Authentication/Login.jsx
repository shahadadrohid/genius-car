import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import login from '../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location)

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        loginUser(email, password)
            .then(r => {
                const loggedInUser = r.user;
                console.log(loggedInUser);

                const user = { email };
                axios.post('http://localhost:5000/jwt', user, {
                    withCredentials: true
                })
                    .then(res => {
                        console.log(res.data);
                    })
                    .catch(error => {
                        console.log(error)
                    })


                // navigate(location?.state ? location.state : '/')
            })

            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="min-h-screen max-w-7xl mx-auto">

            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className="text-center lg:text-left">
                    <img src={login} alt="" />
                </div>
                <div className="shrink-0 w-3/4 max-w-md bg-base-100 text-center border-2 rounded-xl py-5 px-4">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl font-semibold mb-8">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email" placeholder="Your email" className="input input-bordered focus:border-0" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Confirm Password</span>
                            </label>
                            <input
                                name="password"
                                type="password" placeholder="Your password" className="input input-bordered focus:border-0" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <input className="btn text-white mt-4 bg-[#ff3811]" type="Submit" value="Sign in"
                            />
                        </div>
                    </form>

                    <div className="mt-2">
                        <p className="font-semibold">Or sign in with</p>
                        <div className="flex justify-center gap-2 mt-2 text-3xl">
                            <button><FaFacebook></FaFacebook></button>
                            <button><FcGoogle></FcGoogle></button>
                        </div>
                        <p className="mt-5">Don't Have an account?
                            <Link to='/signUp' className="text-[#ff3811] font-semibold"> Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;