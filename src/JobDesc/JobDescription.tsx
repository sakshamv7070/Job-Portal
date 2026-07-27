import { IconBookmark } from "@tabler/icons-react";
import {
  ActionIcon,
  Badge,
  Button,
  Divider,
} from "@mantine/core";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

import { card, skills, desc } from "../Data/JobDescData";

const JobDescription = (props: any) => {
  const data = DOMPurify.sanitize(desc);

  return (
    <div className="w-2/3 bg-mine-shaft-900 rounded-xl p-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex gap-4 items-center">
          <div className="p-3 bg-mine-shaft-800 rounded-xl">
            <img
              className="h-14"
              src="/Icons/Google.png"
              alt="Google"
            />
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-semibold">
              Software Developer
            </h1>

            <p className="text-mine-shaft-300">
              Google • 3 days ago • 120 Applicants
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">

          <Link to="/apply-job">
            <Button 
              color="yellow" 
              variant="light"
            >
              {props.edit ? "Edit" : "Apply"}
            </Button>
          </Link>

         {
  props.edit ? (
    <Button
      color="red.5"
      size="sm"
      variant="outline"
    >
      Delete
    </Button>
  ) : (
    <ActionIcon
      variant="light"
      color="yellow"
      size="xl"
    >
      <IconBookmark
        className="cursor-pointer text-yellow-400"
        stroke={1.5}
      />
    </ActionIcon>
  )
}

        </div>
      </div>


      <Divider my="xl" />


      {/* Job Details */}
      <div className="flex justify-between flex-wrap gap-6">
        {card.map((item: any, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2"
          >
            <ActionIcon
              color="yellow"
              variant="light"
              radius="xl"
              size="xl"
            >
              <item.icon
                stroke={1.5}
                style={{
                  width: "70%",
                  height: "70%",
                }}
              />
            </ActionIcon>

            <div className="text-sm text-mine-shaft-300">
              {item.label}
            </div>

            <div className="font-semibold">
              {item.value}
            </div>
          </div>
        ))}
      </div>


      <Divider my="xl" />


      {/* Skills */}
      <h2 className="text-xl font-semibold mb-5">
        Required Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((item: string, index: number) => (
          <Badge
            key={index}
            color="yellow"
            variant="light"
            radius="xl"
            size="lg"
          >
            {item}
          </Badge>
        ))}
      </div>


      <Divider my="xl" />


      {/* Job Description */}
      <h2 className="text-xl font-semibold mb-5">
        Job Description
      </h2>


      <div
        className="
          text-mine-shaft-200
          leading-7

          [&_h1]:text-3xl
          [&_h1]:font-bold
          [&_h1]:mb-4

          [&_h2]:text-2xl
          [&_h2]:font-semibold
          [&_h2]:mb-3

          [&_h3]:text-xl
          [&_h3]:font-semibold
          [&_h3]:mb-3

          [&_p]:mb-4

          [&_ul]:list-disc
          [&_ul]:ml-6
          [&_ul]:mb-4

          [&_ol]:list-decimal
          [&_ol]:ml-6
          [&_ol]:mb-4

          [&_li]:mb-2

          [&_strong]:font-bold

          [&_a]:text-yellow-400
          [&_a]:underline

          [&_blockquote]:border-l-4
          [&_blockquote]:border-yellow-400
          [&_blockquote]:pl-4
          [&_blockquote]:italic
        "
        dangerouslySetInnerHTML={{ __html: data }}
      />


      <Divider my="xl" />


      {/* About Company */}
      <div>
        <h2 className="text-xl font-semibold mb-6">
          About Company
        </h2>


        <div className="flex justify-between items-center mb-6">

          <div className="flex gap-4 items-center">
            <div className="p-3 bg-mine-shaft-800 rounded-xl">
              <img
                className="h-10"
                src="/Icons/Google.png"
                alt="Google"
              />
            </div>


            <div>
              <h3 className="text-lg font-semibold">
                Google
              </h3>

              <p className="text-sm text-mine-shaft-300">
                Internet • Technology • 100K+ Employees
              </p>
            </div>

          </div>


          <Link to="/company/google">
            <Button
              color="yellow"
              variant="light"
            >
              Company Page
            </Button>
          </Link>

        </div>


        <p className="text-mine-shaft-300 leading-7">
          Google is one of the world's leading technology
          companies, focused on organizing the world's
          information and making it universally accessible and
          useful. The company develops products and services
          including Search, Android, Chrome, Gmail, YouTube,
          Google Cloud, and AI-powered technologies.
        </p>

      </div>

    </div>
  );
};

export default JobDescription;