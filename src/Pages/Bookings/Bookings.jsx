import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import BookingsCard from "./BookingsCard";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import { data } from "autoprefixer";

const Bookings = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useContext(AuthContext);
    // console.log(user.email);
    const [bookings, setBookings] = useState([]);

    const url = `/bookings?email=${user?.email}`;

    useEffect(() => {
        axiosSecure.get(url)
            .then(res => setBookings(res.data))

        // fetch(url, { credentials: 'include' })
        //     .then(res => res.json())
        //     .then(data => setBookings(data))
    }, [url, axiosSecure])

    const handleDeleteBooking = id => {
        console.log(id)
        const url = `https://server-genius-car.vercel.app/bookings/${id}`
        console.log(url)
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log(data);
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining)
                }
            })
    }

    const handleConfirmUpdateStatus = id => {
        console.log(id)
        fetch(`https://server-genius-car.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm';
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                }
            })
    }

    return (
        <div className="max-w-7xl mx-auto my-20">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Customer Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="font-semibold text-lg">
                        {
                            bookings.map(booking =>
                                <BookingsCard
                                    key={booking._id}
                                    booking={booking}
                                    handleDeleteBooking={handleDeleteBooking}
                                    handleConfirmUpdateStatus={handleConfirmUpdateStatus}
                                ></BookingsCard>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Bookings;