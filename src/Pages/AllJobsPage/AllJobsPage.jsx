import axios from "axios";
import { useEffect, useState } from "react";
import JobCard from "../../Components/JobCard/JobCard";
import { Link } from "react-router-dom";

const AllJobsPage = () => {
    const [jobs, setJobs] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [count, setCount] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(5)
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
                            <option value='On Site'>On Site</option>
                            <option value='Remote'>Remote</option>
                            <option value='Part-Time'>Part-Time</option>
                            <option value='Hybrid'>Hybrid</option>
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
                    <section className='container px-4 mx-auto pt-12'>
                        

                        <div className='flex flex-col mt-6'>
                            <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                                <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                                    <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                                        <table className='min-w-full divide-y divide-gray-200'>
                                            <thead className='bg-gray-50'>
                                                <tr>
                                                    <th
                                                        scope='col'
                                                        className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                    >
                                                        <div className='flex items-center gap-x-3'>
                                                            <span>Title</span>
                                                        </div>
                                                    </th>

                                                    <th
                                                        scope='col'
                                                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                    >
                                                        Applied
                                                    </th>
                                                    <th
                                                        scope='col'
                                                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                    >
                                                        <span>Deadline</span>
                                                    </th>

                                                    <th
                                                        scope='col'
                                                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                    >
                                                        <button className='flex items-center gap-x-2'>
                                                            <span>Price Range</span>
                                                        </button>
                                                    </th>

                                                    <th
                                                        scope='col'
                                                        className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                                    >
                                                        Category
                                                    </th>

                                                    <th className=' flex justify-center px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                                        Edit
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className='bg-white divide-y divide-gray-200 '>
                                                {
                                                    jobs.map(data => <tr key={data._id}>
                                                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                            {data.title}
                                                        </td>
                                                        <td
                                                            title=''
                                                            className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'
                                                        >
                                                            {new Date(data.postingDate).toLocaleDateString()}
                                                        </td>

                                                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                            {new Date(data.deadline).toLocaleDateString()}
                                                        </td>

                                                        <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                                            ${data.min_price}-${data.max_price}
                                                        </td>
                                                        <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                            <div className='flex items-center gap-x-2'>
                                                                <p
                                                                    className={`px-3 py-1 ${data.category === 'On Site' && 'text-lime-500 bg-lime-100/60'
                                                                        } ${data.category === 'Remote' && 'text-orange-500 bg-orange-100/60'
                                                                        } ${data.category === 'Part-Time' && 'text-teal-500 bg-teal-100/60'
                                                                        } ${data.category === 'Hybrid' && 'text-pink-500 bg-pink-100/60'
                                                                        } rounded-full text-xs
                                                            `}
                                                                >
                                                                    {data.category}
                                                                </p>
                                                            </div>
                                                        </td>
                                                        <td className='px-4 py-4 text-sm whitespace-nowrap'>
                                                            <div className='flex items-center justify-center gap-x-6'>
                                                                <Link to={`/job/${data._id}`} class="relative inline-flex items-center justify-center p-4 px-4 py-2 overflow-hidden font-medium text-[#de5353] transition duration-300 ease-out border-2 border-[#de5353] rounded-full shadow-md group">
                                                                    <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#de5353] group-hover:translate-x-0 ease">
                                                                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                                                    </span>
                                                                    <span class="absolute flex items-center justify-center w-full h-full text-[#de5353] transition-all duration-300 transform group-hover:translate-x-full ease">View Details</span>
                                                                    <span class="relative invisible">View Details</span>
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>)
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
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