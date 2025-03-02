import SearchIcon from "@mui/icons-material/Search";
const SearchBar = () => {
  return (
    <>
      <div>
        <form className="flex flex-row h-[7vh] w-[98vw] border rounded-xl outline-none border-gray-400 justify-between pointer-none">
          <input
            type="text"
            placeholder="Why Carry Just Give Away"
            className="ml-2 w-[95vw] outline-none"
            aria-label="Search"
          ></input>
          <button type="submit" className="mr-2">
            <SearchIcon />
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchBar;
