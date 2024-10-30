import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddJobPage = () => {
    // const axiosSecure= UseAxiosSecure()
    const { user } = useAuth()
    const [startDate, setStartDate] = useState(new Date());
    const [fixDate, setFixDate] = useState(new Date());
    const [value, setValue] = useState();
    const navigate = useNavigate()

    const handleForm = e => {
        e.preventDefault()
        const form = e.target
        const title = form.job_title.value
        const deadline = startDate
        const postingDate = form.postingDate.value
        const category = form.category.value
        const jobPhotoURL = form.jobPhotoURL.value
        const min_price = parseFloat(form.min_price.value)
        const max_price = parseFloat(form.max_price.value)
        const description = form.description.value
        const buyer = {
            email: user?.email,
            name: user?.displayName,
            photo: user?.photoURL

        }


        const addJobData = {
            jobPhotoURL,
            title,
            category,
            deadline,
            postingDate,
            min_price,
            max_price,
            description,
            buyer,
            bid_count: 0,
        }
        console.table(addJobData);
        // axiosSecure.post(`/jobs`, addJobData)
        // .then(res=>{
        //     console.log(res);
        //     if(res.status === 200){
        //         Swal.fire({
        //             title: 'Congratulations!',
        //             text: 'Order added successfully',
        //             icon: 'success',
        //             confirmButtonText: 'Okay'
        //         })
        //     }
        // }
        // )

        // navigate('/myPostedJobs')
    }
    return (
        <div>
            <div className="mt-24 text-center mb-10 md:mb-2">
                <p className="dms text-4xl mb-3">Add a Job</p>
                <p className="text-sm font-roboto container mx-auto">Create and Share a Job Listing to Find Your Ideal Candidate: Post Open Roles, Reach Qualified Talent, and Discover Skilled Professionals Ready to Join Your Team—All in Just a Few Steps</p>
            </div>
            <div className='flex justify-center items-center min-h-[calc(100vh-306px)] mb-12'>
                <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>

                    <form onSubmit={handleForm}>
                        <div className="flex flex-col md:flex-row md:gap-6 justify-between">
                            <div>
                                <div className="mb-6 pt-4">
                                    <label className='text-gray-700 ' htmlFor='jobPhotoURL'>
                                        Job PhotoURL
                                    </label>
                                    <input
                                        id='jobPhotoURL'
                                        name='jobPhotoURL'
                                        type='text'
                                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className='text-gray-700 ' htmlFor='job_title'>
                                        Job Title
                                    </label>
                                    <input
                                        id='job_title'
                                        name='job_title'
                                        type='text'
                                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                    />
                                </div>

                                <div className='flex flex-col gap-2 mb-6'>
                                    <label className='text-gray-700 ' htmlFor='category'>
                                        Category
                                    </label>
                                    <select
                                        name='category'
                                        id='category'
                                        className='border p-2 rounded-md'
                                    >
                                        <option value='On Site'>On Site</option>
                                        <option value='Graphics Design'>Graphics Design</option>
                                        <option value='Digital Marketing'>Digital Marketing</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                                    <div>
                                        <label className='text-gray-700 ' htmlFor='displayName'>
                                            UserName
                                        </label>
                                        <input
                                            id='displayName'
                                            name='displayName'
                                            defaultValue={user?.displayName}
                                            type='text'
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
                                            defaultValue={user?.email}
                                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2 '>
                                        <label className='text-gray-700'>Deadline</label>

                                        {/* Date Picker Input Field */}
                                        <DatePicker className="border p-2 w-full rounded-md" selected={startDate} onChange={(date) => setStartDate(date)} />
                                    </div>

                                    <div className='flex flex-col gap-2'>
                                        <label className='text-gray-700 ' htmlFor='postingDate'>
                                            Posting Date
                                        </label>
                                        <DatePicker className="border p-2 w-full rounded-md" name="postingDate" selected={fixDate} />
                                    </div>
                                    <div>
                                        <label className='text-gray-700 ' htmlFor='min_price'>
                                            Minimum Price
                                        </label>
                                        <input
                                            id='min_price'
                                            name='min_price'
                                            type='number'
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
                                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700 ' htmlFor='description'>
                                Description
                            </label>
                            <textarea
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                name='description'
                                id='description'
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

export default AddJobPage;