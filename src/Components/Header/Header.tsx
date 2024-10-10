import { Avatar, Button, Indicator } from "@mantine/core";
import { IconArrowMergeAltRight, IconBell, IconSettings } from "@tabler/icons-react";
import NavLinks from "./NavLinks";
import { Link, useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useSelector } from "react-redux";

const Header = () => {

    const location = useLocation();
    const user = useSelector((state:any)=>state.user);
    return location.pathname!="/signup" && location.pathname!="/login" ?<div className="w-full  bg-mine-shaft-950 px-6 text-white h-20 flex justify-between items-center font-['poppins']">
        <div className="flex gap-1  items-center text-bright-sun-400">
    <Link to="/"><IconArrowMergeAltRight className="h-10 w-10 cursor-pointer" stroke={2.5}/></Link>
        <div className="text-2xl font-semibold cursor-pointer"><Link to="/">CBridge</Link></div>
        </div>
        {NavLinks()}
        <div className="flex gap-3 items-center">   
            
          {user? <ProfileMenu/>:<Link to="/login">
          <Button variant="subtle" color="brightSun.4">Login</Button>
          </Link>}
            {/* <div className="bg-mine-shaft-900 p-1.5 rounded-full">
            <IconSettings stroke={1.5} />
            </div> */}
            <div className="bg-mine-shaft-900 p-1.5 rounded-full" >
            <Indicator color="brightSun.4" size={8} offset={6} processing>
            <IconBell stroke={1.5}/>
            </Indicator>
            </div>
        </div>
    </div> : <></>

};

export default Header;