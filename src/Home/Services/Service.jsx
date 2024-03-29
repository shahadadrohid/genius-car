import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
    const { title, img, price, _id } = service;
    return (
        <div className="card border-2">
            <figure className="px-6 pt-6">
                <img src={img} alt="Shoes" className="rounded-xl h-[240px]" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold">{title}</h2>
                <div className="card-actions text-[#ff3811] mt-4">
                    <p className="text-2xl font-semibold">Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <button className="text-3xl">
                            <IoMdArrowForward />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;