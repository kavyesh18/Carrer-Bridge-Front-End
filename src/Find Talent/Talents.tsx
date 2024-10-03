import { talents } from "../Data/TalentData";
import Sort from "../Find Jobs/Sort";
import TalentCard from "./TalentCard";


const Talents = () => {
    return <div className="p-5">
            <div className="flex justify-between">
                <div className="text-2xl font-semibold ">Talents</div>
                <Sort/>
            </div>
            <div className="mt-10 flex flex-wrap gap-10">
                {
                    talents.map((talent, index)=>
                        <TalentCard key={index} {...talent}/>
                    )
                }
               <TalentCard/>
            </div>
        </div>

};

export default Talents;