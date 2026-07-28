import { useState } from "react";
import { IconBookmark, IconClockHour3 } from "@tabler/icons-react";
import { Divider, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const JobCard = (props: any) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Link
      to="/jobs"
      className="w-full rounded-2xl border border-mine-shaft-800 bg-mine-shaft-900 p-6 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-2 hover:border-bright-sun-400 hover:shadow-[0_0_20px_rgba(255,204,0,0.2)]"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-mine-shaft-800">
            <img
              className="h-8 w-8 object-contain"
              src={`/Icons/${props.company}.png`}
              alt={props.company}
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-mine-shaft-50">
              {props.jobTitle}
            </h3>

            <p className="text-sm text-mine-shaft-400">
              {props.company} • {props.applicants}
            </p>
          </div>
        </div>

        <div className="rounded-full bg-mine-shaft-800 p-2 transition hover:bg-bright-sun-400/20 hover:text-bright-sun-400">
          <IconBookmark size={20} stroke={1.8} />
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {[props.experience, props.jobType, props.location].map(
          (item, index) => (
            <div
              key={index}
              className="rounded-md bg-mine-shaft-800 px-3 py-1 text-xs font-medium text-bright-sun-400"
            >
              {item}
            </div>
          )
        )}
      </div>

      {/* Description */}
      <div>
        <Text
          className="!text-sm !leading-6 text-mine-shaft-300"
          lineClamp={expanded ? undefined : 4}
        >
          {props.description}
        </Text>

        <button
          onClick={(e) => {
            e.preventDefault();
            setExpanded(!expanded);
          }}
          className="mt-2 text-xs font-medium text-bright-sun-400 hover:underline"
        >
          {expanded ? "Show Less" : "Read More"}
        </button>
      </div>

      <Divider color="gray.8" />

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-mine-shaft-400">Salary</p>
          <h3 className="text-lg font-semibold text-bright-sun-400">
            ₹{props.package} 
          </h3>
        </div>

        <div className="flex items-center gap-2 text-sm text-mine-shaft-300">
          <IconClockHour3 size={18} stroke={1.8} />
          <span>{props.postedDaysAgo}</span>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;