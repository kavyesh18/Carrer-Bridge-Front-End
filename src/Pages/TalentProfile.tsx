import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { profile } from "../Data/TalentData";
import RecommendTalent from "../Components/TalentProfile/RecommendTalent";
import Profile from "../Components/TalentProfile/Profile";


const TalentProfile = () => {

    return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
            <Divider size="xs"/>
            <Link className="my-4 inline-block" to="/find-talent">
                    <Button leftSection={<IconArrowLeft size={20}/>} color="brightSun.4" variant="light">Back</Button>
                </Link>

            <div className="flex gap-5">
                <Profile {...profile} />
                <RecommendTalent/>
            </div>
        </div>

    
};

export default TalentProfile;