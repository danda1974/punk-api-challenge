import FilterItem from "./FilterItem/FilterItem"
import "./FiltersList.scss"

const FiltersList = ({handleCheckboxes}) => {
  const filters = [
    {
      id: "abv", 
      name: "High ABV (>6.0%)"
    },
    {
      id: "classic", 
      name: "Classic Range"
    },
    {
      id: "acidic", 
      name: "Acidic (ph < 4)"
    },
  ]
  const filterItemArr = filters.map((filter, index) => {
    return <FilterItem filterName={filter.name} filterID={filter.id} handleCheckboxes={handleCheckboxes}/>
  })
  return (
    <div className="filtersList">
      {filterItemArr}
    </div>
  );
};

export default FiltersList;
