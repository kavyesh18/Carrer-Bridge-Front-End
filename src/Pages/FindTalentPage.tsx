import { Divider } from "@mantine/core";
import SearchBar from "../Find Talent/SearchBar";
import Talents from "../Find Talent/Talents";

const FindTalentPage = () => {

    return <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
            <Divider size="xs" mx="md"/>
            <SearchBar/>
            <Divider size="xs" mx="md"/>
            <Talents/>
        </div>

    
};

export default FindTalentPage;