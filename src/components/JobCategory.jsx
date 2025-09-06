import { useEffect, useState } from "react";
import SingleJobCategory from "./SingleJobCategory";

const JobCategory = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data));
    }, [])
    return (
        <div className="max-w-screen-xl mx-auto my-[20px] md:my-[130px]">
            <div className="space-y-4 text-center">
                <h2 className="text-2xl md:text-5xl font-extrabold">Job Category List</h2>
                <p className="text-[#757575] font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid gap-4 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
               {
                    categories.map(category => <SingleJobCategory key={category.id}
                         category={category}></SingleJobCategory>)
               }
            </div>
        </div>
    );
};

export default JobCategory;