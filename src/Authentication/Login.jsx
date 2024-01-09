import logoLogin from "../assets/logo.svg"
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import login from '../assets/images/login/login.svg'

const Login = () => {
    return (
        <div className="min-h-screen max-w-7xl mx-auto">

            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className="text-center lg:text-left">
                    <img src={login} alt="" />
                </div>
                <div className="shrink-0 w-3/4 max-w-md bg-base-100 text-center border-2 rounded-xl py-5 px-4">
                    <form className="card-body">
                        <h1 className="text-3xl font-semibold mb-8">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="email" placeholder="Your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="Your password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <button className="btn text-white bg-[#ff3811]">Sign in</button>
                        </div>
                        <div className="mt-2">
                            <p className="font-semibold">Or sign in with</p>
                            <div className="flex justify-center gap-2 mt-2 text-3xl">
                                <button><FaFacebook></FaFacebook></button>
                                <button><FcGoogle></FcGoogle></button>
                            </div>
                            <p className="mt-5">Don't Have an account? <span className="text-[#ff3811] font-semibold">Sign Up</span></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;