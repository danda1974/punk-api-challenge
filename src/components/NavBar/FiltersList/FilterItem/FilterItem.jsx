import "./FilterItem.scss";

const FilterItem = ({filterName, filterID, handleCheckboxes}) => {
  const toggleCheckbox = (event) => {
    handleCheckboxes({
      checked: event.target.checked,
      id: event.target.id
    })
  }
  return (
    <div className="filterItem">
      <span>{filterName}</span> <input type="checkbox" id={filterID} onClick={toggleCheckbox}></input> 
    </div>
  );
};

export default FilterItem;