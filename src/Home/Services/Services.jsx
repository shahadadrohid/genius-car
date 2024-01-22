import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://server-genius-car.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServices(data)
            })
    }, [])
    return (
        <div>
            <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-[#FF3811] text-3xl font-semibold">Service</h3>
                <h2 className="text-5xl font-bold my-5 text-[Dark 01]">Our Service Area</h2>
                <p>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-14">
                {
                    services.map(
                        service =>
                            <Service
                                key={service._id}
                                service={service}
                            ></Service>
                    )
                }
            </div>
        </div>
    );
};

export default Services;