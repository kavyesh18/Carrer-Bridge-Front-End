import { jobList } from "../Data/JobsData";
import JobCard from "../Find Jobs/JobCard";

const CompanyJobs = () => {
    return  <div className="mt-10 flex flex-wrap gap-10">
    {
        jobList.map((job, index) => <JobCard key={index} {...job}/>)
    }
    </div>
    
}

export default CompanyJobs;