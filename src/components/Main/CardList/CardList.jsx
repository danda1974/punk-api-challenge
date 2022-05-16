import beers from "../../../data/beers";
import Card from "./Card/Card"
import "./CardList.scss";

const CardList = () => {
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