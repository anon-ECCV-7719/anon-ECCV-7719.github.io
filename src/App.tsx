import TextBox from "./TextBox";
import { WindowSizeContextProvider } from "./contexts/WindowSizeContext";
import Markdown from "./Markdown";
import AbstractBox from "./AbstractBox";
import {
  bgColor,
  tldr,
  abstract,
  video1,
  video2,
  approach,
  workflow
} from "./const";
import Organization from "./Organization";
import TopVideoBox from "./TopVideoBox"
import OneImageBox from "./OneImageBox"
function App() {
  return (
    <>
      <WindowSizeContextProvider>
        <div className="w-screen h-screen min-w-[1400px]">

          <TopVideoBox video1={video1} video2={video2} title="Our in-the-wild demonstration with YouTube videos" backgroundColor="white"/>

          {/* FIXME: Title, Author */}
          <TextBox
            title={
              <>
                UniMotion: Unified Motion Estimation for
                <br />
                Point Tracking and Video Instance Segmentation
              </>
            }
            backgroundColor={"white"}
            textColor={"black"}
            titleFontSize={"text-5xl"}
          >
          <Organization />
          </TextBox>
          {/* FIXME: TL;DR */}
          <TextBox
            title={`TL;DR: ${tldr}`}
            backgroundColor={bgColor}
            textColor={"white"}
            titleFontSize={"text-3xl"}
          />
          {/* FIXME: Abstract */}
          <AbstractBox
            title={"Abstract"}
            backgroundColor={"white"}
            textColor={"black"}
          >
            <Markdown text={abstract} />
          </AbstractBox>

          {/* FIXME: TL;DR */}
          <TextBox
            title={"Approach"}
            backgroundColor={bgColor}
            textColor={"white"}
          >

            <Markdown text={approach} />
            </TextBox>
            
          <OneImageBox image={workflow} backgroundColor={"white"} />


          <TextBox
            title={"ECCV 2024 Submission"}
            backgroundColor={bgColor}
            textColor={"white"}
          />
        </div>
      </WindowSizeContextProvider>
    </>
  );
}

export default App;
