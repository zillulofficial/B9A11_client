import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
    const { user, logout } = useAuth()
    const navigate = useNavigate()
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    useEffect(() => {
        localStorage.setItem("theme", theme)
        const localTheme = localStorage.getItem("theme")
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])


    const handleToggle = e => {
        if (e.target.checked) {
            setTheme("dark")
        }
        else {
            setTheme("light")
        }
    }
    const navLinks = <>
        <NavLink to="/"><li><a className="hover:bg-[#0066ff10]">Home</a></li></NavLink>
        <NavLink to="/allJobs"><li><a className="hover:bg-[#0066ff10]">All Jobs</a></li></NavLink>
        <NavLink to="/blogs"><li><a className="hover:bg-[#0066ff10]">Blogs</a></li></NavLink>
    </>
    const handleLogout = () => {
        logout()
            .then()
            .catch(error => console.error(error))
    }
    return (
        <div className=" w-full shadow-sm">
            <div className="navbar container mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className='flex-1'>
                        <div className='flex items-center'>
                            <img className='w-auto h-6 md:h-10 text-primary hover:cursor-pointer' src='https://i.postimg.cc/GhML5xqS/webLogo.png' alt='' />
                            <Link to='/'><span className="font-bold md:text-4xl">o b </span><sub className="md:text-2xl font-rancho font-bold">Sync</sub></Link>
                        </div>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? <>
                            <div className="navbar-end flex items-center gap-3">
                                <button onClick={handleLogout} className="btn relative text-sm rounded overflow-hidden group bg-[#0066ff10] hover:bg-[#0066ff10] border-none  hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300">
                                    <span class="absolute right-0  -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                    <span class="relative">Logout</span>
                                </button>
                                <div className="dropdown dropdown-end dropdown-hover">
                                    <div className='dropdown dropdown-end z-50'>
                                        <div
                                            tabIndex={0}
                                            role='button'
                                            className='btn btn-ghost btn-circle avatar'
                                        >
                                            <div className='w-10 rounded-full my-anchor-element '>
                                                <img
                                                    referrerPolicy='no-referrer'
                                                    alt='User Profile Photo'
                                                    src={user.photoURL ? user.photoURL : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
                                                />
                                            </div>
                                        </div>
                                        <ul
                                            tabIndex={0}
                                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                                        >
                                            <li>
                                                <Link to='/addJob'><div className='justify-between'>Add Job</div></Link>
                                            </li>
                                            <li>
                                                <Link to='/myJobs'><div>My Jobs</div></Link>
                                            </li>
                                            <li>
                                                <Link to='/appliedJobs'><div>Applied Jobs</div></Link>
                                            </li>
                                            <li onClick={handleLogout} className='mt-2'>
                                                <button className='bg-gray-200 block text-center'>Logout</button>
                                            </li>
                                        </ul>

                                    </div>
                                    <Tooltip anchorSelect=".my-anchor-element" place="left" className="">
                                        <p>{user.email}</p>
                                    </Tooltip>
                                </div>

                            </div>
                        </>
                            :
                            <div className="navbar-end flex justify-end items-center gap-3">
                                <Link to='/login' class="relative rounded px-4 py-2 overflow-hidden group bg-[#0066ff10] hover:bg-gradient-to-r hover:from-[#0066ff10] hover:to-[#0066ff04]  hover:ring-2 hover:ring-offset-2 hover:ring-blue-400 transition-all ease-out duration-300">
                                    <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                                    <span class="relative">Login</span>
                                </Link>
                            </div>
                    }
                    <label className="swap swap-rotate text-end ml-3">

                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" onChange={handleToggle} checked={theme === "light" ? false : true} />

                        {/* sun icon */}
                        <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                        {/* moon icon */}
                        <svg className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                    </label>
                </div>
            </div>
        </div>
      
    );
};

export default Navbar;