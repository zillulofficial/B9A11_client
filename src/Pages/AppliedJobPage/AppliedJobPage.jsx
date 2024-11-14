import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Aos from "aos";
import 'aos/dist/aos.css'
import BidCard from "../../Components/BidCard/BidCard";
import axios from "axios";

const AppliedJobPage = () => {
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const [bids, setBids] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [filter, setFilter] = useState('')

    useEffect(() => {
        document.title = "JobSync | Add a Job"
        Aos.init()
    }, [])

    useEffect(() => {
        fetchData()

    }, [user])

    const fetchData = () => {
        axiosSecure.get(`/myBids/${user?.email}`)
            .then(res => {
                // console.log(data);
                setBids(res.data)
            })
    }
    // console.log(bids);
    return (
        <div className="mb-24">
            <div className="mt-16 text-center mb-10 md:mb-10">
                <p data-aos="fade-right" className="dms text-5xl text-rose-900 mb-5">Jobs You Applied</p>
                <p data-aos="fade-left" className="text-sm font-roboto container mx-auto">Stay on Top of Your Career Journey: Review, Track, and Manage All Your Applied Jobs in One Place to Monitor Your Progress and Opportunities.</p>
            </div>
            <div className="container mx-auto mb-12">
                <select
                    onChange={e => {
                        setFilter(e.target.value)
                    }}
                    value={filter}
                    name='category'
                    id='category'
                    className='border p-4 rounded-lg'
                >
                    <option value=''>Filter By Category</option>
                    <option value='Web Development'>On Site</option>
                    <option value='Graphics Design'>Remote</option>
                    <option value='Digital Marketing'>Part-Time</option>
                    <option value='Graphics Design'>Hybrid</option>
                </select>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-16 mb-8">
                {
                    bids.map(bid => <BidCard key={bid._id} bid={bid}></BidCard>)
                }
            </div>
        </div>
    );
};

export default AppliedJobPage;