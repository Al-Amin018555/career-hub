import Salary from '../assets/icons/money.png'
import Title from '../assets/icons/calendar.png';
import Phone from '../assets/icons/phone.png';
import Email from '../assets/icons/email.png';
import Address from '../assets/icons/location2.png';
import { saveToLS } from '../Utility';

const JobDetailDescription = ({job}) => {
     const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information,id } = job;

     const handleApplyNow = (job) => {
       saveToLS(job)
     }

    return (
        <div>

            <div className="my-[80px] flex flex-col lg:flex-row lg:justify-between gap-6">
                <div className="space-y-6 max-w-[750px]">
                    <p className="text-[#757575]"><span className="font-extrabold text-[#1A1919]">Job Description: </span>{job_description}</p>
                    <p className="text-[#757575]"><span className="font-extrabold text-[#1A1919]">Job Responsibility: </span>{job_responsibility}</p>

                    <p className="text-[#757575]"><span className="font-extrabold text-[#1A1919]">Educational Requirements: <br /> <br /> </span> <span className='mt-4'>{educational_requirements}</span> </p>

                    <p className="text-[#757575]"><span className="font-extrabold text-[#1A1919]">Experiences: <br /> <br /> </span>{experiences}</p>
                </div>
                <div className="">
                    <div className='bg-[rgba(152,115,255,0.1)] rounded-lg p-6'>
                        <p className="font-extrabold text-xl">Job Details</p>

                        <div className="divider"></div>
                        <div className='space-y-4'>
                            <p className="flex items-center gap-2 font-medium  text-xl text-[#757575]">
                                <img src={Salary} className="w-[18px]" />

                                <span className="text-[#474747] font-bold mr-2">Salary:</span>{salary} ( Per Month )
                            </p>

                            <p className="flex items-center gap-2 font-medium  text-xl text-[#757575]">
                                <img src={Title} className="w-[18px]" />
                                <span className="text-[#474747] font-bold mr-2">Job Title:</span>{job_title}
                            </p>

                        </div>
                        <p className="font-extrabold text-xl mt-8">Contact Information</p>
                        <div className="divider"></div>
                        <div className='space-y-4'>
                            <p className="flex items-center gap-2 font-medium  text-xl text-[#757575]">
                                <img src={Phone} className="w-[18px]" />

                                <span className="text-[#474747] font-bold mr-2">Phone:</span>{contact_information.phone}
                            </p>

                            <p className="flex items-center gap-2 font-medium  text-xl text-[#757575]">
                                <img src={Email} className="w-[18px]" />
                                <span className="text-[#474747] font-bold mr-2">Email:</span>{contact_information.email}
                            </p>
                            <p className="flex gap-2 font-medium text-xl text-[#757575]">
                              
                                    <img src={Address} className="w-[18px] h-[18px]" />
                            
                                <span className="text-[#474747] font-bold mr-2">Address:</span>{contact_information.address}
                            </p>

                        </div>
                    </div>
                    <div>
                        <button onClick={() => handleApplyNow(job) } className="btn mt-6 w-full py-7 rounded-lg text-xl text-white bg-gradient-to-r from-blue-500 to-purple-500">Apply Now</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default JobDetailDescription;