import "./App.css";
import { MantineProvider, createTheme, Divider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/tiptap/styles.css";
import "@mantine/carousel/styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Homepage from "./Pages /Homepage";
import FindJobs from "./Pages /FindJobs";
import FindTalent from "./Pages /FindTalent";
import JobPageDesc from "./Pages /JobPageDes";
import ApplyJobPage from "./Pages /ApplyJobPage";
import PostJob from "./PostJob/PostJob";
import TalentProfilePage from "./Pages /TalentProfilePage";
import PostedJobpage from "./Pages /PostedJobPage";



function App() {
  const theme = createTheme({
    primaryColor: "brightSun",
    primaryShade: 4,
    colors: {
      "bright-Sun": [
        "#fffbeb",
        "#fff3c6",
        "#ffe588",
        "#ffd149",
        "#ffbd20",
        "#f99b07",
        "#dd7302",
        "#b75006",
        "#943c0c",
        "#7a330d",
      ],
      "mine-shaft": [
        "#fafafa",
        "#f5f5f5",
        "#e6e6e6",
        "#d6d6d6",
        "#a5a5a5",
        "#767676",
        "#575757",
        "#434343",
        "#2d2d2d",
        "#1a1a1a",
        "#0a0a0a",
      ],
      brightSun: [
        "#fff8e1",
        "#ffefb3",
        "#ffe680",
        "#ffdc4d",
        "#FFD43B",
        "#fcb900",
        "#e6a700",
        "#cc9500",
        "#b38300",
        "#997100",
      ],
    },
  });

  return (
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <BrowserRouter>
        <div className="relative">
          <Header />
          <Divider size="xs" />

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/find-jobs" element={<FindJobs />} />
            <Route path="/find-talent" element={<FindTalent />} />
            <Route path="/jobs" element={<JobPageDesc />} />
            <Route path="/apply-job" element={<ApplyJobPage />} />
            <Route path="/post-job" element={<PostJob />} />
            <Route path="/posted-job" element={<PostedJobpage/>} />
            <Route path="/talent-profile" element={<TalentProfilePage />} />
            <Route path="*" element={<Homepage />} />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;