import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import BookingsCard from "./BookingsCard";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    // console.log(user.email);
    const [bookings, setBookings] = useState([]);

    const url = `http://localhost:5000/bookings?customerEmail=${user?.email}`;
    console.log(url)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [url])

    const handleDeleteBooking = id => {
        console.log(id)
        const url = `http://localhost:5000/bookings/${id}`
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
        fetch(`http://localhost:5000/bookings/${id}`, {
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