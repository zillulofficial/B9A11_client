import { useEffect } from "react";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import Preview from "../Preview/Preview";
import Sponsors from "../Sponsors/Sponsors";
import JobByCategory from "../JobByCategory/JobByCategory";

const Home = () => {
    useEffect(() => {
        document.title = "JobSync | Home"
        // Aos.init()
    }, [])
    return (
        <div>
            <Banner></Banner>
            <Sponsors></Sponsors>
            <JobByCategory></JobByCategory>
            <AboutUs></AboutUs>
            <Preview></Preview>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;