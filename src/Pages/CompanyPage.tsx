import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import Company from "../CompanyProfile/Company";
import SimilarCompanies from "../CompanyProfile/SimilarCompanies";

const CompanyPage = () => {
    const navigate = useNavigate();
    return <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] p-4">
    
            <Button onClick={()=>navigate(-1)} leftSection={<IconArrowLeft size={20}/>} my="md" color="brightSun.4" variant="light">Back</Button>
        

    <div className="flex gap-5 justify-between">
       <Company/>
       <SimilarCompanies/>
       
    </div>
</div>

    
}

export default CompanyPage;