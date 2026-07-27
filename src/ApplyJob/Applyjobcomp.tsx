import {
  Alert,
  Button,
  Divider,
  FileInput,
  TextInput,
  Textarea,
  Notification,
  rem,
  LoadingOverlay
} from "@mantine/core";
import { IconCheck, IconUpload } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Applyjobcamp = () => {
  const [preview, setPreview] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sec, setsec]= useState(5);
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState<File | null>(null);

  const handlePreview = () => {
    setPreview(!preview);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleSubmit = () => {
    if (!fullName || !email || !phone || !resume) {
      alert("Please fill all required fields before submitting.");
      return;
    }
    setSubmitted(true);
    let x =5;
    setInterval(()=>{
          x--;
          setsec(x);
          if(x==0)navigate('/find-jobs');
    },1000)

    

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    setTimeout(() => {
      setSubmitted(false);
      setPreview(false);
      setFullName("");
      setEmail("");
      setPhone("");
      setWebsite("");
      setCoverLetter("");
      setResume(null);
    }, 3000);
  };

  return (
    <>

    <div className="w-2/3 mx-auto py-8">
    <LoadingOverlay className="!fixed "
     visible={submitted}
     zIndex={1000}
     overlayProps={{radius: 'sm', blur: 2}}
     loaderProps={{ color: 'brightSun.4', type: 'bars'}}
     />
      {/* Header */}
      <div className="flex justify-between items-center p-6">
        <div className="flex items-center gap-4">
          <img
            className="h-14 w-14 object-contain"
            src="/Icons/Google.png"
            alt="Google"
          />

          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-semibold">
              Software Developer
            </h1>

            <p className="text-mine-shaft-300">
              Google &#x2022; 3 days ago &bull; 120 Applicants
            </p>
          </div>
        </div>

        <Link to="/apply-job">
          <Button color="brightSun.4" variant="light">
            Apply
          </Button>
        </Link>
      </div>

      <Divider my="xl" />

      <div>
        <h2 className="text-xl font-semibold mb-6">
          Submit Your Application
        </h2>

        {/* Success Alert */}
        {submitted && (
          <Alert
            icon={<IconCheck size={18} />}
            color="green"
            radius="md"
            mb="lg"
            title="Application Submitted"
          >
            🎉 Your application has been submitted successfully!
          </Alert>
        )}

        <div className="flex flex-col gap-5">
          {/* Row 1 */}
          <div className="flex gap-10 [&>*]:w-1/2">
            <TextInput
              value={fullName}
              onChange={(e) => setFullName(e.currentTarget.value)}
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={preview ? "font-semibold text-mine-shaft-300" : ""}
              withAsterisk
              label="Full Name"
              placeholder="Enter your full name"
            />

            <TextInput
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={preview ? "font-semibold text-mine-shaft-300" : ""}
              withAsterisk
              label="Email"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          {/* Row 2 */}
          <div className="flex gap-10 [&>*]:w-1/2">
            <TextInput
              value={phone}
              onChange={(e) => setPhone(e.currentTarget.value)}
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={preview ? "font-semibold text-mine-shaft-300" : ""}
              withAsterisk
              label="Phone Number"
              type="tel"
              placeholder="Enter your phone number"
            />

            <TextInput
              value={website}
              onChange={(e) => setWebsite(e.currentTarget.value)}
              readOnly={preview}
              variant={preview ? "unstyled" : "default"}
              className={preview ? "font-semibold text-mine-shaft-300" : ""}
              label="Personal Website"
              placeholder="https://yourwebsite.com"
            />
          </div>

          {/* Resume Upload */}
          <FileInput
            value={resume}
            onChange={setResume}
            disabled={preview}
            variant={preview ? "unstyled" : "default"}
            className={preview ? "font-semibold text-mine-shaft-300" : ""}
            withAsterisk
            label="Attach Your CV"
            placeholder="Choose your resume"
            accept=".pdf,.doc,.docx"
            leftSection={!preview ? <IconUpload size={18} /> : undefined}
            clearable={!preview}
          />

          {/* Cover Letter */}
          <Textarea
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.currentTarget.value)}
            readOnly={preview}
            variant={preview ? "unstyled" : "default"}
            className={preview ? "font-semibold text-mine-shaft-300" : ""}
            label="Cover Letter"
            placeholder="Write your cover letter..."
            minRows={6}
          />

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <Button
              color="brightSun.4"
              variant={preview ? "outline" : "filled"}
              fullWidth
              onClick={handlePreview}
            >
              {preview ? "Edit" : "Preview"}
            </Button>

            {preview && (
              <Button
                color="brightSun.4"
                fullWidth
                onClick={handleSubmit}
              >
                Submit Application
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
     <Notification className={`!border-bright-sun-400 z-[1001] transition duration-300 ease-in-out !fixed top-0 left-[35%] -translate-y-20 ${submitted?"translate-y-0":""}`} icon={<IconCheck style={{width: rem(20), height: rem(20)}} />}
     color="teal"
     withBorder title="Application Submitted"
     mt="md"
     withCloseButton={false}>
      Redirecting to Find Jobs in {sec} seconds...
      </Notification>
    </>
  );
};

export default Applyjobcamp;