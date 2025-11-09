import React, { useEffect, useState } from 'react';
import deskWork from "../../deskwork.json";
import Lottie from 'lottie-react';
import TextType from './TextType';
import JobSection from './JobSection';

const Banner = () => {

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/latest-jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
            .catch(error => console.error('Error fetching jobs:', error))
    }, [])
    
    return (
        <div>
            <div className='max-w-6xl mx-auto border px-4 py-3 pb-7 flex justify-between items-center'>
                {/* header and button section  */}
                <div className='w-100'>
                    <div>
                        <h1 className='text-3xl font-semibold'>
                        <TextType 
                            text={["Reliable place for job finding ", "Match your achieve skill", "Grab your online dream job"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                        />
                    </h1>
                    </div>
                    

                    <div>
                        <p className='font-semibold'>A multiverse collection of flexible jobs</p>
                    </div>

                    <div className='flex justify-between items-center w-70'>
                        <button className='bg-blue-500 text-white font-semibold px-4 p-2 rounded'>
                            Get Started 
                        </button>
                        <p className='underline font-extralight underline-offset-4'>Explore Features</p>
                    </div>
                </div>

                {/* picture section  */}
                <div className='w-96'>
                    <Lottie animationData={deskWork} loop={true} />
                </div>
            </div>

            <h1 className='text-center text-5xl my-7'>Jobs Section</h1>
            {/* Jobs Grid */}
            <div className='grid my-4 lg:grid-cols-3 grid-cols-2 gap-3 max-w-6xl mx-auto'>
                {jobs?.map((job) => (
                    <JobSection key={job._id || job.title} job={job} />
                ))}
            </div>
        </div>
    );
};

export default Banner;