interface Props {
    video1: string;
    video2: string;
    title?: string;
    backgroundColor: string;
  }
  
  const MiddleVideoBox = ({ video1, video2, title, backgroundColor }: Props) => {
    return (
      <>
        <div
          className="flex justify-center items-center relative pt-10px"
          style={{ backgroundColor: backgroundColor }}
        >
            <video width={640} controls autoPlay loop muted>
                <source src={video1} type="video/mp4" />
            </video>
            <video width={640} controls autoPlay loop muted>
                <source src={video2} type="video/mp4" />
            </video>
        </div>
        <div className="text-center font-normal text-black text-lg" style={{ backgroundColor: backgroundColor }}>
          {title}
        </div>
      </>
    );
  };
  export default MiddleVideoBox;
  