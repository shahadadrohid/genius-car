import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const service = useLoaderData();
    console.log(service);
    return (
        <div className="my-20">
            <div className="max-h-screen bg-base-200 max-w-6xl mx-auto rounded-xl">
                <div className="">
                    <div className="card shrink-0 w-full max-w-5xl mx-auto py-14">
                        <form className="card-body">
                            <div className="flex justify-between gap-8">
                                <div className="form-control w-full">
                                    <input
                                        name="first-name"
                                        type="text" placeholder="First name" className="input input-bordered border-0 py-7" required />
                                </div>
                                <div className="form-control w-full">
                                    <input
                                    name="second-name"
                                    type="text" placeholder="Last name" className="input input-bordered border-0 py-7" required />
                                </div>
                            </div>
                            <div className="flex justify-between gap-8 my-5">
                                <div className="form-control w-full">
                                    <input
                                    name="phone"
                                    type="number" placeholder="Phone number" className="input input-bordered border-0 py-7" required />
                                </div>
                                <div className="form-control w-full">
                                    <input
                                    name="email"
                                    type="email" placeholder="Your email" className="input input-bordered border-0 py-7" required />
                                </div>
                            </div>
                            <textarea name="message" className="rounded-xl p-5" placeholder="Your message" id="" cols="30" rows="10"></textarea>
                            <div className="form-control mt-6">
                                <button className="btn text-white bg-[#ff3811] border-0">Order Confirm</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;