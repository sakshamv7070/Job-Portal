import { Tabs } from "@mantine/core";
import { activeJobs } from "../Data/PostedJob";
import PostedJobCard from "./PostedJobCard";

const PostedJob = () => {
  return (
    <div className="w-1/4">
      <div className="text-2xl font-semibold mb-5">
        Jobs
      </div>

      <Tabs autoContrast variant="pills" defaultValue="active">
        <Tabs.List className="[&_button[aria-selected='false']]:bg-mine-shaft-900 font-medium">
          <Tabs.Tab value="active">
            Active [4]
          </Tabs.Tab>

          <Tabs.Tab value="draft">
            Drafts [1]
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="active" pt="md">
          <div className="flex flex-col gap-4">
            {
              activeJobs.map((item, index) => (
                <PostedJobCard 
                  key={index} 
                  {...item} 
                />
              ))
            }
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="draft" pt="md">
          <div className="flex flex-col gap-4">
            Draft Jobs
          </div>
        </Tabs.Panel>

      </Tabs>
    </div>
  );
};

export default PostedJob;