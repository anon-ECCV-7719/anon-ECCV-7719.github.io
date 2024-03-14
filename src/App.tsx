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
  video3,
  video4,
  video5,
  video6,
  jointvideo1,
  jointvideo2,
  jointvideo3,
  jointvideo4,
  jointvideo5,
  jointvideo6,
  jointvideo7,
  jointvideo8,
  approach,
  workflow
} from "./const";
import Organization from "./Organization";
import TopVideoBox from "./TopVideoBox"
import MiddleVideoBox from "./MiddleVideoBox"
import OneImageBox from "./OneImageBox"
function App() {
  return (
    <>
      <WindowSizeContextProvider>
        <div className="w-screen h-screen min-w-[1400px]">

          <TopVideoBox video1={video1} video2={video2} video3={video3} video4={video4} video5={video5} video6={video6} title="(Zero-shot Video Segmentation with in-the-wild YouTube clips)" backgroundColor="white"/>

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
            title={"Demonstration on Joint Point Tracking and Segmentation"}
            backgroundColor={bgColor}
            textColor={"white"}
          ></TextBox>
          <MiddleVideoBox video1={jointvideo1} video2={jointvideo2} title="Animal Instances" backgroundColor="white"/>
          <MiddleVideoBox video1={jointvideo3} video2={jointvideo4} title="Fine-grained Object Parts" backgroundColor="white"/>
          <MiddleVideoBox video1={jointvideo5} video2={jointvideo6} title="Dynamic Vehicle Instances" backgroundColor="white"/>
          <MiddleVideoBox video1={jointvideo7} video2={jointvideo8} title="Dynamic Human Instances" backgroundColor="white"/>

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
