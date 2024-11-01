import { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Preview = () => {
    useEffect(() => {
        // document.title = "JobSync | About Us"
        Aos.init()
    }, [])
    return (
        <div>
            <div className="container px-6 py-10 mx-auto mb-24">
                <div data-aos="fade-up">
                    <h1 className="text-2xl text-center text-gray-800 capitalize md:text-4xl font-roboto">Preview
                    </h1>

                    <p className="mt-4 text-center text-gray-400 ">
                        Empowering Job Seekers and Employers: Discover JobSync’s Innovative Tools to Connect Talent with Opportunity Seamlessly
                    </p>
                </div>


                <div data-aos="fade-up" className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-4">
                    <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group bg-[url('https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80')]">
                        <div
                            className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                            <h2 className="mt-4 text-xl font-semibold text-white capitalize mb-3">Smart Job Matches</h2>
                            <p className="mt-2 mb-2 tracking-wider text-blue-400">- Skill-Based Filters</p>
                            <p className="mt-2 mb-2 tracking-wider text-blue-400">- Location Preferences </p>
                            <p className="mt-2 mb-2 tracking-wider text-blue-400">- Salary Range</p>
                        </div>
                    </div>

                    <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group bg-[url('https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')]">
                        <div
                            className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                            <h2 className="mt-4 text-xl font-semibold text-white capitalize">Profile Builder</h2>
                            <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Provides tools for users to create standout profiles.</p>
                        </div>
                    </div>

                    <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group bg-[url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]">
                        <div
                            className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                            <h2 className="mt-4 text-xl font-semibold text-white capitalize">Employer Dashboard</h2>
                            <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">A dedicated space for employers to manage job postings and review applications.</p>
                        </div>
                    </div>
                    <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group bg-[url('https://i.postimg.cc/0jhqNDxx/preview.jpg')]">
                        <div
                            className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                            <h2 className="mt-4 text-xl font-semibold text-white capitalize mb-3">Company Insights</h2>
                            <p className="mt-2 mb-2 tracking-wider text-blue-400">- Company Ratings and Reviews</p>
                            <p className="mt-2 mb-2 tracking-wider text-blue-400">- Salary Comparisons</p>
                            <p className="mt-2 mb-2 tracking-wider text-blue-400">- Company Culture Snapshots</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preview;