import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Banner = () => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimated, setIsAnimated] = useState(false)

    const handleFlip = () => {
        if (!isAnimated) {
            setIsFlipped(!isFlipped)
            setIsAnimated(true)
        }
    }
    return (
        <div className="bg-gradient-to-b from-[#0066ff10] to-white md:min-h-[calc(100vh-250px)]">
            <div className="max-w-[1185px] mx-auto flex md:mb-24 pt-16 md:pt-32">
                {/* text part */}
                <div className=" flex-1">
                    <p className="mb-4">NO.1 FREELANCE MARKETPLACE</p>
                    <h3 className="text-6xl font-semibold mb-5">Find the best <br /><span className="font-normal dms text-[#de5353]">freelance</span> services</h3>
                    <p className="text-xl text-[#4a5264] pb-4 mb-6">Over 1200+ expect freelancers are waiting for you</p>
                    <Link to='/addJob'>
                        <button className="cursor-pointer relative group overflow-hidden border-2 px-8 py-2 border-[#93c5fd] rounded-lg">
                            <span className="font-bold text-white text-xl relative z-10 group-hover:text-[#93c5fd] duration-500">Post a Job for Free</span>
                            <span className="absolute top-0 left-0 w-full bg-[#93c5fd8f] duration-500 group-hover:-translate-x-full h-full"></span>
                            <span className="absolute top-0 left-0 w-full bg-[#93c5fd8f] duration-500 group-hover:translate-x-full h-full"></span>

                            <span className="absolute top-0 left-0 w-full bg-[#93c5fd8f] duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
                            <span className="absolute delay-300 top-0 left-0 w-full bg-[#93c5fd8f] duration-500 group-hover:translate-y-full h-full"></span>
                        </button>
                    </Link>
                </div>
                {/* grid picture part */}
                <div className=" hidden lg:grid lg:grid-cols-4 lg:gap-6 flex-1">
                    <div className="lg:col-span-2 h-32 lg:row-span-2 flip-card" onMouseEnter={handleFlip}>
                        <motion.div
                            className="flip-card-inner"
                            initial={false}
                            animate={{ rotateY: isFlipped ? 180 : 360 }}
                            transition={{ duration: 0.6, animationDirection: 'normal' }}
                            onAnimationComplete={() => setIsAnimated(false)}
                        >
                            <div className="w-full h-full flip-card-front">
                                <img className="rounded-full" src="https://i.postimg.cc/Y0wj71TB/banner2.jpg" alt="" />
                            </div>
                            <div className="w-full flip-card-back bg-[#0066ff10] h-[161.83px] rounded-full py-11 cursor-pointer">
                                <div className=" h-full">
                                    <p className="text-5xl font-bold text-blue-300 text-center">50K</p>
                                    <h3 className="text-xl text-center">Expert Freelancers</h3>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="lg:col-span-2 lg:row-span-4 w-56 mx-auto">
                        <img className="rounded-full lg:h-[450px]" src="https://i.postimg.cc/4ybyxYT7/banner4.jpg" alt="" />
                    </div>
                    <div className="translate-y-16 w-28 mx-auto rounded-full">
                        <img className="rounded-full" src="https://i.postimg.cc/d16gQFxQ/banner3-replace.jpg" alt="" />
                    </div>
                    <div className="translate-y-16 h-[200px] w-36 mx-auto flip-card" onMouseEnter={handleFlip}>
                        <motion.div
                            className="flip-card-inner"
                            initial={false}
                            animate={{ rotateY: isFlipped ? 180 : 360 }}
                            transition={{ duration: 0.6, animationDirection: 'normal' }}
                            onAnimationComplete={() => setIsAnimated(false)}
                        >
                            <div className="w-full h-full flip-card-front">
                                <img className="rounded-full" src="https://i.postimg.cc/PJq9P7gW/banner.jpg" alt="" />
                            </div>
                            <div className="w-full flip-card-back bg-[#0066ff10] h-[207.56px] rounded-full py-16 cursor-pointer">
                                <div className=" h-full">
                                    <p className="text-5xl font-bold text-teal-300 text-center">5K+</p>
                                    <h3 className="text-xl text-center">Service</h3>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;