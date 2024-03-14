interface Props {
    video1: string;
    video2: string;
    video3: string;
    video4: string;
    video5: string;
    video6: string;
    title?: string;
    backgroundColor: string;
  }
  
  const TopVideoBox = ({ video1, video2, video3, video4, video5, video6, title, backgroundColor }: Props) => {
    return (
      <>
        <div
          className="flex justify-center items-center relative pt-10px"
          style={{ backgroundColor: backgroundColor }}
        >
            <video width={320} controls autoPlay loop muted>
                <source src={video1} type="video/mp4" />
            </video>
            &nbsp;
            <video width={320} controls autoPlay loop muted>
                <source src={video2} type="video/mp4" />
            </video>
            &nbsp;
            <video width={320} controls autoPlay loop muted>
                <source src={video3} type="video/mp4" />
            </video>
            &nbsp;
            <video width={320} controls autoPlay loop muted>
                <source src={video4} type="video/mp4" />
            </video>
            &nbsp;
            <video width={320} controls autoPlay loop muted>
                <source src={video5} type="video/mp4" />
            </video>
            &nbsp;
            <video width={320} controls autoPlay loop muted>
                <source src={video6} type="video/mp4" />
            </video>
        </div>
        <div className="text-center" style={{ backgroundColor: backgroundColor }}>
        <div className="text-gray-5">
          {title}
        </div>
        </div>
      </>
    );
  };
  export default TopVideoBox;
  