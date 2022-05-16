import beers from "../../../data/beers";
import Card from "./Card/Card"

const CardList = ({cards}) => {
  const cardsArr = cards.map((card, index) => {
    return (
      <Card image={beers.image_url} name={beers.name} description={beers.description} key={"card" + index} />
    )
  })
  return (
    <div>
      {cardsArr}
    </div>
  );
};

export default CardList;