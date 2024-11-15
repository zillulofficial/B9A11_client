import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { RiDoubleQuotesR } from "react-icons/ri";

const Blogs = () => {
    return (
        <div className='mb-24'>
            <div className='mb-16'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper lg:min-h-[500px]"
                >
                    <SwiperSlide className='relative '>
                        <img className='w-full' src="https://i.postimg.cc/t47Yts3S/blog.jpg" alt="" />
                        <div className='absolute top-1/4 lg:top1/3 md:left-72 left-24'>
                            <p className='text-sm md:text-3xl lg:text-7xl text-white uppercase mb-2'>Empowering Job <br className='hidden md:block' />Seekers with Expert <br className='hidden md:block' />Insights</p>
                            <p className='text-white text-[8px] md:text-sm lg:text-base mb-4 uppercase'>By Admin</p>
                            <Link to='/aboutUs'><button className='md:btn px-4 py-2 rounded-md hover:bg-slate-200 bg-slate-300 uppercase text-[10px] lg:text-base'>Read More</button></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full' src="https://i.postimg.cc/8z3syTw1/blog2.jpg" alt="" />
                        <div className='absolute top-1/4 lg:top1/3 md:left-72 left-24'>
                            <p className='text-sm md:text-3xl lg:text-7xl text-white uppercase mb-2'>Unlocking Success <br className='hidden md:block' />in Today’s Job Market</p>
                            <p className='text-white text-[8px] md:text-sm lg:text-base mb-4 uppercase'>By Admin</p>
                            <Link to='/aboutUs'><button className='md:btn px-4 py-2 rounded-md hover:bg-slate-200 bg-slate-300 uppercase text-[10px] lg:text-base'>Read More</button></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full' src="https://i.postimg.cc/W3czvSQC/blog3.jpg" alt="" />
                        <div className='absolute top-1/4 lg:top1/3 md:left-72 left-24'>
                            <p className='text-sm md:text-3xl lg:text-7xl text-white uppercase mb-2'>Navigating Career <br className='hidden md:block' />Paths with Essential <br className='hidden md:block' />Resources</p>
                            <p className='text-white text-[8px] md:text-sm lg:text-base mb-4 uppercase'>By Admin</p>
                            <Link to='/aboutUs'><button className='md:btn px-4 py-2 rounded-md hover:bg-slate-200 bg-slate-300 uppercase text-[10px] lg:text-base'>Read More</button></Link>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className='container mx-auto'>
                {/* blog 1 */}
                <div className='flex flex-col lg:flex-row items-center justify-center mb-16 border-b pb-12'>
                    <img className=' lg:w-3/5' src="https://i.postimg.cc/MGjRDDMH/token-image.png" alt="" />
                    <div className='flex-1'>
                        <p className='text-3xl mb-2'> What is an access token and refresh token?<br /> How do they work?</p>
                        <p className='uppercase mb-5'>By Admin / November 15, 2024</p>
                        <p className='text-[#777777] lg:w-[600px] mb-6'>An access token is a short-lived token that serves as proof of authentication and authorization. It allows the client to access specific protected resources (like APIs). Access tokens are sent with every request to the server, typically in the HTTP Authorization header as a Bearer token. These tokens usually have a short expiration time, such as 15-30 minutes, to limit their risk if compromised.<br />
                            A refresh token, on the other hand, is long-lived and is used to obtain a new access token once the old one expires. Instead of requiring the user to log in again, the client sends the refresh token to the server to request a new access token. This ensures the user session remains active without frequent logins. Refresh tokens typically have a longer expiration time, such as days or weeks, compared to access tokens. <br />
                            Access tokens are often encoded as JSON Web Tokens (JWT), which contain information about the user and their permissions. These tokens are signed by the server, ensuring their authenticity. Refresh tokens are designed solely for renewing access tokens and are not sent with every API request.
                        </p>
                        <Link to='https://jwt.io/'><button className='bg-black text-white px-4 py-2 mb-6'>Learn More</button></Link>
                        {/* social icons */}
                        <div className='flex items-center gap-3'>
                            <FaFacebookF className='text-xl hover:cursor-pointer'></FaFacebookF>
                            <FaTwitter className='text-xl hover:cursor-pointer'></FaTwitter>
                            <FaPinterest className='text-xl hover:cursor-pointer'></FaPinterest>
                        </div>
                    </div>
                </div>
                <div className='text-center border-b pb-20 mb-16'>
                    <RiDoubleQuotesR className=' text-5xl text-primary w-full mb-4'></RiDoubleQuotesR>
                    <p className='text-4xl mb-6'>Explore Career Insights, Job Market Trends, and Expert Tips to Supercharge <br  className='hidden md:block'/>Your Professional Journey</p>
                    <p>-Zillul Hakim</p>
                </div>
                {/* blog 2 */}
                <div className='flex flex-col lg:flex-row gap-20 items-center justify-center mb-16 border-b pb-12'>
                    <img className='lg:w-1/2' src="https://i.postimg.cc/zBZhPgKj/express-js.png" alt="" />
                    <div className='flex-1'>
                        <p className='text-3xl mb-2'>What is express js?</p>
                        <p className='uppercase mb-5'>By Admin / November 15, 2024</p>
                        <p className='text-[#777777] lg:w-[600px] mb-6'>Express.js is a minimalist and flexible web application framework for Node.js that simplifies the process of building web applications and APIs. It provides a robust set of features for building both single-page and multi-page web applications. As a core part of the MEAN (MongoDB, Express, Angular, Node) and MERN (MongoDB, Express, React, Node) stacks, Express.js is one of the most popular frameworks in modern web development.</p>
                        <Link to='https://expressjs.com/'><button className='bg-black text-white px-4 py-2 mb-6'>Learn More</button></Link>
                        {/* social icons */}
                        <div className='flex items-center gap-3'>
                            <FaFacebookF className='text-xl hover:cursor-pointer'></FaFacebookF>
                            <FaTwitter className='text-xl hover:cursor-pointer'></FaTwitter>
                            <FaPinterest className='text-xl hover:cursor-pointer'></FaPinterest>
                        </div>
                    </div>
                </div>
                <div className='w-[900px] mx-auto border-b pb-20 mb-16 flex justify-center items-center'>
                        <img className='w-96' src="https://i.postimg.cc/hP3trZzB/Pngtree-3d-alphabet-letter-j-design-5877829.png" alt="" />
                        <div className='text-center'>
                            <p className='text-primary'>Explore our facility</p>
                            <p className='text-3xl mb-4'>Simplifying Your Job Search Journey</p>
                            <p className='text-[#777777]'>JobSync connects job seekers and employers effortlessly. Discover opportunities, track applications, and streamline your job search journey in one user-friendly platform.</p>
                        </div>
                </div>
                {/* blog 3 */}
                <div className='flex flex-col lg:flex-row gap-20 items-center justify-center mb-16 border-b pb-12'>
                    <img className='lg:w-1/2' src="https://i.postimg.cc/wjrLLPBn/nest-js.jpg" alt="" />
                    <div className='flex-1'>
                        <p className='text-3xl mb-2'>What is Nest JS?</p>
                        <p className='uppercase mb-5'>By Admin / November 15, 2024</p>
                        <p className='text-[#777777] lg:w-[600px] mb-6'>NestJS is a progressive, modular, and versatile framework for building efficient, scalable, and maintainable server-side applications using Node.js. It is built with TypeScript (and supports JavaScript) and leverages the best practices of Object-Oriented Programming (OOP), Functional Programming (FP), and Model-View-Controller (MVC) patterns.</p>
                        <Link to='https://nestjs.com/'><button className='bg-black text-white px-4 py-2 mb-6'>Learn More</button></Link>
                        {/* social icons */}
                        <div className='flex items-center gap-3'>
                            <FaFacebookF className='text-xl hover:cursor-pointer'></FaFacebookF>
                            <FaTwitter className='text-xl hover:cursor-pointer'></FaTwitter>
                            <FaPinterest className='text-xl hover:cursor-pointer'></FaPinterest>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;