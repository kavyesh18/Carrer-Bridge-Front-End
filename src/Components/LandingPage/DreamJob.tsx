import { Avatar, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const DreamJob = () => {
  return (
    <div className="flex items-center px-16">
      <div className="flex flex-col w-[45%] gap-4">
        <div className="text-6xl font-bold leading-tight text-mine-shaft-100 [&>span]:text-bright-sun-400">
          Find Your <span>Dream Job</span> With Us
        </div>
        <div className="text-lg text-mine-shaft-200">
          A fulfilling life starts with being part of a great company. Start exploring thousands of jobs in one place.
        </div>
        <div className="flex gap-3 mt-5">
          <TextInput
            className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
            variant="unstyled"
            label="Job Title"
            placeholder="Software Engineer"
          />
          <TextInput
            className="bg-mine-shaft-900 rounded-lg p-1 px-2 text-mine-shaft-100 [&_input]:!text-mine-shaft-100"
            variant="unstyled"
            label="Type"
            placeholder="Full-Time"
          />
          <div className="flex items-center justify-center h-full w-20 bg-bright-sun-400 text-mine-shaft-100 rounded-lg p-2 hover:bg-bright-sun-500 cursor-pointer">
            <IconSearch className="h-[85%] w-[85%]" />
          </div>
        </div>
      </div>

      
      <div className="w-[55%] flex items-center justify-end relative">
        <div className="w-[26rem] relative"> 
          <img src="/boy.png" alt="Illustration of a boy" className="w-full" />

          
          <div className="w-fit absolute -right-12 top-[45%] border-bright-sun-400 border rounded-lg p-2 backdrop-blur-md">
            <div className="text-center mb-1 text-sm text-mine-shaft-100">20k+ Got Job</div>
            <Avatar.Group>
              <Avatar src="/avatar.png" />
              <Avatar src="/avatar1.png" />
              <Avatar src="/avatar2.png" />
              <Avatar>+10k</Avatar>
            </Avatar.Group>
          </div>

          
          <div className="w-fit absolute -left-6 top-[30%] border-bright-sun-400 border rounded-lg p-3 backdrop-blur-md gap-3 flex flex-col">
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg ">
                <img src="/Google.png" alt="Company Logo" className="object-contain w-full h-full" />
              </div>
              <div className="text-sm text-mine-shaft-100">
                <div>Software Engineer</div>
                <div className="text-mine-shaft-200 text-xs">New York</div>
              </div>
            </div>
            <div className="flex gap-2 justify-between text-mine-shaft-200 text-xs">
              <span>1 day ago</span>
              <span>120 Applicants</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamJob;
