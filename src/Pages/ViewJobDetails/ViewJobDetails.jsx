import { useLoaderData } from "react-router-dom";
import { CiGlobe } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { TbCurrencyTaka } from "react-icons/tb";
import { CiTimer } from "react-icons/ci";
import { FiCheckSquare } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { TbCategoryPlus } from "react-icons/tb";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns';
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ViewJobDetails = () => {
    const job = useLoaderData()
    const axiosSecure= useAxiosSecure()
    const { user } = useAuth()
    useEffect(() => {
        document.title = "JobSync | Job Details"
        Aos.init()
    }, [])

    const handleForm = e => {
        e.preventDefault()
        const form = e.target
        if (user?.email === job.buyer.email) {
            return toast('Buyer is not allowed to place Bid..', {
                position: "top-center"
            })
        }
        const jobId = job._id
        const title = job.title
        const category = job.category
        const price = parseFloat(form.price.value)
        if (price < parseFloat(job.min_price) || price > parseFloat(job.max_price)) {
            return toast.error("price should be in between the amount given!", {
                position: "top-center"
            })
        }
        const email = user?.email
        const comment = form.comment.value
        const name = form.name.value
        const deadline = form.deadline.value
        const status = 'pending'
        const buyer_email = job.buyer.email


        const bidData = {
            jobId,
            name,
            price,
            comment,
            deadline,
            title,
            category,
            email,
            status,
            buyer_email
        }
        console.log(bidData);
        axiosSecure.post(`/bids`, bidData)
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    Swal.fire({
                        title: 'Congratulations!',
                        text: 'Bid added successfully',
                        icon: 'success',
                        confirmButtonText: 'Okay'
                    })
                    navigate('/')
                }
            })
            .catch(function (error) {
                // handle error
                console.log();
                toast.error(error.response.data, {
                    position: "top-center"
                })
                e.target.reset()
            })
    }

    return (
        <div className="max-w-[1300px] mx-auto mt-10 mb-20">
            <div className="flex flex-col justify-between lg:gap-5 lg:flex-row ">
                {/* details section */}
                <div>
                    <div className="md:w-[780px] lg:w-[855px] flex items-center justify-between">
                        <p className=" text-3xl">{job.title}</p>
                        <img className="w-14 rounded-xl mr-4" src={job.buyer.photo} alt="" />
                    </div>
                    <div className="flex items-center  gap-7 mb-6">
                        <p className="mt-2  text-gray-600 ">by <span className="text-primary">{job.buyer.name}</span></p>
                        <p className="flex items-center gap-3"><CiGlobe></CiGlobe> English</p>
                        <p className="flex items-center gap-3"><CiLocationOn></CiLocationOn> Bangladesh</p>
                    </div>
                    <div className="mb-6">
                        <img className="w-[855px] rounded-xl" src={job.jobPhotoURL} alt="" />
                    </div>
                    <div>
                        <h2 className="text-2xl mb-4">Description</h2>
                        <p className=" text-gray-600 text-md border-b pb-3 mb-10">{job.description}</p>
                    </div>
                </div>
                {/* form section */}
                <div className="border lg:h-[calc(100vh-500px)] rounded-xl">
                    <div className="lg:w-[340px] p-5">
                        <p className="flex items-center font-roboto text-2xl border-b pb-4">Min <span className="flex items-center ml-4"><TbCurrencyTaka className="text-2xl"></TbCurrencyTaka>{job.min_price}<span className="ml-2">-</span><TbCurrencyTaka className="text-2xl ml-2"></TbCurrencyTaka>{job.max_price}</span></p>
                        <div className="flex items-center justify-between mt-3 border-b pb-3">
                            <div className="flex items-center gap-2 text-md">
                                <CiTimer className="font-bold"></CiTimer>
                                <p>Posted Date</p>
                            </div>
                            <p>{format(job.postingDate, 'MMMM d, yyyy')}</p>
                        </div>
                        <div className="flex items-center justify-between mt-3 border-b pb-3">
                            <div className="flex items-center gap-2 text-md">
                                <CiTimer className="font-bold"></CiTimer>
                                <p>Deadline</p>
                            </div>
                            <p>{format(job.deadline, 'MMMM d, yyyy')}</p>
                        </div>
                        <div className="flex items-center justify-between mt-3 border-b pb-3">
                            <div className="flex items-center gap-2 text-md">
                                <CiMail className="font-bold"></CiMail>
                                <p>Posted By</p>
                            </div>
                            <p>{job.buyer.email}</p>
                        </div>
                        <div className="flex items-center justify-between mt-3 border-b pb-3">
                            <div className="flex items-center gap-2 text-md">
                                <FiCheckSquare className="font-bold"></FiCheckSquare>
                                <p>Applied</p>
                            </div>
                            <p>{job.bid_count}</p>
                        </div>
                        <div className="flex items-center justify-between mt-3 mb-4">
                            <div className="flex items-center gap-2 text-md">
                                <TbCategoryPlus className="font-bold"></TbCategoryPlus>
                                <p>Category</p>
                            </div>
                            <p>{job.category}</p>
                        </div>

                    </div>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <div className="px-4 mx-auto mb-3">
                        <div className="mr-2">
                            <button onClick={() => document.getElementById('my_modal_5').showModal()} className="rounded-md w-full px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600">
                                <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                                <span className="relative text-indigo-600 transition duration-300 group-hover:text-white ease"> Apply Now</span>
                            </button>
                        </div>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <form onSubmit={handleForm} className="modal-box">
                                <form method="dialog" className="mb-6">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 mb-6 '>
                                    <div className="form-control">
                                        <label className='text-gray-700 ' htmlFor='name'>
                                            Name
                                        </label>
                                        <input
                                            id='name'
                                            type='text'
                                            name='name'
                                            defaultValue={user?.displayName}
                                            required
                                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                        />
                                    </div>

                                    <div className="form-control">
                                        <label className='text-gray-700 ' htmlFor='emailAddress'>
                                            Email Address
                                        </label>
                                        <input
                                            id='emailAddress'
                                            type='email'
                                            name='email'
                                            disabled
                                            defaultValue={user?.email}
                                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className='text-gray-700 ' htmlFor='price'>
                                            Price
                                        </label>
                                        <input
                                            id='price'
                                            type='text'
                                            name='price'
                                            required
                                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                        />
                                    </div>
                                    <div className="form-control">
                                        <label className='text-gray-700 ' htmlFor='deadline'>
                                            Deadline
                                        </label>
                                        <input
                                            id='deadline'
                                            name='deadline'
                                            defaultValue={new Date(job.deadline).toLocaleDateString()}
                                            type='text'
                                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                        />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className='text-gray-700 ' htmlFor='comment'>
                                        Comment
                                    </label>
                                    <input
                                        id='comment'
                                        name='comment'
                                        type='text'
                                        className=' block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                    />
                                </div>
                                <div className="form-control modal-action">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button type='submit' class="relative inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                                        <span class="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                                        <span class="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                                        <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                                        <span class="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white ">Submit Application</span>
                                    </button>
                                </div>
                            </form>
                        </dialog>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ViewJobDetails;