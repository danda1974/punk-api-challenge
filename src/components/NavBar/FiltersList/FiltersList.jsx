import FilterItem from "./FilterItem/FilterItem"
import "./FiltersList.scss"

const FiltersList = ({handleCheckboxes}) => {
  const filters = [
    {
      id: "abv", 
      name: "High Alcohol (ABV >6.0%)"
    },
    {
      id: "classic", 
      name: "Classic Range (before 2010)"
    },
    {
      id: "acidic", 
      name: "High Acidity (ph <4)"
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
