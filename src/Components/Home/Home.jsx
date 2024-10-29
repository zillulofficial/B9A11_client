import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Preview from "../Preview/Preview";
import Sponsors from "../Sponsors/Sponsors";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Sponsors></Sponsors>
            <AboutUs></AboutUs>
            <Preview></Preview>
        </div>
    );
};

export default Home;