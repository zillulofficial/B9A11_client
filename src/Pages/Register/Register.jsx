import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoPersonSharp } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className='min-h-screen flex justify-center items-center'>
            {/* content part */}
            <div class="flex-1">
                <div class="lg:w-1/2 mb-12 mx-auto">
                    <div className='flex justify-between'>
                        <div className='flex items-center mb-20'>
                            <img className='w-auto h-14 text-primary hover:cursor-pointer' src='https://i.postimg.cc/GhML5xqS/webLogo.png' alt='' />
                            <Link to='/'><span className="font-bold text-4xl">o b </span><sub className="text-2xl font-rancho font-bold">Sync</sub></Link>
                        </div>
                        <div className='flex gap-4 pt-3'>
                            <Link to='/login'><p className=' text-lg font-roboto'>Log In</p></Link>
                            <p className=' text-lg font-roboto'>|</p>
                            <Link to='/register'><p className='text-[#ff0000] text-lg font-roboto'>Register</p></Link>
                        </div>
                    </div>
                    <div>
                        <h1 class="mt-4 text-[26px] text-[#111111] font-bold font-roboto mb-2">Register</h1>
                        <p className='text-lg font-roboto text-[#646464]'>Create an account free and enjoy it</p>
                    </div>
                </div>

                {/* input fields */}
                <div className="mt-8 lg:w-1/2 lg:mt-0 mx-auto">
                    <form className="w-full lg:max-w-xl">
                        <div className="relative flex items-center mb-4">
                            <input type="name" name="name" placeholder="Name" className="block w-full py-3 text-gray-700 bg-white border-b-[1px]" />
                            <span className="absolute top-3 right-4">
                                <IoPersonSharp className="text-[#9c9c9c] text-xl"></IoPersonSharp>
                            </span>

                        </div>
                        <div className="relative flex items-center mb-4">
                            <input type="photo" name="photo" placeholder="PhotoURL" className="block w-full py-3 text-gray-700 bg-white border-b-[1px]" required/>
                            <span className="absolute top-3 right-4">
                                <FaCamera className="text-[#9c9c9c] text-xl"></FaCamera>
                            </span>

                        </div>
                        <div className="relative flex items-center">
                            <input type="email" name="email" placeholder="Email address" className="block w-full py-3 text-gray-700 bg-white border-b-[1px]" required/>
                            <span className="absolute top-3 right-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#9c9c9c] text-xl" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>

                        </div>

                        <div className="relative flex items-center mt-4">
                            <input type={showPassword ? "text" : "password"} name='password' className="block w-full py-3 text-gray-700 bg-white border-b-[1px]" placeholder="Password" required/>
                            <span className="absolute top-3 right-4" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <IoMdEyeOff className="text-[#9c9c9c] text-xl"></IoMdEyeOff> : <FaEye className="text-[#9c9c9c] text-xl"></FaEye>
                                }
                            </span>

                        </div>

                        {/* Login Button  */}
                        <div className="mt-8 md:flex md:items-center mb-12">
                            <button className="w-1/3 px-6 py-3 text-lg font-medium font-roboto text-white duration-300 transform bg-[#ff0000] relative inline-flex items-center justify-start overflow-hidden  transition-all group">
                                <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-300 group-hover:-mr-4 group-hover:-mt-4">
                                    <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                                </span>
                                <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-[#da0000] group-hover:mb-12 group-hover:translate-x-0"></span>
                                <span className="relative w-full text-center text-white transition-colors duration-200 ease-in-out group-hover:text-white">Register</span>
                            </button>
                        </div>

                        {/* Social Icons */}
                        {/* <div className='lg:w-1/2 mx-auto flex items-center justify-center gap-3 '>
                                    <p className='bg-[#00ccee] w-10 h-10 rounded-full flex items-center justify-center hover:cursor-pointer hover:border hover:border-[#00ccee] hover:bg-white duration-300'><TbBrandGithubFilled className='text-white text-xl hover:text-[#00ccee]'></TbBrandGithubFilled></p>
                                    <p className='text-white  font-bold rounded-full duration-300 bg-[#cc3333] w-10 h-10 flex items-center justify-center hover:text-[#cc3333] hover:cursor-pointer hover:border hover:border-[#cc3333] hover:bg-white'>G+</p>
                                    <p className='text-white text-xl font-bold rounded-full duration-300 bg-[#3b5998] w-10 h-10 flex items-center justify-center hover:text-[#3b5998] hover:cursor-pointer hover:border hover:border-[#3b5998] hover:bg-white'>f</p>
                        </div> */}
                    </form>
                </div>
            </div>
            <div className='flex-1'>
                {/* picture part */}
                <img className='w-full' src="https://i.postimg.cc/1RVCpM2r/registration.jpg" alt="" />
            </div>
        </div>
    );
};

export default Register;