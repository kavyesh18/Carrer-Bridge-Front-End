import { IconArrowLeft, IconArrowMergeAltRight } from "@tabler/icons-react";
import Signup from "../Components/SignupLogin/Signup";
import Login from "../Components/SignupLogin/Login";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";

const SignUpPage = () => {

    const location = useLocation();
    const navigate = useNavigate();
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] overflow-hidden relative">
      <Button className="!absolute left-5 z-10" onClick={()=>navigate("/")} leftSection={<IconArrowLeft size={20}/>} my="md" color="brightSun.4" variant="light">Home</Button>
      <div className={`w-[100vw] h-[100vh] transition-all ease-in-out duration-1000 flex [&>*]:flex-shrink-0 ${location.pathname=='/signup'?'-translate-x-1/2':'translate-x-0'}`}>
        <Login/>
        <div className={`w-1/2 h-full transition-all duration-1000 ${location.pathname=="/signup"?"rounded-r-[200px]":"rounded-l-[200px]"}  bg-mine-shaft-900 flex flex-col items-center gap-5 justify-center`}>
          <div className="flex gap-1 items-center text-bright-sun-400">
            <IconArrowMergeAltRight className="h-16 w-16" stroke={2.5} />
            <div className="text-5xl font-semibold">CBridge</div>
          </div>
          <div className="text-2xl text-mine-shaft-200 font-semibold">
            Find Your Dream Job!!
          </div>
        </div>
        <Signup/>
      </div>
    
    </div>
  );
};

export default SignUpPage;
