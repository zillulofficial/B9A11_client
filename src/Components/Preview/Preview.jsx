
const Preview = () => {
    return (
        <div>
            <div className="container px-6 py-10 mx-auto mb-24">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize md:text-3xl ">Preview
                    </h1>

                    <p className="mt-4 text-center text-gray-400 ">
                    Empowering Job Seekers and Employers: Discover JobSync’s Innovative Tools to Connect Talent with Opportunity Seamlessly
                    </p>


                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                        <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group bg-[url('https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80')]">
                            <div
                                className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                <h2 className="mt-4 text-xl font-semibold text-white capitalize">Best website collections</h2>
                                <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Website</p>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group bg-[url('https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80')]">
                            <div
                                className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                <h2 className="mt-4 text-xl font-semibold text-white capitalize">Block of Ui kit collections</h2>
                                <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Ui kit</p>
                            </div>
                        </div>

                        <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group bg-[url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]">
                            <div
                                className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                <h2 className="mt-4 text-xl font-semibold text-white capitalize">Ton’s of mobile mockup</h2>
                                <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase ">Mockups</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Preview;