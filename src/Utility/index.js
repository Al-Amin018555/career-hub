const getStoredJobs = () => {
    const storedJobs = localStorage.getItem('jobs');
    if (storedJobs) {
        const jobs = JSON.parse(storedJobs);
        return jobs;
    }
    return [];
}

export {getStoredJobs}