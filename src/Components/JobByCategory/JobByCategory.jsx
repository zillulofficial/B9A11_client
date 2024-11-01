import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from '../JobCard/JobCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { GiCommercialAirplane } from "react-icons/gi";
import { MdHomeWork } from "react-icons/md";
import { MdTimelapse } from "react-icons/md";
import { FaBusinessTime } from "react-icons/fa";


const JobByCategory = () => {
    const [jobs, setJobs]= useState([])

    useEffect(()=>{
        axios.get(`${import.meta.env.VITE_API_URL}/jobs`)
        .then(res=>setJobs(res.data))
    }, [])
    console.log(jobs);
    return (
        <div className='max-w-[1300px] mx-auto mb-24'>
            <div>
                <h1 className='text-2xl font-roboto lg:text-3xl text-center capitalize mb-4'>Job by category</h1>
                <p className='max-w-3xl font-roboto mx-auto text-center mb-8'>Discover Unique Job Opportunities by Category and Find the
                    Ideal Work Environment that Matches Your Lifestyle and Professional Aspirations</p>
            </div>
            <Tabs>
                <div className='flex justify-center items-center mb-8'>
                    <TabList>
                        <Tab><div className='flex items-center gap-2 font-rancho text-lg'><GiCommercialAirplane className='text-[#de5353]'></GiCommercialAirplane>Remote</div></Tab>
                        <Tab><div className='flex items-center gap-2 font-rancho text-lg'><MdHomeWork className='text-[#de5353]'></MdHomeWork>On Site</div></Tab>
                        <Tab><div className='flex items-center gap-2 font-rancho text-lg'><MdTimelapse className='text-[#de5353]'></MdTimelapse>Part-Time</div></Tab>
                        <Tab><div className='flex items-center gap-2 font-rancho text-lg'><FaBusinessTime className='text-[#de5353]'></FaBusinessTime>Hybrid</div></Tab>
                    </TabList>

                </div>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            jobs.filter(j=> j.category === 'Remote').map(job=><JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            jobs.filter(j=> j.category === 'On Site').map(job=><JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            jobs.filter(j=> j.category === 'Part-Time').map(job=><JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            jobs.filter(j=> j.category === 'Hybrid').map(job=><JobCard key={job._id} job={job}></JobCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default JobByCategory;