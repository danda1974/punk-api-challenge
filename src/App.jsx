import "./App.scss";
import allBeers from "./data/beers";
import { useState } from "react";

import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const [beers, setBeers] = useState(allBeers)
  const handleInput = (searchTerm) => {
    const beersArr = allBeers.filter((beer) => {
      const beerLowerCase = beer.name.toLowerCase()
      if (beerLowerCase.indexOf(searchTerm) >= 0) {
        return true
      } else {
        return false
      }
    })
    setBeers(beersArr)
  }
  // const getBeers = async () => {
  //   const url = "https://api.punkapi.com/v2/beers";
  //   const response = await.fetch(url);
  //   const data = await response.json();
  //   setBeers(data.???)
  // }
  return (
    <div className="mainGrid">
      <NavBar handleInput={handleInput}/>
      <Main beers={beers}/>
    </div>
  );
};

export default App;
