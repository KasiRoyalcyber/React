// import { useState, useEffect } from "react";
// import RestaurantCard from "./RestaurantCard";





// const MyTry = () => {
//     const [test, setTest] = useState([]);



// const fetchDataTest = async () => {
//     const data = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9352403&lng=77.624532&str=Biryani&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=1c003364-225c-b1a0-9607-23dd4a0a069f&metaData=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22NA%22%2C%22cloudinaryId%22%3A%22Autosuggest%2FTop%2520200%2520queries%2FBiryani.png%22%2C%22dishFamilyId%22%3A%22846613%22%2C%22dishFamilyIds%22%3A%5B%22846613%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D&selectedPLTab=RESTAURANT");
//     const jsonTest = await data.json();

//     const card = jsonTest?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards || [];

//     // const names = card.map((item) => item?.card?.card?.info?.name).filter(Boolean); // remove undefined/null
//     const resData = card.map((item) => item?.card?.card?.info).filter(Boolean); // remove undefined/null
//     // console.log(resData,"tessttttt");
//     setTest(resData);
// }

// useEffect(() => {
//     fetchDataTest();
// }, []);

// return (
//     <div>
//         <h2>Restaurants</h2>
//         <div className="restaurant-list">
//            {test.map((restaurant) => (
//           <RestaurantCard key={restaurant.id} resData={restaurant} />
//         ))}
//         </div>
//     </div>
// );
// }
