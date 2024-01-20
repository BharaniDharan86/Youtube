// import { YOUTUBE_API } from "../utils/constants";

export const apiVideo = async () => {
  const res = await fetch(
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=49&key=AIzaSyCAuDkYsLe6bxl-Pnq-22aS6wg5_b2ljig"
  );
  const data = await res.json();

  return data;
};

export const getVideoById = async (id) => {
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyCAuDkYsLe6bxl-Pnq-22aS6wg5_b2ljig`
  );

  const data = await res.json();

  const channelId = data.items[0].snippet.channelId;

  const channalRes = await fetch(
    `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=AIzaSyCAuDkYsLe6bxl-Pnq-22aS6wg5_b2ljig`
  );

  const channalData = await channalRes.json();

  return { data, channalData };
};
