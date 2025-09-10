import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAttachMoney } from "react-icons/md";

const Job = ({ job, setJobDetails,handleJobDetails}) => {
    const { logo, job_title, company_name, remote_or_onsite, job_type, location, salary} = job;
    // console.log(appliedJobs)
    
    return (
        <div className="card bg-base-100 card-lg shadow-sm">
            <div className="p-6 space-y-2">
                <img className="max-w-[120px]" src={logo} alt="" />
                <h2 className="font-extrabold text-sm lg:text-2xl">{job_title}</h2>
                <p className="text-[20px] font-semibold">{company_name}</p>
                <div className="flex gap-2">
                    <div className="px-3 py-2 rounded-lg font-extrabold text-[#7E90FE] border-1 border-[#7E90FE]">{remote_or_onsite}</div>
                    <div className="px-3 py-2 rounded-lg font-extrabold text-[#7E90FE] border-1  border-[#7E90FE]">{job_type}</div>
                </div>

                <div className="flex gap-6 text-[18px] text-[#757575] font-semibold">
                    <div>
                        <p className="flex gap-2 items-center"> <CiLocationOn size={20} /> {location} </p>

                    </div>
                    <div>
                        <p className="flex gap-2 items-center"> <MdOutlineAttachMoney size={20} /> {salary} </p>

                    </div>
                </div>

                <div className="justify-start card-actions">
                    <button onClick={() => {setJobDetails(true)
                        handleJobDetails(job)
                    }} className="btn py-5 rounded-lg px-4 text-white bg-gradient-to-r from-blue-500 to-purple-500">View Details</button>
                </div>
            </div>
        </div>


    );
};

export default Job;