import { TRestaurant } from "../utils/useRestaurants";

const RestaurantCard = ({ restaurant }: { restaurant: TRestaurant }) => {
    return (
        <div className="border border-slate-300 p-8">
            <p>{restaurant.restaurant_name}</p>
            <p>{restaurant.state}</p>
        </div>
    );
};

export default RestaurantCard;