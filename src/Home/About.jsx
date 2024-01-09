import person from '../assets/images/about_us/person.jpg';
import parts from '../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative'>
                        <img src={person} className="w-4/5 rounded-lg shadow-2xl" />
                        <img src={parts} className="max-w-sm absolute left-64 top-1/2 rounded-lg shadow-2xl border-8 border-white" />
                    </div>
                    <div className='lg:w-1/2 pl-20 space-y-4'>
                        <h3 className='text-2xl text-[#ff3811] font-semibold'>About Us</h3>
                        <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                        <div className='py-6'>
                            <p className="pb-5 leading-7">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                            <p className='leading-7'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        </div>
                        <button className="btn bg-[#ff3811] text-white">Get More Info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;