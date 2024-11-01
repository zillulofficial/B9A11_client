import { useLoaderData } from "react-router-dom";
import { CiGlobe } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'

const ViewJobDetails = () => {
    useEffect(() => {
        document.title = "JobSync | Job Details"
        Aos.init()
    }, [])
    const job = useLoaderData()
    return (
        <div className="container mx-auto mt-10 mb-20">
            <div>
                {/* details section */}
                <div>
                    <div className="flex items-center justify-between">
                        <p className=" text-3xl">{job.title}</p>
                        <img className="w-14 rounded-xl" src={job.buyer.photo} alt="" />
                    </div>
                    <div className="mb-6 ">
                        <div className="flex items-center  gap-7 ">
                            <p className="mt-2  text-gray-600 ">by <span className="text-primary">{job.buyer.name}</span></p>
                            <p className="flex items-center gap-3"><CiGlobe></CiGlobe> English</p>
                            <p className="flex items-center gap-3"><CiLocationOn></CiLocationOn> Bangladesh</p>
                        </div>
                    </div>
                    <div className="mb-6">
                        <img className="w-[855px] rounded-xl" src={job.jobPhotoURL} alt="" />
                    </div>
                    <div>
                        <h2 className="text-2xl mb-4">Description</h2>
                        <p className=" text-gray-600 text-md">{job.description}</p>
                    </div>
                </div>
                {/* form section */}
                <form>
                    
                </form>
            </div>
        </div>
    );
};

export default ViewJobDetails;