"use client"

import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { TRestaurant } from "../utils/useRestaurants";
import Category from "./Category";
import { FaAngleDown } from "react-icons/fa";


const AllRestaurant = ({ data }: { data: Array<TRestaurant> }) => {
    const [categories, setCategories] = useState<Array<string>>([]);
    const [active, setActive] = useState<string>("Georgia");
    const [restaurants, setRestaurants] = useState<Array<TRestaurant>>([]);
    const [toggle, setToggle] = useState<boolean>(false);

    // for remove duplicate state name 
    useEffect(() => {
        const categories = data?.filter((restaurant, index, self) =>
            index === self.findIndex((r) => r.state === restaurant.state)
        );
        setCategories(categories?.map(c => c.state));
    }, [data])


    useEffect(() => {
        const categoryData = data?.filter((restaurant: TRestaurant) => restaurant.state === "Georgia")
        setRestaurants(categoryData);
    }, [data])

    // for filter data by state name 
    const setDataByCategory = (category: string): void => {
        setActive(category);
        const categoryData = data?.filter((restaurant: TRestaurant) => restaurant.state === category)
        setRestaurants(categoryData);
    }

    return (
        <div className="my-10">
            {/* toggle for small device  */}
            <button onClick={() => setToggle(!toggle)} className="flex items-center md:hidden my-4 bg-slate-800 text-white font-bold py-2 px-4 rounded">Categories<FaAngleDown className="ms-2"></FaAngleDown></button>
            {toggle &&
                <div className="grid gap-2 grid-cols-3 my-4 text-center">
                    {categories?.map((c: string, i: number) => <Category key={i} category={c} setDataByCategory={setDataByCategory} active={active}></Category>)}
                </div>}

              {/* show categories  */}
            <div className="hidden md:grid gap-8 grid-cols-4 lg:grid-cols-8 py-4 mb-10
            text-center border-b-2 border-slate-800">
                {categories?.map((c: string, i: number) => <Category key={i} category={c} setDataByCategory={setDataByCategory} active={active}></Category>)}
            </div>

            {/* show  all restaurants  */}
            <div className="grid gap-4 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {restaurants?.map((restaurant: TRestaurant, i: number) => <RestaurantCard key={i} restaurant={restaurant}></RestaurantCard>)}
            </div>
        </div>
    );
};

export default AllRestaurant;