import Loader from "../../ui/Loader";
import VideoItem from "./VideoItem";
import useVideos from "./hooks/useVideos";

const Video = () => {
  const { video, isLoading } = useVideos();

  if (isLoading) return <Loader />;

  return (
    <div className="basis-[100%] ">
      <div className="grid grid-cols-4 p-8">
        {video.items.map((item) => {
          return <VideoItem item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Video;
