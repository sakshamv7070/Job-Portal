import {
  Alert,
  Button,
  Divider,
  FileInput,
  LoadingOverlay,
  Notification,
  Paper,
  rem,
  TextInput,
  Textarea,
} from "@mantine/core";
import { IconCheck, IconUpload } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Applyjobcamp = () => {
  const navigate = useNavigate();

  const [preview, setPreview] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sec, setSec] = useState(5);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState<File | null>(null);

  useEffect(() => {
    if (!submitted) return;

    if (sec === 0) {
      navigate("/find-jobs");
      return;
    }

    const timer = setTimeout(() => {
      setSec((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [submitted, sec, navigate]);

  const handlePreview = () => {
    setPreview(!preview);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = () => {
    if (!fullName || !email || !phone || !resume) {
      return;
    }

    setSubmitted(true);
    setSec(5);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <LoadingOverlay
        visible={submitted}
        className="!fixed"
        zIndex={1000}
        overlayProps={{
          blur: 3,
          radius: "sm",
        }}
        loaderProps={{
          color: "brightSun.4",
          type: "bars",
        }}
      />

      <div className="max-w-4xl mx-auto py-10 px-4">
        <Paper
          radius="xl"
          p="xl"
          className="bg-mine-shaft-900 border border-mine-shaft-800"
        >
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 rounded-xl bg-mine-shaft-800 flex items-center justify-center">
                <img
                  src="/Icons/Google.png"
                  alt="Google"
                  className="h-10 object-contain"
                />
              </div>

              <div>
                <h1 className="text-2xl font-bold text-mine-shaft-50">
                  Software Developer
                </h1>

                <p className="text-sm text-mine-shaft-400 mt-1">
                  Google • 3 days ago • 120 Applicants
                </p>
              </div>
            </div>

            <Link to="/apply-job">
              <Button color="brightSun.4" variant="light" radius="md">
                Apply
              </Button>
            </Link>
          </div>

          <Divider my="xl" />

          <div className="mb-6">
            <h2 className="text-xl font-semibold text-mine-shaft-50">
              Submit Your Application
            </h2>

            <p className="text-sm text-mine-shaft-400 mt-1">
              Fill in your details carefully before submitting your application.
            </p>
          </div>

          {submitted && (
            <Alert
              color="green"
              radius="md"
              icon={<IconCheck size={18} />}
              title="Application Submitted Successfully"
              mb="xl"
            >
              Your application has been submitted successfully. You will be
              redirected automatically.
            </Alert>
          )}

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <TextInput
                withAsterisk
                label="Full Name"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.currentTarget.value)}
                readOnly={preview}
                variant={preview ? "unstyled" : "default"}
              />

              <TextInput
                withAsterisk
                label="Email"
                placeholder="john@gmail.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                readOnly={preview}
                variant={preview ? "unstyled" : "default"}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <TextInput
                withAsterisk
                label="Phone Number"
                placeholder="+91 9876543210"
                value={phone}
                onChange={(e) => setPhone(e.currentTarget.value)}
                readOnly={preview}
                variant={preview ? "unstyled" : "default"}
              />

              <TextInput
                label="Portfolio / Website"
                placeholder="https://yourportfolio.com"
                value={website}
                onChange={(e) => setWebsite(e.currentTarget.value)}
                readOnly={preview}
                variant={preview ? "unstyled" : "default"}
              />
            </div>

            <FileInput
              withAsterisk
              label="Upload Resume"
              placeholder="Choose your resume"
              value={resume}
              onChange={setResume}
              disabled={preview}
              variant={preview ? "unstyled" : "default"}
              accept=".pdf,.doc,.docx"
              leftSection={!preview ? <IconUpload size={18} /> : undefined}
              clearable={!preview}
            />

            <Textarea
              label="Cover Letter"
              placeholder="Write your cover letter..."
              minRows={7}
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.currentTarget.value)}
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
            />
                        {/* Action Buttons */}
            <div className="flex gap-4 pt-2">
              <Button
                color="brightSun.4"
                variant={preview ? "outline" : "filled"}
                radius="md"
                size="md"
                fullWidth
                onClick={handlePreview}
              >
                {preview ? "Edit Application" : "Preview"}
              </Button>

              {preview && (
                <Button
                  color="brightSun.4"
                  radius="md"
                  size="md"
                  fullWidth
                  onClick={handleSubmit}
                >
                  Submit Application
                </Button>
              )}
            </div>
          </div>
        </Paper>
      </div>

      <Notification
        icon={
          <IconCheck
            style={{
              width: rem(20),
              height: rem(20),
            }}
          />
        }
        color="teal"
        title="Application Submitted"
        withBorder
        withCloseButton={false}
        className={`!fixed left-1/2 top-6 z-[1001] -translate-x-1/2 transition-all duration-500 ${
          submitted
            ? "translate-y-0 opacity-100"
            : "-translate-y-20 opacity-0"
        }`}
      >
        Redirecting to Find Jobs in{" "}
        <span className="font-semibold">{sec}</span> seconds...
      </Notification>
    </>
  );
};

export default Applyjobcamp;