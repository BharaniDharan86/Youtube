/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Logo from "./Logo";
import ProfileMenu from "./ProfileMenu";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { addCache } from "../../utils/searchSlice";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestList, setSuggestList] = useState([]);
  const dispatch = useDispatch();

  const searchedCache = useSelector((store) => store.search);

  useEffect(() => {
    if (!searchQuery) {
      setSearchQuery("");
      return;
    }

    if (searchedCache[searchQuery]) {
      setSuggestList(searchedCache[searchQuery]);
      return;
    }

    const debounceTimer = setTimeout(() => fetchSearch(), 200);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  const fetchSearch = async () => {
    const res = await fetch(
      `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${searchQuery}`
    );
    const data = await res.json();

    setSuggestList(data[1]);
    dispatch(
      addCache({
        [searchQuery]: data[1],
      })
    );
  };
  return (
    <div className="flex border-2 justify-between items-center  px-6">
      <Logo />
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        suggestList={suggestList}
      />
      <ProfileMenu />
    </div>
  );
}

export default Header;
