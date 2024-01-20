import { useQuery } from "@tanstack/react-query";
import { apiVideo } from "../../../services/apiVideos";

const useVideos = () => {
  const { data: video, isLoading } = useQuery({
    queryKey: ["videos"],
    queryFn: apiVideo,
  });

  return { video, isLoading };
};

export default useVideos;
