import { Avatar } from "@mantine/core";
import { work } from "../../Data/Data";

const Working = () => {
  return (
    <div className="mt-20 pb-5 relative">
      
      <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
        How it <span className="text-bright-sun-400">Works</span> Category
      </div>

     
      <div className="text-lg mb-10 mx-auto text-mine-shaft-300 text-center w-1/2">
        Effortlessly navigate through the process and land your dream job.
      </div>

     
      <div className="flex gap-5 items-center relative">
       
        <div className="relative">
          <img
            className="w-[30rem] ml-16"
            src="/Working/Girl.png"
            alt="Girl working"
          />

          
          <div className="w-fit absolute -right-12 top-[45%] border-bright-sun-400 border rounded-lg p-3 backdrop-blur-md gap-3 flex flex-col">
            <div className="flex gap-2 items-center">
              <div className="w-10 h-10 p-1 bg-mine-shaft-900 rounded-lg">
                <img
                  src="/avatar1.png"
                  alt="Avatar"
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="text-sm text-bright-sun-950">
                <div>Complete your Profile</div>
                <div className= "text-xs text-bright-sun-950">70% Completed</div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col gap-10 ml-60">
          {work.map((item, index) => (
            <div key={index} className="flex items-center h-full">
              <div className="flex items-center p-2.5 bg-bright-sun-300 rounded-full">
                <img
                  className="h-12 w-12"
                  src={`/Working/${item.name}.png`}
                  alt={item.name}
                />
              </div>
              <div className="ml-4">
                <div className="text-mine-shaft-200 font-semibold text-xl">
                  {item.name}
                </div>
                <div className="text-sm text-mine-shaft-300">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Working;
