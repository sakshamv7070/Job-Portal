import { Button, Paper, TagsInput } from "@mantine/core";
import SelectInput from "./SelectInput";
import TextEditor from "./RichTextEditor";
import { fields } from "../Data/PostJob";

const PostJob = () => {
  const select = fields;

  return (
    <Paper
      radius="lg"
      p="xl"
      withBorder
      className="w-4/5 mx-auto bg-mine-shaft-900 border-mine-shaft-700"
    >
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Post a Job</h1>
        <p className="text-mine-shaft-400 mt-1">
          Fill in the details below to publish your job opening.
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <SelectInput withAsterisk {...select[0]} />
          <SelectInput withAsterisk {...select[1]} />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <SelectInput withAsterisk {...select[2]} />
          <SelectInput withAsterisk {...select[3]} />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <SelectInput withAsterisk {...select[4]} />
          <SelectInput withAsterisk {...select[5]} />
        </div>

        <TagsInput
          withAsterisk
          label="Required Skills"
          placeholder="React, Java, Spring Boot..."
          clearable
          acceptValueOnBlur
          splitChars={[",", ";", "|"]}
        />

        <div className="[&_button[data-active='true']]:!text-bright-sun-400 [&_button[data-active='true']]:!bg-bright-sun-400/10">
          <div className="text-sm font-semibold mb-2 text-white">
            Job Description
          </div>

          <TextEditor />
        </div>

        <div className="flex justify-end gap-4 pt-4">
          <Button
            size="md"
            color="brightSun.4"
            variant="outline"
          >
            Save as Draft
          </Button>

          <Button
            size="md"
            color="brightSun.4"
            variant="filled"
          >
            Publish Job
          </Button>
        </div>
      </div>
    </Paper>
  );
};

export default PostJob;