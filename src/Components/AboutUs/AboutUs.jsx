import { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'

const AboutUs = () => {
    useEffect(() => {
        // document.title = "JobSync | About Us"
        Aos.init()
    }, [])
    return (
        <div className="max-w-[1185px] mx-auto pt-12 mb-24">
        <div className="lg:flex">
            <div data-aos="fade-right" className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
                <div className="max-w-xl">
                    <h2 className="text-3xl font-semibold lg:text-4xl">Discover Your Next Career at <span className="text-[#de5353]">JobSync</span></h2>

                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">JobSync connects top talent with meaningful job opportunities. Our platform simplifies job searching and hiring, empowering professionals and businesses to grow and thrive in a transparent, community-driven environment. Join us today!</p>

                    <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row"> 
                        <a href="/register" className="block px-5 py-2 text-sm font-medium tracking-wider text-center transition-colors duration-300 transform bg-[#de5353] rounded-md hover:bg-white text-white hover:text-[#de5353] border border-[#de5353] hover:border-[#de5353]">Sign up for free</a>
                        <a href="/aboutUs" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300">Learn More</a>
                    </div>
                </div>
            </div>

            <div data-aos="fade-left" className="w-full h-64 lg:w-2/3 lg:h-auto md:h-[650px]">
                <div className="w-full h-full bg-cover bg-[url(https://i.postimg.cc/fTBkQpVK/bg2.jpg)]">
                    <div className="w-full h-full opacity-25"></div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AboutUs;