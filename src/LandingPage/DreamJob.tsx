import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const DreamJob = () => {
  return (
    <div className="flex items-center justify-between px-20 min-h-[80vh]">

      {/* LEFT SIDE */}
      <div className="text-mine-shaft-400 flex flex-col w-[45%] gap-5">

        <h1 className="text-6xl text-mine-shaft-50 font-bold leading-tight">
          Find Your <span className="text-bright-sun-400">Dream</span>{" "}
          <span className="text-bright-sun-400">Job</span> with us
        </h1>

        <p className="text-lg text-mine-shaft-300">
          Good life begins with a good company. Start exploring thousands of jobs in one place.
        </p>

        {/* SEARCH BOX */}
        <div className="flex gap-3 mt-5">

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

          <div className="flex items-center justify-center w-14 bg-bright-sun-400 text-mine-shaft-900 rounded-lg hover:bg-bright-sun-500 cursor-pointer">
            <IconSearch className="h-5 w-5" />
          </div>

        </div>

      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="w-[55%] flex justify-center">
        <img
          src="/boy.png"
          alt="Working person"
          className="w-[35rem] object-contain"
        />
      </div>

    </div>
  );
};

export default DreamJob;