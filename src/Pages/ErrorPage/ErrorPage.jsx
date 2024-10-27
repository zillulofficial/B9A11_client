import { Link, useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate= useNavigate()

    const handleBackButton=()=>{
        navigate(-1)
    }
    return (
        <div>
            <section className="bg-white ">
                <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
                    <div className="wf-ull lg:w-1/2">
                        <p className="text-sm font-medium text-teal-500 dark:text-teal-500">404 error</p>
                        <h1 className="mt-3 text-2xl font-semibold text-gray-800  md:text-3xl">Page not found</h1>
                        <p className="mt-4 text-gray-500 dark:text-gray-400">Sorry, the page you are looking for doesn't exist.Here are some helpful links:</p>

                        <div className="flex items-center mt-6 gap-x-3">
                            <button onClick={handleBackButton} className="flex items-center justify-center w-1/2 px-5 py-2 text-sm rounded-lg gap-x-2 sm:w-auto
                             text-gray-700 duration-200 bg-white border border-teal-700 hover:text-teal-700 ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                                </svg>


                                <span>Go back</span>
                            </button>

                            <Link to='/'>
                                <button className="w-1/2 px-5 py-2 text-sm rounded-lg shrink-0 sm:w-auto tracking-wide
                             text-white bg-teal-700 duration-200 hover:bg-[#0f766dbb]">
                                    Take me home
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                        <img className="w-full max-w-lg lg:mx-auto" src="https://i.postimg.cc/wTxMSy14/Error-Image2.png" alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;