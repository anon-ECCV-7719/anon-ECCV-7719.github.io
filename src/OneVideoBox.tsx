interface Props {
    video: string;
    backgroundColor: string;
  }
  
  const OneVideoBox = ({ video, backgroundColor }: Props) => {
    return (
      <>
        <div
          className="flex justify-center items-center relative pt-10px"
          style={{ backgroundColor: backgroundColor }}
        >
            <video width={1050} controls autoPlay>
                <source src={video} type="video/mp4" />
            </video>
        </div>
      </>
    );
  };
  export default OneVideoBox;
  