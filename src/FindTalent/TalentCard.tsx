import { IconHeart, IconMapPin } from "@tabler/icons-react";
import { Avatar, Button, Divider, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import { useState } from "react";

const TalentCard = (props: any) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-96 rounded-2xl bg-mine-shaft-900 border border-mine-shaft-800 p-6 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-2 hover:border-bright-sun-400 hover:shadow-[0_0_20px_rgba(255,204,0,0.2)]">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-mine-shaft-800 p-1">
            <Avatar
              size={60}
              src={`${props.image}.png`}
              alt={props.name}
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-mine-shaft-50">
              {props.name}
            </h3>

            <p className="text-sm text-mine-shaft-400">
              {props.role} • {props.company}
            </p>
          </div>
        </div>

        <div className="rounded-full bg-mine-shaft-800 p-2 cursor-pointer transition hover:bg-red-500/20 hover:text-red-500">
          <IconHeart size={20} stroke={1.8} />
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {props.topSkills?.map((skill: any, index: number) => (
          <div
            key={index}
            className="rounded-md bg-mine-shaft-800 px-3 py-1 text-xs font-medium text-bright-sun-400"
          >
            {skill}
          </div>
        ))}
      </div>

      {/* About */}
      <Text
        className="!text-sm !leading-6 text-mine-shaft-300"
        lineClamp={expanded ? undefined : 4}
      >
        {props.about}
      </Text>

      <button
        onClick={() => setExpanded(!expanded)}
        className="w-fit text-xs font-medium text-bright-sun-400 hover:underline"
      >
        {expanded ? "Show Less" : "Read More"}
      </button>

      <Divider color="gray.8" />

      {/* Salary & Location */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-mine-shaft-400">Expected CTC</p>
          <h3 className="text-lg font-semibold text-bright-sun-400">
            {props.expectedCtc}
          </h3>
        </div>

        <div className="flex items-center gap-2 text-sm text-mine-shaft-300">
          <IconMapPin size={18} stroke={1.7} />
          <span>{props.location}</span>
        </div>
      </div>

      <Divider color="gray.8" />

      {/* Buttons */}
      <div className="flex gap-3">
        <Link to="/talent-profile" className="flex-1">
          <Button
            color="brightSun.4"
            variant="outline"
            radius="md"
            fullWidth
          >
            View Profile
          </Button>
        </Link>

        <Button
          color="brightSun.4"
          variant="light"
          radius="md"
          className="flex-1"
        >
          Message
        </Button>
      </div>
    </div>
  );
};

export default TalentCard;