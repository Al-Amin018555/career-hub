import { useState } from "react";
import Hero from "../components/Hero";
import JobCategory from "../components/JobCategory";
import Jobs from "../components/Jobs";
import JobDetails from "../components/JobDetails";

const Home = () => {
    const [jobDetails, setJobDetails] = useState(false);
    const [job, setJob] = useState([]);
    
    const handleJobDetails = (jobDetails) => {
        setJob(jobDetails);
    }
    
    return (
        <div>
            {
                jobDetails ? <JobDetails job={job}></JobDetails> : <div>
                    <Hero></Hero>
                    <JobCategory></JobCategory>
                    <Jobs setJobDetails={setJobDetails} handleJobDetails={handleJobDetails} ></Jobs>
                </div>
            }

        </div >
    );
};

export default Home;