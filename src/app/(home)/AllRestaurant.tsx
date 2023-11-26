"use client"
import { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { TRestaurant } from "../utils/useRestaurants";


const AllRestaurant = ({ data }: { data: Array<TRestaurant> }) => {
    const [restaurants, setRestaurants] = useState<Array<TRestaurant>>([]);
    

    return (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {data.map((restaurant: TRestaurant, i: number) => <RestaurantCard key={i} restaurant={restaurant}></RestaurantCard>)}
        </div>
    );
};

export default AllRestaurant;