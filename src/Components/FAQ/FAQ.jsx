import { useEffect } from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from "react-router-dom";

const FAQ = () => {
    useEffect(() => {
        // document.title = "Work Nest | AboutUs"
        Aos.init()
    }, [])

    return (
        <div className=" container mx-auto mb-16">
            <div data-aos="fade-up" className="text-center mb-10">
                <h1 className="text-2xl  capitalize md:text-4xl font-roboto">Frequently Asked Questions</h1>
                <p className="mt-4 font-roboto text-[#7e7e7e]">JobSync's FAQ Section Covers Everything You Need to Know for a Seamless Experience—From Setting Up
                    Your Profile to Posting Jobs<br className="hidden lg:block" /> and Tracking Applications.</p>
            </div>
            <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:w-[1300px] mx-auto mb-12">
                <div className="collapse collapse-arrow mb-1 border p-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium font-roboto">How do I create a profile on JobSync?</div>
                    <div className="collapse-content">
                        <p className="text-[#7e7e7e] font-roboto">To get started, simply click on “Sign Up” and follow the prompts to enter your personal information, upload your resume, and complete your profile details. This helps us recommend jobs that match your experience and interests!</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow mb-1 border p-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium font-roboto">Will my profile be visible to employers?</div>
                    <div className="collapse-content">
                        <p className="text-[#7e7e7e] font-roboto">Yes, your profile will be visible to employers once it’s completed. You can control your visibility settings in the account settings, allowing you to be either fully public or searchable by certain employers only.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow mb-1 border p-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium font-roboto">Can I apply to multiple jobs at once?</div>
                    <div className="collapse-content">
                        <p className="text-[#7e7e7e] font-roboto">Absolutely! You can apply to as many jobs as you want. To keep track, use our "Job Application Tracker" in your dashboard to manage the status and progress of each application.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow mb-1 border p-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium font-roboto">How do I post a job on JobSync?</div>
                    <div className="collapse-content">
                        <p className="text-[#7e7e7e] font-roboto">To post a job, go to the “Add Job” page, fill out the job details, and publish your listing. You can manage and edit your posts from the Employer Dashboard.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow mb-1 border p-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium font-roboto">Can I view applicants' profiles before they apply?</div>
                    <div className="collapse-content">
                        <p className="text-[#7e7e7e] font-roboto">Yes, you can search and view candidate profiles based on criteria you specify. Our search filters allow you to find top talent even before they apply.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow mb-1 border p-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium font-roboto">How can I track the performance of my job listing?</div>
                    <div className="collapse-content">
                        <p className="text-[#7e7e7e] font-roboto">The Employer Dashboard offers analytics for each job listing, showing you metrics like views, clicks, and applications received to help you understand your listing’s reach.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow mb-1 border p-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium font-roboto">Are there options for promoting my job listings?</div>
                    <div className="collapse-content">
                        <p className="text-[#7e7e7e] font-roboto">Yes! You can choose from a range of promotional packages to boost the visibility of your job postings, reaching a larger audience of qualified candidates.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow mb-1 border p-3">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium font-roboto">What if I need help finding specific skill sets?</div>
                    <div className="collapse-content">
                        <p className="text-[#7e7e7e] font-roboto">JobSync’s Smart Job Matches can help you locate candidates with the exact skills you're looking for, or you can contact our support team for assistance with specialized recruiting.</p>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" className="text-center">
                <p className="text-lg font-roboto mb-4">Have a question not covered in the FAQ?</p>
                <Link to='/contactUs' class="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#de5353] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                    <span class="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#de5353] group-hover:h-full"></span>
                    <span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg class="w-5 h-5 text-[#F5F5F5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg class="w-5 h-5 text-[#F5F5F5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Contact us</span>
                </Link>
            </div>

        </div >
    );
};

export default FAQ;