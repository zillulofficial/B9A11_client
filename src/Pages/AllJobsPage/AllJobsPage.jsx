import axios from "axios";
import { useEffect, useState } from "react";
import JobCard from "../../Components/JobCard/JobCard";

const AllJobsPage = () => {
    const [jobs, setJobs] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(4)
    const [filter, setFilter] = useState('')
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/allJobs?page=${currentPage}&size=${itemsPerPage}&filter=${filter}&sort=${sort}&search=${search}`)
            .then(res => {
                setJobs(res.data)
            })
    }, [currentPage, itemsPerPage, filter, sort, search])
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/jobsCount?filter=${filter}&search=${search}`)
            .then(res => {
                setCount(res.data.count)
            })
    }, [filter, search])

    const numberOfPages = Math.ceil(count / itemsPerPage)
    const pages = [...Array(numberOfPages).keys().map(element => element + 1)]

    const handlePagination = (value) => {
        // console.log(value);
        setCurrentPage(value)
    }

    const handleReset = () => {
        setFilter('')
        setSort('')
        setSearch('')
        setSearchText('')

    }

    const handleSearch = e => {
        e.preventDefault()
        setSearch(searchText)
    }
    console.log(jobs);
    return (
        <div className='container px-6 py-10 mx-auto min-h-[calc(100vh-306px)] flex flex-col justify-between'>
            <div>
                <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
                    <div>
                        <select
                            onChange={e => {
                                setFilter(e.target.value)
                                setCurrentPage(1)
                            }}
                            value={filter}
                            name='category'
                            id='category'
                            className='border p-4 rounded-lg'
                        >
                            <option value=''>Filter By Category</option>
                            <option value='Web Development'>Web Development</option>
                            <option value='Graphics Design'>Graphics Design</option>
                            <option value='Digital Marketing'>Digital Marketing</option>
                        </select>
                    </div>

                    <form onSubmit={handleSearch}>
                        <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                            <input
                                className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                                type='text'
                                onChange={e => setSearchText(e.target.value)}
                                value={searchText}
                                name='search'
                                placeholder='Enter Job Title'
                                aria-label='Enter Job Title'
                            />

                            <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                                Search
                            </button>
                        </div>
                    </form>
                    <div>
                        <select
                            onChange={e => {
                                setSort(e.target.value)
                                setCurrentPage(1)
                            }}
                            value={sort}
                            name='sort'
                            id='sort'
                            className='border p-4 rounded-md'
                        >
                            <option value=''>Sort By Deadline</option>
                            <option value='dsc'>Descending Order</option>
                            <option value='asc'>Ascending Order</option>
                        </select>
                    </div>
                    <button onClick={handleReset} className='btn'>Reset</button>
                </div>

                {/* all jobs section */}
                <div className="mb-24">
                    <div className="mt-16 text-center mb-10 md:mb-7">
                        <p data-aos="fade-right" className="dms text-5xl text-[#de5353] mb-5">Add a Job</p>
                        <p data-aos="fade-left" className="text-sm font-roboto container mx-auto">Create and Share a Job Listing to Find Your Ideal Candidate: Post Open Roles, Reach Qualified Talent, and Discover Skilled Professionals Ready to Join Your Team—All in Just a Few Steps</p>
                    </div>
                    <div data-aos="zoom-in-up" className='flex justify-center items-center min-h-[calc(100vh-306px)] mb-12'>
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
                                                <option value='Remote'>Remote</option>
                                                <option value='Part-Time'>Part-Time</option>
                                                <option value='Hybrid'>Hybrid</option>
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
                                    {/* <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                                Save
                            </button> */}
                                    <button class="relative inline-block text-lg group">
                                        <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-[#de5353] rounded-lg group-hover:text-white">
                                            <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                                            <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#de5353] group-hover:-rotate-180 ease"></span>
                                            <span class="relative">Save</span>
                                        </span>
                                        <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#de5353] rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                                    </button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>

            {/* pagination section */}
            <div className='flex justify-center mt-12'>
                {/* previous button */}
                <button disabled={currentPage === 1}
                    onClick={() => handlePagination(currentPage - 1)}
                    className='px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white'>
                    <div className='flex items-center -mx-1'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M7 16l-4-4m0 0l4-4m-4 4h18'
                            />
                        </svg>

                        <span className='mx-1'>previous</span>
                    </div>
                </button>
                {/* number of pages */}
                {pages.map(btnNum => (
                    <button
                        onClick={() => handlePagination(btnNum)}
                        key={btnNum}
                        className={`hidden ${btnNum === currentPage ? 'text-white bg-blue-200' : ''} px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
                    >
                        {btnNum}
                    </button>
                ))}
                {/* next button */}
                <button disabled={currentPage === numberOfPages}
                    onClick={() => handlePagination(currentPage + 1)}
                    className='px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500'>
                    <div className='flex items-center -mx-1'>
                        <span className='mx-1'>Next</span>

                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='w-6 h-6 mx-1 rtl:-scale-x-100'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M17 8l4 4m0 0l-4 4m4-4H3'
                            />
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default AllJobsPage;