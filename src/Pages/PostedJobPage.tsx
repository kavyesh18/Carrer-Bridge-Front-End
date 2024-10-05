import { Divider } from "@mantine/core";
import PostedJob from "../PostedJob/PostedJob";
import PostedJobDescription from "../PostedJob/PostedJobDescription";

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
