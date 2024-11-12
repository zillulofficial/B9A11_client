import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useState } from "react";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";

const UpdateJobPage = () => {
    const axiosSecure= useAxiosSecure()
    const {user}= useAuth()
    const job = useLoaderData()
    const navigate = useNavigate()
    const [startDate, setStartDate] = useState(new Date());

    const handleUpdate= e=>{
        e.preventDefault()
        const form= e.target
        const title= form.job_title.value
        const deadline= startDate
        const category= form.category.value
        const min_price= parseFloat(form.min_price.value)
        const max_price= parseFloat(form.max_price.value)
        const description = form.description.value
        const buyer= {
            email: user?.email,
            name: user?.displayName,
            photo: user?.photoURL

        }


        const updateJobData= {
            title,
            deadline,
            category,
            min_price,
            max_price,
            description,
            buyer
        }
        // console.table(updateJobData);
        axiosSecure.put(`/job/${job._id}`, updateJobData)
        .then(res=>{
            console.log(res);
            if(res.status === 200){
                Swal.fire({
                    title: 'Success!',
                    text: 'Craft Updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                  })
            }
        }
        )
        navigate('/myPostedJobs')
    }
    return (
        <div>
            <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
                <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
                    <h2 className='text-lg font-semibold text-gray-700 capitalize '>
                        Update a Job
                    </h2>

                    <form onSubmit={handleUpdate}>
                        <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                            <div>
                                <label className='text-gray-700 ' htmlFor='job_title'>
                                    Job Title
                                </label>
                                <input
                                    id='job_title'
                                    name='job_title'
                                    type='text'
                                    defaultValue={job.title}
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                />
                            </div>

                            <div>
                                <label className='text-gray-700 ' htmlFor='emailAddress'>
                                    Email Address
                                </label>
                                <input
                                    id='emailAddress'
                                    type='email'
                                    name='email'
                                    disabled
                                    defaultValue={job.buyer.email}
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                />
                            </div>
                            <div className='flex flex-col gap-2 '>
                                <label className='text-gray-700'>Deadline</label>

                                {/* Date picker input field */}
                                <DatePicker className="border p-2 w-full rounded-md" selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>

                            <div className='flex flex-col gap-2 mb-6'>
                                    <label className='text-gray-700 ' htmlFor='category'>
                                        Category
                                    </label>
                                    <select
                                        name='category'
                                        id='category'
                                        defaultValue={job.category}
                                        className='border p-2 rounded-md'
                                    >
                                        <option value='On Site'>On Site</option>
                                        <option value='Remote'>Remote</option>
                                        <option value='Part-Time'>Part-Time</option>
                                        <option value='Hybrid'>Hybrid</option>
                                    </select>
                                </div>
                            <div>
                                <label className='text-gray-700 ' htmlFor='min_price'>
                                    Minimum Price
                                </label>
                                <input
                                    id='min_price'
                                    name='min_price'
                                    type='number'
                                    defaultValue={job.min_price}
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                />
                            </div>

                            <div>
                                <label className='text-gray-700 ' htmlFor='max_price'>
                                    Maximum Price
                                </label>
                                <input
                                    id='max_price'
                                    name='max_price'
                                    type='number'
                                    defaultValue={job.max_price}
                                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 mt-4'>
                            <label className='text-gray-700 ' htmlFor='description'>
                                Description
                            </label>
                            <textarea
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                name='description'
                                id='description'
                                defaultValue={job.description}
                                cols='30'
                            ></textarea>
                        </div>
                        <div className='flex justify-end mt-6'>
                            <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                                Save
                            </button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default UpdateJobPage;