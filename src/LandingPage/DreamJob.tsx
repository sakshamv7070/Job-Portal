import { TextInput, Avatar } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const DreamJob = () => {
  return (
    <div className="flex items-center justify-between px-20 min-h-[80vh]">
      {/* LEFT SIDE */}
      <div className="w-[45%] flex flex-col gap-5 text-mine-shaft-400">
        <h1 className="text-6xl font-bold leading-tight text-mine-shaft-50">
          Find Your <span className="text-bright-sun-400">Dream</span>{" "}
          <span className="text-bright-sun-400">Job</span> with us
        </h1>

        <p className="text-lg text-mine-shaft-300">
          Good life begins with a good company. Start exploring thousands of
          jobs in one place.
        </p>

        {/* SEARCH BOX */}
        <div className="flex gap-3 mt-5 text-mine-shaft-100">
          <TextInput
            variant="unstyled"
            label="Job Title"
            placeholder="Software Engineer"
            className="flex-1 bg-mine-shaft-600 rounded-lg px-3 py-2 [&_input]:!text-mine-shaft-100"
          />

          <TextInput
            variant="unstyled"
            label="Job Type"
            placeholder="Full-Time"
            className="flex-1 bg-mine-shaft-600 rounded-lg px-3 py-2 [&_input]:!text-mine-shaft-100"
          />

          <button className="flex items-center justify-center w-14 bg-bright-sun-400 text-mine-shaft-900 rounded-lg hover:bg-bright-sun-500 transition">
            <IconSearch size={22} />
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-[55%] flex justify-center">
        <div className="relative w-[40rem]">
          {/* IMAGE */}
          <img
            src="/Boy.png"
            alt="Working person"
            className="w-full"
          />

          {/* USER CARD */}
          <div className="absolute top-[50%] -right-8 z-10 rounded-lg border border-bright-sun-400 bg-mine-shaft-900/50 p-3 backdrop-blur-md">
            <div className="mb-2 text-center text-sm text-mine-shaft-200">
              10k got job
            </div>

            <Avatar.Group>
              <Avatar src="/avatar-8.png" />
              <Avatar src="/avatar-6.png" />
              <Avatar src="/avatar-9.png" />
              <Avatar color="brightSun">9k+</Avatar>
            </Avatar.Group>
          </div>


          {/* JOB CARD */}
          <div className="absolute top-[30%] left-0 z-10 w-64 rounded-lg border border-bright-sun-400 bg-mine-shaft-900/50 p-3 backdrop-blur-md">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 p-1 bg-white rounded-lg">
                <img
                  src="/Companies/Google.png"
                  alt="Google"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <div className="text-sm font-medium text-mine-shaft-100">
                  Software Engineer
                </div>

                <div className="text-xs text-mine-shaft-400">
                  Google • New York
                </div>
              </div>
            </div>


            <div className="mt-3 flex items-center">
              <span className="text-xs text-mine-shaft-400">
                1 day ago
              </span>

              <span className="ml-auto text-xs text-mine-shaft-100">
                120 Applicants
              </span>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default DreamJob;