import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import resList from "../utils/mockData";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState(resList);
  const [filteredRestaurants, setFilteredRestauranrs] = useState(resList);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9716&lng=77.5946&page_type=DESKTOP_WEB_LISTING");
    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9352403&lng=77.624532&str=Biryani&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=1c003364-225c-b1a0-9607-23dd4a0a069f&metaData=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22NA%22%2C%22cloudinaryId%22%3A%22Autosuggest%2FTop%2520200%2520queries%2FBiryani.png%22%2C%22dishFamilyId%22%3A%22846613%22%2C%22dishFamilyIds%22%3A%5B%22846613%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D&selectedPLTab=RESTAURANT");
    // const json = await data.json();
    // console.log(json?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[0].card.card.info);
    // setListOfRestraunt(json?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[0].card.card.info.name);
  }

  return (
    <div className="body">
      <div className="filter">

        {/* search starts */}
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
          }} />
          <button className="search-btn" onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter((res) => {
              return res.data.name.toLowerCase().includes(searchText.toLowerCase());
            }
            );
            setFilteredRestauranrs(filteredRestaurant);
          }}>Search</button>
        </div>
        {/* search ends */}

        {/* filter with rating starts */}
        <button
          className="filter-btn"
          onClick={() => {
            alert("Top Rated Restaurants");
            const filteredList = listOfRestaurants.filter((res) =>  {
              return res.data.avgRating > 4
            }
            );
            setFilteredRestauranrs(filteredList);
            console.log("filteredList", filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        {/* filter with rating ends */}
      </div>


      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
