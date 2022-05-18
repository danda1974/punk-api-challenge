import "./SearchBox.scss";

const SearchBox = ({ handleInput }) => {
  // const [searchTerm, setSearchTerm] = useState("");

  const handleEvent = event => {
    const cleanInput = event.target.value.toLowerCase();
    handleInput(cleanInput);
  };

  return (
    <div className="searchBox">
      <input type="text" placeholder="Search..." onInput={handleEvent} className="search-box__input"/>
    </div>
  );
};

export default SearchBox;