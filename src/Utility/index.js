import toast from "react-hot-toast";

const getStoredJobs = () => {

    const storedJobs = localStorage.getItem('jobs');
    if (storedJobs) {
        const jobs = JSON.parse(storedJobs);
        return jobs;
    }
    return [];
}


const saveToLS = (job) => {
    console.log(job);
    const storedJobs = getStoredJobs();
    console.log(storedJobs)
    const isExist = storedJobs.find(jb => jb.id === job.id);
    if (isExist) {
        toast.error('Job already added');
    }
    else {
        storedJobs.push(job)
        const jobStringify = JSON.stringify(storedJobs);
        localStorage.setItem("jobs", jobStringify);
        toast.success('job added successfully')
    }

}
export { saveToLS,getStoredJobs }