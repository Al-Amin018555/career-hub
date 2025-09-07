import user from '../assets/images/user.png';
const Hero = () => {
    return (
        <div>
            <div className="bg-[rgba(152,115,255,0.05)]">
                <div className="flex flex-col-reverse p-5 lg:flex-row-reverse  lg:justify-between lg:items-center px-5 max-w-screen-xl mx-auto min-h-[500px] lg:min-h-[700px] ">

                    <div className='hidden lg:flex'>
                         <img src={user}/>
                    </div>
                
                    <div>
                        <h1 className="!text-3xl lg:!text-7xl font-extrabold">One Step <br /> Closer To Your <br /> <span className="text-[#7E90FE]">Dream Job</span> </h1>
                        <p className="py-6 font-medium text-[18px] text-[#757575]">
                            Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all  your job application from start to finish.
                        </p>
                        <button className="btn py-5 rounded-lg px-7 h-[50px] text-white bg-gradient-to-r from-blue-500 to-purple-500">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;