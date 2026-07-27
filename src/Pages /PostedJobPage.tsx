import PostedJob from "../Pages/PostedJob";
import PostedJobDesc from "../Pages/PostJobDesc";

const PostedJobpage = () => {
  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['Poppins'] px-4">
      <div className="flex gap-5 justify-between">
          <PostedJob />
          <PostedJobDesc />
        </div>
      </div>

  );
};

export default PostedJobpage;