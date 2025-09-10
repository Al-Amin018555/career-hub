import { useEffect, useState } from "react";
import { getStoredJobs } from "../Utility";
import Job from "../components/Job";

const AppliedJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        const jobs = getStoredJobs();
        setJobs(jobs);

    }, [])
    // console.log(appliedJobs);

    return (
        <div className="max-w-screen-xl mx-auto my-[100px]">
            <div className="space-y-4">
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>

        </div>
    );
};

export default AppliedJobs;