import { Badge, Tabs } from "@mantine/core";
import PostedJob from "../Pages/PostedJob";
import ApplyJobPage from "../Pages /ApplyJobPage";
import JobDescription from "../JobDesc/JobDescription";

const PostedJobDesc = () => {
  return (
    <div className="mt-5 w-3/4 px-5">
      
      <div className="flex items-center gap-2 text-2xl font-semibold">
        <span>Software Engineer</span>

        <Badge variant="light" color="yellow" size="sm">
          Active
        </Badge>
      </div>

      <div className="font-medium text-mine-shaft-400 mb-5">
        New York, United States
      </div>

      <Tabs variant="outline" radius="lg" defaultValue="overview">
        <Tabs.List className="[&_button]:!text-lg font-semibold mb-5 [&_button[data-active='true']]:text-yellow-400">
          <Tabs.Tab value="overview">
            Overview
          </Tabs.Tab>

          <Tabs.Tab value="jobs">
            Applicants
          </Tabs.Tab>

          <Tabs.Tab value="employees">
            Invited
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="overview" className="[&>div]:w-full">
        <JobDescription edit/>
       </Tabs.Panel>
        <Tabs.Panel value="jobs">
          Applicants Content
        </Tabs.Panel>

        <Tabs.Panel value="employees">
          Invited Content
        </Tabs.Panel>

      </Tabs>
    </div>
  );
};

export default PostedJobDesc;