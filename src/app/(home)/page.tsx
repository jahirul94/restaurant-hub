import { Metadata } from "next";
import useRestaurants from "../utils/useRestaurants";
import AllRestaurant from "./AllRestaurant";

export const metadata: Metadata = {
    title: 'Restaurant Hub | Home',
    description: 'Restaurant hub home page',
}

const HomePage = async () => {
    const data = await useRestaurants();
    return (
        <div>
            <AllRestaurant data={data}></AllRestaurant>
        </div>
    );
};

export default HomePage;