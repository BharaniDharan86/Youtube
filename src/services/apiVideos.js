const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const apiVideo = async () => {
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=49&key=${API_KEY}`
  );
  const data = await res.json();

  return data;
};

export const getVideoById = async (id) => {
  const res = await fetch(
    `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${API_KEY}`
  );

  const data = await res.json();

  const channelId = data.items[0].snippet.channelId;

  const channalRes = await fetch(
    `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${API_KEY}`
  );

  const channalData = await channalRes.json();

  return { data, channalData };
};
