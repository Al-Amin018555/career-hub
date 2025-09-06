import { useEffect, useState } from "react";
import Job from "./Job";

const Jobs = () => {
    const [Jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="text-center space-y-4">
                <h2 className="font-extrabold text-2xl md:text-5xl">Featured Jobs</h2>
                <p className="font-medium text-[#757575]">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="mt-8 grid gap-6 grid-cols-1 lg:grid-cols-2">
                {
                    Jobs.slice(0,4).map(job => <Job key={job.id} job={job}></Job>)
                }

            </div>
            <div className="text-center mt-10">
                 <button className="btn py-5 rounded-lg px-7 h-[50px] text-white bg-gradient-to-r from-blue-500 to-purple-500">See All Jobs</button>
            </div>
        </div>
    );
};

export default Jobs;