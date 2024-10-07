import { Divider } from "@mantine/core";
import PostedJobDescription from "../Components/PostedJob/PostedJobDescription";
import PostedJob from "../Components/PostedJob/PostedJob";

const PostedJobPage = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] px-4">
          <Divider size="xs" mx="md"/>
      <div className="flex gap-5">
        <PostedJob/>
        <PostedJobDescription/>
      </div>
    </div>
  );
};

export default PostedJobPage;
