import useRestaurants, { TRestaurant } from "../utils/useRestaurants";
import AllRestaurant from "./AllRestaurant";

const HomePage = async () => {
    const data = await useRestaurants();

    return (
        <div>
            <AllRestaurant data={data}></AllRestaurant>
        </div>
    );
};

export default HomePage;