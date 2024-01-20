/* eslint-disable react/prop-types */
import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchBar = ({ searchQuery, setSearchQuery, suggestList }) => {
  return (
    <div className="basis-[80%]">
      <div className=" text-center flex items-center justify-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
          className="border-2 border-stone-300   h-10  w-[40%]  ml-12 placeholder:text-stone-600 placeholder:text-lg rounded-l-full placeholder:px-[32px] py-1"
        />
        <button className="border-2 border-stone-300 py-1 px-3 h-10 rounded-r-full border-l-0">
          <HiMagnifyingGlass />
        </button>
      </div>

      {searchQuery && (
        <div className="fixed z-10 bg-slate-50 w-[40%] mx-0 my-auto text-center">
          <ul>
            {suggestList.map((el, ind) => {
              return <li key={ind}>{el}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
