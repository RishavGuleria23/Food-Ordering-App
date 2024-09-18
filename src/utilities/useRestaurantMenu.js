import { BASE_MENU_API } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `${BASE_MENU_API}${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      const json = await data.json();
      setResInfo(json.data);
    };

    fetchData();
  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;
