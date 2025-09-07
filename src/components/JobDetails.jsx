import JobDetailDescription from './JobDetailDescription';
import bg1 from '../assets/images/bg1.png';
import bg2 from '../assets/images/bg2.png';
const JobDetails = ({ job }) => {

    return (
        <div>
            <div className="bg-[rgba(152,115,255,0.05)]"  style={{ 
                    backgroundImage: `url(${bg1}), url(${bg2})`, 
                    backgroundRepeat: 'no-repeat, no-repeat', 
                    backgroundPosition: 'left bottom, right top',
                    backgroundSize: '250px, 250px' 
                }}>

                <div className="flex justify-center items-center h-[300px]">
                    <h2 className="text-2xl lg:text-3xl font-extrabold text-center">Job Details</h2>
                </div>         
            </div>

            <div className="max-w-screen-xl p-5 mx-auto">
                <JobDetailDescription key={job.id} job={job}></JobDetailDescription>

            </div>
        </div>


    );
};

export default JobDetails;