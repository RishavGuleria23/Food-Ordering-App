import React, { useState, useEffect, useContext } from "react";
import RestrauntCard, { withPromotedLabel } from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utilities/UserContext";
import useOnlineStatus from "../utilities/useOnlineStatus";

// Body Component - contains all the restaurant cards
const Body = () => {
  // State Variables - super powerful variables
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestrauntCard);
  const { loggedInUser,setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7046486&lng=76.71787259999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const restaurants =
        json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setListOfRes(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setListOfRes([]);
      setFilteredRestaurant([]);
    }
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Please check your internet connection</h1>;



  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="m-4 p-4">
          <input
            type="text"
            placeholder="Search for restaurants"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              // filter logic here to get top rated restaurant
              const filteredList = listOfRes.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <label>Username : </label>
          <input
            className="border border-black p-1"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurants) => (
          <Link
            key={restaurants.info.id}
            to={"/restaurant/" + restaurants.info.id}
          >
            {restaurants.info.isOpen ? (
              <RestaurantCardPromoted resData={restaurants} />
            ) : (
              <RestrauntCard resData={restaurants} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
