import { jobList } from "../Data/JobsData";
import JobCard from "../Find Jobs/JobCard";


const RecommendedJob = () => {
    return <div>
    <div className="text-xl font-semibold mb-5 ">Recommended Jobs</div>
    <div className="flex flex-col flex-wrap justify-around gap-5 ">
        {
            jobList.map((job, index)=>index<6 && <JobCard key={index} {...job}/>)
        }
    </div>
</div>
    
};

export default RecommendedJob;