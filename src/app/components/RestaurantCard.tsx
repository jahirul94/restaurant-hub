import { TRestaurant } from "../utils/useRestaurants";

const RestaurantCard = ({ restaurant }: { restaurant: TRestaurant }) => {
    return (
        <div className="border border-slate-300 p-5 hover:scale-105 duration-500">
            <p className="text-base md:text-xl font-bold">Restaurant: {restaurant.restaurant_name}</p>
            <p className="text-base md:text-lg font-semibold">City : {restaurant.state}</p>
        </div>
    );
};

export default RestaurantCard;