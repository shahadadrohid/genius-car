import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import login from '../assets/images/login/login.svg'
import { Link } from "react-router-dom";

const SignUp = () => {

    const handleSingUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, name)
    }

    return (
        <div className="min-h-screen max-w-7xl mx-auto">

            <div className="hero-content flex-col lg:flex-row gap-10">
                <div className="text-center lg:text-left">
                    <img src={login} alt="" />
                </div>
                <div className="shrink-0 w-3/4 max-w-md bg-base-100 text-center border-2 rounded-xl py-5 px-4">
                    <form onSubmit={handleSingUp} className="card-body">
                        <h1 className="text-3xl font-semibold mb-8">Sign Up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Name</span>
                            </label>
                            <input
                                name="name"
                                type="name" placeholder="Your name" className="input input-bordered focus:border-0" required />
                        </div>
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
                        </div>
                        <div className="form-control">
                            <input
                                className="btn text-white mt-4 bg-[#FF3811]"
                                type="Submit"
                                value="Sign Up"
                            />
                        </div>
                    </form>

                    <div className="mt-2">
                        <p className="font-semibold">Or Sign Up with</p>
                        <div className="flex justify-center gap-2 mt-2 text-3xl">
                            <button><FaFacebook></FaFacebook></button>
                            <button><FcGoogle></FcGoogle></button>
                        </div>
                        <p className="mt-5">Already Have an account?
                            <Link to='/login' className="text-[#ff3811] font-semibold"> Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;