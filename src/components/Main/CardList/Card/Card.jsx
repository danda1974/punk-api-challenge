import "./Card.scss";

const Card = ({ name, description, image_url }) => {

  return (
    <div className="beer-card">
      <img className="beer-card__image" src={image_url} alt={name} />
      <div className="beer-card__content">
        <h2 className="beer-card__heading">{name}</h2>
        <p className="beer-card__description">{description}</p>
      </div>
    </div>
  );
};

export default Card;
