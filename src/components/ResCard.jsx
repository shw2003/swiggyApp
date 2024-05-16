import { REST_CARD } from "../utils/constants";
import { CDN_URL } from "../utils/constants";
const ResCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData?.info;

  const styleCard = {
    backgroundColor: "pink",
  };

  return (
    <div className="res-card" style={styleCard}>
      <img
        className=""
        width="100%"
        height="100px"
        src={CDN_URL + cloudinaryImageId}
        alt="biryani Logo"
      />
      <h4>{name}</h4>
      <h5>{cuisines}</h5>
      <h5>{avgRating}</h5>
      <h5>{sla.slaString}</h5>
    </div>
  );
};

export default ResCard;
