import "./App.scss";
// import allBeers from "./data/beers";
import { useEffect, useState } from "react";

import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const [beers, setBeers] = useState([]);
  const [allBeers, setAllBeers] = useState([])
  const [searchText, setSearchText] = useState("");
  const [filterCheckboxes, setFilterCheckboxes] = useState([
    {
      id: "abv",
      checked: false,
    },
    {
      id: "classic",
      checked: false,
    },
    {
      id: "acidic",
      checked: false,
    },
  ]);

  useEffect(() => {
    filteredBeers();
  }, [searchText, filterCheckboxes]);

  useEffect(() => {
    getBeers()
  }, [])

  const getBeers = async () => {
    const url = "https://api.punkapi.com/v2/beers";
    const response = await fetch(url);
    const data = await response.json();
    setBeers(data);
    setAllBeers(data);
  }

  const handleInput = (searchTerm) => {
    setSearchText(searchTerm);
  };

  const filteredBeers = () => {
    let beersArr = allBeers.filter((beer) => {
      const beerLowerCase = beer.name.toLowerCase();
      if (beerLowerCase.indexOf(searchText) >= 0) {
        return true;
      } else {
        return false;
      }
    });
    for (let i = 0; i < filterCheckboxes.length; i++) {
      const checkboxElement = filterCheckboxes[i];
      if (checkboxElement.checked === true) {
        switch (checkboxElement.id) {
          case "abv":
            beersArr = beersArr.filter((beer) => {
              if (beer.abv > 6) {
                return true;
              } else {
                return false;
              }
            });
            break;
          case "classic":
            beersArr = beersArr.filter((beer) => {
              if (Number(beer.first_brewed.split("/")[1]) < 2010) {
                return true;
              } else {
                return false;
              }
            });
            break;
          case "acidic":
            beersArr = beersArr.filter((beer) => {
              if (beer.ph < 4) {
                return true;
              } else {
                return false;
              }
            });
            break;
        }
      }
    }

    setBeers(beersArr);
  };

  const handleCheckboxes = (isChecked) => {
    let newFilters = filterCheckboxes.filter((currentFilter) => {
      if (currentFilter.id === isChecked.id) {
        return false;
      } else {
        return true;
      }
    });
    newFilters.push(isChecked);
    setFilterCheckboxes(newFilters);
  };

  return (
    <div className="mainGrid">
      <NavBar handleInput={handleInput} handleCheckboxes={handleCheckboxes} />
      <Main beers={beers} />
    </div>
  );
};

export default App;
