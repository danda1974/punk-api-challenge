import CardList from "./CardList/CardList"

const Main = ({beers}) => {
  return (
    <div>
      <CardList beers={beers}/>
    </div>
  );
};

export default Main;