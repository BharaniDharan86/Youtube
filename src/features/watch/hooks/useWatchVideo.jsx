import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getVideoById } from "../../../services/apiVideos";

const useWatchVideo = () => {
  const [searchParams] = useSearchParams();

  const id = searchParams.get("v");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["videoById", id],
    queryFn: () => getVideoById(id),
  });

  return { data, isLoading, isError };
};

export default useWatchVideo;

/**#Fighter releasing in cinemas on 25th January worldwide. Experience it in IMAX 3D. #FighterTrailer #FighterMovie Film Credits: Movie: Fighter Starring: Hrithik Roshan, Deepika Padukone, Anil Kapoor, Karan Singh Grover, Akshay Oberoi Director: Siddharth Anand Producer: Mamta Anand, Ramon Chibb, Anku Pande, Kevin Vaz, Ajit Andhare Co-Producer: Prime Focus Studios Music: Vishal and SheykharDirector of Photography: Satchith PauloseLyrics: KumaarStory: Siddharth Anand, Ramon ChibbScreenplay: Ramon ChibbDialogues: Hussain Dalal and Abbas DalalProduction Designer: Rajat PoddarEditor: Aarif ShiekhVisual Effects Studio: Redefine and Dneg Casting Director: Mukesh Chhabra Casting Co.Original Background Music: Sanchit Balhara And Ankit Balhara Executive Producer: Amreesh ManjrekarDirector Of Choreography: Bosco - Caesar, Remo D'souza and Piyush - Shazia Costume Stylist: Shaleena Nathani, Lakshmi Lehr and Niharika JollySound Design: Ganesh Gangadharan and Pritam DasAction Director: Seayoung Oh, Parvez Shaikh and Sunil Rodrigues (ROD) VFX Supervisor: Vishal AnandTrailer: Mohit Sajnaney Visual Promotions: Siddharth S Pande  (Feed The Wolf)Viacom18 Studios TeamMarketing: Rudrarup DattaSales & Distribution: Neeraj GoswamySyndication: Gayatri Gulati Business Planning & Content Alliances: Pradeep PrabhuSynopsis:Militant activities are going out of control in the Srinagar Valley, so a new and elite unit, Air Dragons, is commissioned by the Air Headquarters. They are now the first responders to any hostile activity. They comprise of the best combat aviators handpicked from across the IAF. FIGHTER is the story of Air Dragons who are willing to give it their all for the nation while going through the highs and lows of their internal and external battles.Follow Viacom18 Studios Handles :Facebook:- https://www.facebook.com/Viacom18Studios/Twitter :- https://twitter.com/Viacom18StudiosInstagram:- https://www.instagram.com/viacom18studios 

 */
