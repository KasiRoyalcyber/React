import { LOGO_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData, "in restaurant card");

  const {
    // cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData;

  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={LOGO_URL} />
      <h3 className="res-name">{name}</h3>
      <h4 className="res-cuisines">{cuisines?.join(", ")}</h4>
      <h4 className="res-rating">{costForTwo / 100} for two</h4>
      <h4 className="res-rating">{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
