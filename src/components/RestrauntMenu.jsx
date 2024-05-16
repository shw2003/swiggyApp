import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";

const RestrauntMenu = () => {
  //   const [resInfo, setResinfo] = useState([]);

  const { resId } = useParams();

  const resInfo = useRestrauntMenu(resId);

  //   useEffect(() => {
  //     fetchMenu();
  //   }, []);

  if (resInfo === null) return <Shimmer />;

  //   const fetchMenu = async () => {
  //     const data = await fetch(MENU_REST_URL + resId);
  //     // const data = await fetch(
  //     //   "https://super-colt-coveralls.cyclic.app/api/users/swiggy/restaurants/659629"
  //     // );
  //     const json = await data.json();
  //     setResinfo(json.data);
  //   };

  const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  console.log(
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards
  );

  //   console.log(itemCards, "card");
  return (
    <div className="menu">
      <h1>{name || "hotel"}</h1>
      <p>
        {cuisines.join(",")} : 💲{costForTwo / 100}
      </p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item, index) => (
          <li key={index}>
            {item?.card?.info?.name} - 💲
            {item?.card?.info?.defaultPrice / 100 ||
              item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestrauntMenu;
