import { talents } from "../Data/TalentData";
import TalentCard from "../Find Talent/TalentCard";

const CompanyEmployees = () => {

    return <div className="mt-10 flex flex-wrap gap-10">
    {
        talents.map((talent, index)=> index<6 &&
            <TalentCard key={index} {...talent}/>
        )
    }
   <TalentCard/>
</div>
    
};

export default CompanyEmployees;