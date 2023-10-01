import starImg from "../../assets/images/star.png";
import "./Card.css";

const Card = (props) => {
  const {
    id,
    title,
    description,
    price,
    coverImg,
    stats: { rating, reviewCount },
    location,
    openSpots,
  } = props;
  return (
    <article className="card" key={id}>
      <div className="card--header">
        <img className="card--header_img" src={`./images/${coverImg}`} alt="" />
        {openSpots === 0 ? (
          <div className="card--header_status">sold out</div>
        ) : location === "Online" ? (
          <div className="card--header_status">online</div>
        ) : (
          ""
        )}
      </div>
      <div className="card--content">
        <div className="card--content_rating">
          <img className="card--content_rating-star" src={starImg} alt="" />
          <div className="card--content_rating-text">
            <span className="card--content_rating-value">{rating} </span>
            <span>({reviewCount}) • </span>
            <span>{location}</span>
          </div>
        </div>
        <p className="card--content_title">{title}</p>
        <p className="card--content_price">
          <span>From £{price}</span> / person
        </p>
      </div>
    </article>
  );
};

export default Card;
