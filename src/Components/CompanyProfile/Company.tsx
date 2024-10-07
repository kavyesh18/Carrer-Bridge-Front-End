import { Avatar, Divider, Tabs } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import AboutCompany from "./AboutCompany";
import CompanyJobs from "./CompanyJobs";
import CompanyEmployees from "./CompanyEmployees";

const Company = () => {
    return <div className="w-3/4">
            <div className="relative">
                <img className="rounded-t-2xl" src="/Profile/banner.jpg" alt="" />
                <img className="w-36 h-36 rounded-3xl p-2 bg-mine-shaft-950 -bottom-1/4 absolute left-5 border-mine-shaft-950 border-8" src="/Icons/Google.png" alt="" /> 
                </div>
                <div className="px-3 mt-12 ">
                <div className="text-3xl font-semibold flex justify-between"> Google <Avatar.Group>
      <Avatar src="avatar.png" />
      <Avatar src="avatar1.png" />
      <Avatar src="avatar2.png" />
      <Avatar>+10k</Avatar>
    </Avatar.Group></div>
                
                <div className="flex gap-1 text-mine-shaft-300 text-lg items-center">
                  <IconMapPin className="h-5 w-5" stroke={1.5}/> New York, United States
                </div>
            </div>
            <Divider mx="xs" my="xl"/>
            <div>
            <Tabs variant="outline" radius="lg" defaultValue="about">
      <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
        <Tabs.Tab value="About">About</Tabs.Tab>
        <Tabs.Tab value="Jobs">Jobs</Tabs.Tab>
        <Tabs.Tab value="Employees">Employees</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="About"><AboutCompany/></Tabs.Panel>
      <Tabs.Panel value="Jobs"><CompanyJobs/></Tabs.Panel>
      <Tabs.Panel value="Employees"><CompanyEmployees/></Tabs.Panel>
    </Tabs>
            </div>
        </div>
    
};

export default Company;