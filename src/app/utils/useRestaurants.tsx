
export type TRestaurant = {
    restaurant_name: string;
    state: string
}


const useRestaurants = async () => {
    const res = await fetch("https://nextjs-orpin-omega-98.vercel.app/api/restaurants", { cache: "force-cache" })
    const data: Array<TRestaurant> = await res.json();
    return data;
};

export default useRestaurants;