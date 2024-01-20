import { HiOutlineBellAlert } from "react-icons/hi2";
import { HiOutlineVideoCamera } from "react-icons/hi2";

const ProfileMenu = () => {
  return (
    <div className="flex justify-between  items-center basis-[10%] ">
      <HiOutlineVideoCamera className="text-xl" />
      <HiOutlineBellAlert className="text-xl" />
      <img
        className="rounded-full h-8"
        src="https://yt3.ggpht.com/yti/AGOGRCrtjG3qAa7XEid701fQYtjKRotI3n9d3ET71ryD=s88-c-k-c0x00ffffff-no-rj-mo"
        alt=""
      />
    </div>
  );
};

export default ProfileMenu;
