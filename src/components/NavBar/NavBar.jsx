import SearchBox from "./SearchBox/SearchBox";

const NavBar = ({handleInput}) => {
  return (
    <div>
      <SearchBox handleInput={handleInput}/>
      {/* <FiltersList /> */}
    </div>
  );
};

export default NavBar;