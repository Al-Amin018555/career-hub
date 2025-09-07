import { useState } from "react";
import Hero from "../components/Hero";
import JobCategory from "../components/JobCategory";
import Jobs from "../components/Jobs";

const Home = () => {
    const [jobDetails, setJobDetails] = useState(false);
    return (
        <div>
            {
                jobDetails ? '' : <div>
                    <Hero></Hero>
                    <JobCategory></JobCategory>
                    <Jobs setJobDetails={setJobDetails} ></Jobs>
                </div>
            }

        </div >
    );
};

export default Home;