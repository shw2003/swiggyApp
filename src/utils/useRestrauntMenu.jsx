import React from "react";
import { useState, useEffect } from "react";
import { MENU_REST_URL } from "./constants";

const useRestrauntMenu = (resId) => {
  //fetch data

  const [resInfo, setResinfo] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);
  console.log(resInfo);
  const fetchMenu = async () => {
    const data = await fetch(MENU_REST_URL + resId);
    // const data = await fetch(
    //   "https://super-colt-coveralls.cyclic.app/api/users/swiggy/restaurants/659629"
    // );
    const json = await data.json();
    setResinfo(json.data);
  };
  return resInfo;
};

export default useRestrauntMenu;
