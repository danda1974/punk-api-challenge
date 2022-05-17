// import beers from "../../../data/beers";
// not import it but use props instead

import Card from "./Card/Card"
import "./CardList.scss";

const CardList = ({beers}) => {
  const cardsArr = beers.map((beer, index) => {
    return (
      <Card image_url={beer.image_url} name={beer.name} description={beer.description} key={"card" + index} />
    )
  })
  return (
    <div className="beercardsGrid">
      {cardsArr}
    </div>
  );
};

export default CardList;