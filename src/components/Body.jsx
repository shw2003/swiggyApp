import { useEffect, useState } from "react";
import ResCard from "./ResCard";
import resObj from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resObjs, setResObjs] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterRest, setFilterRest] = useState([]);
  const filterObj = resObj.filter((res) => res.info.avgRating > 4.3);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&collection=83667"
    );
    const json = await data.json();
    setResObjs(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRest(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const filteredRestrant = resObjs.filter((res) =>
    res.info.name.toLowerCase().includes(searchText)
  );

  console.log(resObjs);
  // if (resObjs.length === 0) {
  //   return <Shimmer />;
  // }
  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus);
  if (onlineStatus === false)
    return <h1>Check your internet connection..........</h1>;
  return resObjs?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter the rest catd and update the UI
              //searchText
              console.log(searchText);
              setFilterRest(filteredRestrant);
            }}
          >
            search
          </button>
        </div>

        <button
          // filter logic
          onClick={() => {
            setResObjs(filterObj);
          }}
        >
          Top Rated Restaraunt
        </button>
      </div>
      <div className="res-container">
        {/* Restaraunt card */}
        {filterRest.map((rest) => (
          <Link key={rest?.info?.id} to={"/restaurants/" + rest?.info?.id}>
            <ResCard resData={rest} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
