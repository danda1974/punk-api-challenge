import "./App.scss";
import beers from "./data/beers";
// import { useState } from "react";
// ich brauche useState, useEffect etc hierfür?!

import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  // console.log("Cheers");

  // const getBeers = async () => {
  //   const url = "https://api.punkapi.com/v2/beers";
  //   const response = await.fetch(url);
  //   const data = await response.json();
  //   setBeers(data.???)
  // }
  return (
    <div className="mainGrid">
      {/* <p>Wo bleibt mein Bier?</p> */}
      <NavBar />
      <Main />
    </div>
  );
};

export default App;
