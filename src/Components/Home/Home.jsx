import { useEffect } from "react";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import Preview from "../Preview/Preview";
import Sponsors from "../Sponsors/Sponsors";

const Home = () => {
    useEffect(() => {
        document.title = "JobSync | Home"
        // Aos.init()
    }, [])
    return (
        <div>
            <Banner></Banner>
            <Sponsors></Sponsors>
            <AboutUs></AboutUs>
            <Preview></Preview>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;