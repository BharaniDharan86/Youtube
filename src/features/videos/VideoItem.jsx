import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const VideoItem = ({ item }) => {
  const {
    id,
    snippet: { title, description, channelTitle, thumbnails },
    statistics: { viewCount },
  } = item;

  return (
    <NavLink to={`/watch?v=${id}`}>
      <div className="card card-compact w-80 bg-base-100 shadow-sm rounded-sm">
        <figure>
          <img src={thumbnails.medium.url} alt={`${title} Thumbnail`} />
        </figure>
        <div className="card-body">
          <h6 className="card-title text-sm">{title}</h6>
          <p>{description.slice(0, 45)}</p>
          <h4>{channelTitle}</h4>
          <div className="flex justify-around">
            <p>{(viewCount / 1000000).toFixed(2)}M views</p>
            <p>1 day ago</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default VideoItem;

/**
 * <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
 */
