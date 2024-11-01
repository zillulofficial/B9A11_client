import React from 'react';
import { Link } from 'react-router-dom';
import { TbCurrencyTaka } from "react-icons/tb";

const JobCard = ({ job }) => {
    return (
        <div>
            <Link to={`/job/${job._id}`}>
                <div className='w-full max-w-md px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.03] transition-all ease-in'>

                    <div className='flex items-center justify-between mb-3'>
                        <span className='text-xs font-light text-gray-800 '>
                            Deadline: {new Date(job.deadline).toLocaleDateString()}
                        </span>
                        <span className='px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full '>
                            {job.category}
                        </span>
                    </div>
                    <div className='flex gap-4 items-center mb-3'>
                        <img className='w-12 rounded-full' src={job.buyer.photo} alt="" />
                        <p className='mt-2 text-sm text-gray-600 '><span className='font-rancho text-xl'>{job.buyer.name}</span></p>
                    </div>

                    <div>
                        <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
                            {job.title}
                        </h1>
                        <p className='mt-2 text-sm font-bold text-gray-600 '>posted: {job.postingDate}</p>

                        <p title={job.description} className='mt-2 text-sm text-gray-600 '>
                            {job.description.substring(0, 70)}...
                        </p>
                        <p className='mt-2 text-sm font-bold text-gray-600 flex'>
                            Range: <TbCurrencyTaka className=' ml-2 text-lg'></TbCurrencyTaka>{job.min_price} - <TbCurrencyTaka className='text-lg'></TbCurrencyTaka>{job.max_price}
                        </p>
                        <div className='flex justify-between items-center mb-3'>
                            <p className='mt-2 text-sm font-bold text-gray-600 '>
                                Application Number: {job.bid_count}
                            </p>
                            <Link to={`/job/${job._id}`} class="relative inline-flex items-center justify-center p-4 px-4 py-2 overflow-hidden font-medium text-[#de5353] transition duration-300 ease-out border-2 border-[#de5353] rounded-full shadow-md group">
                                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#de5353] group-hover:translate-x-0 ease">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="absolute flex items-center justify-center w-full h-full text-[#de5353] transition-all duration-300 transform group-hover:translate-x-full ease">View Details</span>
                                <span class="relative invisible">View Details</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default JobCard;