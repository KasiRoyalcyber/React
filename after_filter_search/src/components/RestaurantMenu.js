import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";

const RestaurantMenu = () => {

    const [menu, setMenu] = useState(null);
    const {resId} = useParams();
    console.log(resId, "the id");   

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9545388&lng=77.6400098&restaurantId="+resId+"&catalog_qa=undefined&query=Biryani&submitAction=ENTER");
        const json = await data.json();
        console.log(json);
        setMenu(json.data);
    }
    const { name, cuisines, costForTwo, avgRating } = menu?.cards[2]?.card?.card?.info || {};
    // const {itemCards} = menu?.cards[4]?.groupedCard?.cardGroupMap?.Regular?.cards[2]?.card?.card?.itemCards[0].card?.info?.name;
    const itemCards = menu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];
    console.log(itemCards, "the item cards");
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines?.join(", ")}</h2>
            <h3>{costForTwo / 100} for two</h3>
            <h4>{avgRating}</h4>
            <h5>Menu</h5>
            <ul>
                {itemCards.map((res) => (
                    <li key={res.card.info.id}>{res.card.info.name} - Rs. {res.card.info.price/100}</li>
                ))}
            </ul>
        </div>
    );
}

export default RestaurantMenu;