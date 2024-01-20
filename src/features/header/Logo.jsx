import { HiBars3 } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../../utils/appSlice";

const Logo = () => {
  const dispatch = useDispatch();

  function handleToggleSideBar() {
    dispatch(toggleSideBar());
  }

  return (
    <div className="flex items-center gap-3  basis-[10%]">
      <HiBars3
        className="text-xl  hover:cursor-pointer"
        onClick={handleToggleSideBar}
      />
      <img
        className="h-16"
        src="https://imgs.search.brave.com/k8zT8vPB_g0lEWfLLX-YqgbteXk-3dnf-eJRICrHCYg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL1VF/eGlhdGxBbUhxMmkx/TlYyZTJDNjFHSW1F/Y2dKc09tMVFKcDlR/UWJPWGJoNDFzMS0y/ZGZrU0Z4TTd6UkRw/Y2tXU0gxNlVLOElL/Mk9zU1BXNGxtWk1z/QnE4OHFFQkhGN0xF/MFhhU1dlclBKZEVj/VlZXVVNvN0FOXzE0/a2xsS1pxQWMzd2Zn/NWw.jpeg"
        alt=""
      />
    </div>
  );
};

export default Logo;
