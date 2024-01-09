import About from "./About";
import Banner from "./Banner";
import Services from "./Services/Services";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;