import { useSelector } from "react-redux";
import SideBar from "../sidebar/SideBar";
import { Outlet } from "react-router-dom";

const Body = () => {
  const { isSideBarOpen } = useSelector((store) => store.app);
  return (
    <div className="flex">
      {isSideBarOpen && <SideBar />}
      <Outlet />{" "}
    </div>
  );
};

export default Body;
