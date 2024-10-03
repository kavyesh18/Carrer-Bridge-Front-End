import { Divider } from "@mantine/core";
import SearchBar from "../Find Jobs/SearchBar";
import { useState } from "react";
import Jobs from "../Find Jobs/Jobs";

const FindJobs = () => {

   
    return <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
        <SearchBar/>
        <Divider size="xs" mx="md"/>
        <Jobs/>
        </div>
    
}

export default FindJobs;