import "./SearchBox.scss";

const SearchBox = ({ searchTerm, handleInput }) => {
  // const [searchTerm, setSearchTerm] = useState("");
  // const handleInput = event => {
  //   const cleanInput = event.target.value.toLowerCase();
  //   setSearchTerm(cleanInput);
  // };
  return (
    <div className="searchBox">
      <input type="text" placeholder="Search..." value={searchTerm} onInput={handleInput} className="search-box__input"/>
    </div>
  );
};

export default SearchBox;