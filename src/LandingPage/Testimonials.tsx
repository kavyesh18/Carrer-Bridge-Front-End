import { Avatar, Rating } from "@mantine/core";
import { testimonials } from "../Data/Data";

const Testimonials = () => {
  return (
    <div className="mt-20 pb-5">    
      <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">
        What<span className="text-bright-sun-400"> Users</span> Say About Us
      </div>
      
      
      <div className="flex flex-wrap gap-5 justify-center">
        {testimonials.map((data, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 w-[23%] border border-bright-sun-400 p-3 rounded-xl mt-10"
          >
            <div className="flex gap-2 items-center">
              <Avatar className="!h-14 !w-14" src={data.avatar} />
              <div className="text-lg text-mine-shaft-100 font-semibold">
                {data.name}
              </div>
            </div>
            <Rating value={data.rating} fractions={2} readOnly />
            <div className="text-xs text-mine-shaft-300">{data.testimonial}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
