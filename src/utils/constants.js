// const API_AUTH_KEY = "AIzaSyDtCiEbTfwt2hblVWkImu947OD6pKdKyW4";
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=49&key=${API_KEY}`;
