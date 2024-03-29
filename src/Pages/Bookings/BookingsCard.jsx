import { IoIosArrowDown } from "react-icons/io";

const BookingsCard = ({ booking, handleDeleteBooking, handleConfirmUpdateStatus }) => {
    console.log(booking)
    const { _id, img, date, customerName, service, price, status } = booking;
    return (
        <tr>
            <th>
                <button onClick={() => handleDeleteBooking(_id)} className="btn btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask rounded-xl w-24 h-24">
                            <img src={img} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service}</div>
                    </div>
                </div>
            </td>
            <td>
                {customerName}
            </td>
            <td>
                ${price}
            </td>
            <td>{date}</td>
            <th>
                {status == 'confirm' ?
                    <button className="border-2 border-[#29b170] text-[#29b170] px-8 py-3 rounded-lg flex items-center">
                        Approved <IoIosArrowDown className="text-3xl mt-1 ml-2"></IoIosArrowDown>
                    </button>
                    :
                    <button onClick={() => handleConfirmUpdateStatus(_id)} className="btn bg-[#ff3811] text-white px-8">Pending</button>
                }
            </th>
        </tr>
    );
};

export default BookingsCard;