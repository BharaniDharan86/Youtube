/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../../utils/appSlice";
import useWatchVideo from "./hooks/useWatchVIdeo";
import {
  HiArrowDown,
  HiOutlineHandThumbDown,
  HiOutlineHandThumbUp,
  HiOutlineShare,
} from "react-icons/hi2";

const WatchPage = () => {
  const dispatch = useDispatch();

  const { data, isError, isLoading } = useWatchVideo();
  useEffect(() => {
    dispatch(closeSideBar());
  }, []);

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>Something went wrong</p>;

  console.log(data);

  const videoDetails = data.data.items[0];
  const channelData = data.channalData.items[0];
  console.log(channelData);
  return (
    <div className="w-[80%] p-8">
      <iframe
        width="100%"
        height="470"
        src={`https://www.youtube.com/embed/${data.data.items[0].id}?si=6IaQkHhM2G0H2wbU`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <h1 className="mt-6 text-lg text-stone-950 font-semibold">
        {videoDetails.snippet.title}
      </h1>
      <div className=" flex items-center mt-10 justify-between">
        <div className="flex gap-8 items-center ">
          <img
            className="rounded-full h-14"
            src={channelData.snippet.thumbnails.default.url}
            alt={channelData.snippet.title}
          />
          <div>
            <h2 className="text-lg text-stone-950 font-semibold">
              {channelData.snippet.title}
            </h2>
            <span>
              {(channelData.statistics.subscriberCount / 1000000).toFixed(1)}M
              subscribers
            </span>
          </div>

          <button className="btn h-[30px] text-lg bg-stone-950 text-slate-200 hover:text-slate-950">
            Subscribe
          </button>
        </div>

        <div>
          <button className="btn">
            <HiOutlineHandThumbUp />
            {(videoDetails.statistics.likeCount / 1000).toFixed(2)}k
          </button>
          <button className="btn">
            <HiOutlineHandThumbDown />
          </button>

          <button className="btn">
            <HiOutlineShare />
            Share
          </button>

          <button className="btn">
            <HiArrowDown />
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;
