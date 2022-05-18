import SearchBox from "./SearchBox/SearchBox";
import FiltersList from "./FiltersList/FiltersList";

const NavBar = ({handleInput, handleCheckboxes}) => {
  return (
    <div>
      <SearchBox handleInput={handleInput} />
      <FiltersList handleCheckboxes={handleCheckboxes} />
    </div>
  );
};

export default NavBar;