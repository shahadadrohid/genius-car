import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";

const CheckOut = () => {
    const service = useLoaderData();
    const { _id, price, title, img } = service;
    console.log(service);
    const { user } = useContext(AuthContext);

    const handleServiceOrder = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const phone = form.phone.value;
        const email = form.email.value;
        console.log(name, date, phone, email);

        const order = {
            customerName: name,
            customerEmail: email,
            date,
            img,
            service: title,
            serviceId: _id,
            price: price
        }
        console.log("Your Order:", order)

        fetch(`http://localhost:5000/bookings`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })


        // axios.post('http://localhost:5000/bookings', {
        //     order
        // })
        //     .then(res => {
        //         console.log(res);
        //     })
        //     .catch(error => {
        //         console.log(error)
        //     })

    }

    return (
        <div className="my-20">
            <div className="max-h-screen bg-base-200 max-w-6xl mx-auto rounded-xl">
                <div className="card shrink-0 w-full max-w-5xl mx-auto py-14">
                    <form
                        onSubmit={handleServiceOrder}
                        className="card-body"
                    >
                        <div className="flex justify-between gap-8">
                            <div className="form-control w-full">
                                <input
                                    name="name"
                                    defaultValue={user?.displayName}
                                    type="text" placeholder="First name" className="input input-bordered border-0 py-7" required />
                            </div>
                            <div className="form-control w-full">
                                <input
                                    name="date"
                                    type="date" placeholder="Date" className="input input-bordered border-0 py-7" required />
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
                                    defaultValue={user?.email}
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
    );
};

export default CheckOut;