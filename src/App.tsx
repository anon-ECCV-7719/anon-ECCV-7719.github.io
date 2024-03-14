import TextBox from "./TextBox";
import { WindowSizeContextProvider } from "./contexts/WindowSizeContext";
import Markdown from "./Markdown";
import AbstractBox from "./AbstractBox";
import {
  bgColor,
  tldr,
  abstract,
  expVideo,

} from "./const";
import Organization from "./Organization";
import OneVideoBox from "./OneVideoBox";

function App() {
  return (
    <>
      <WindowSizeContextProvider>
        <div className="w-screen h-screen min-w-[1400px]">
          {/* FIXME: Title, Author */}
          <TextBox
            title={
              <>
                A Unified Approach for
                <br />
                Point Tracking and Video Object Segmentation
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
            title={`Video Box`}
            backgroundColor={bgColor}
            textColor={"white"}
            titleFontSize={"text-3xl"}
          />
          <OneVideoBox video={expVideo} backgroundColor="white"/>

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
