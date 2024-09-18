import React from "react";
import { CDN_URL } from "../utilities/constants";

const RestrauntCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId, // Use cloudinaryImageId directly from resData.info
    name,
    avgRating,
    cuisines,
    sla,
    costForTwo,
  } = resData?.info; // Ensure resData.info exists to avoid errors

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
        // Hide if not found
      />

      <h3 className="font-bold py-4 text-lg">{name}</h3>

      <h3>{avgRating}</h3>
      <h3>{costForTwo}</h3>
      <h3>Delivery Time: {sla?.deliveryTime} mins</h3>
    </div>
  );
};
//Higher Order Component

// input - RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestrauntCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-gray-500 text-white m-4 p-1 rounded-sm">
          Promoted
        </label>
        <RestrauntCard {...props} />
      </div>
    );
  };
};

export default RestrauntCard;
