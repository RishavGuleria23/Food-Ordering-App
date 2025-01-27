import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data,showItems,setShowIndex }) => {
 

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* HEADER */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex cursor-pointer justify-between"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length}){" "}
          </span>
          <span> ⬇️</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
      {/* Accordian body*/}
    </div>
  );
};
export default RestaurantCategory;
