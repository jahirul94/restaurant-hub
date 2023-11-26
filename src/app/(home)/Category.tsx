
const Category = ({ category, setDataByCategory, active }: { category: string, setDataByCategory: (category: string) => void, active: string }) => {

    return (
        <div onClick={() => setDataByCategory(category)}>
            <button className={`${category === active ? "text-blue-600 scale-105" : "text-black"} text-base md:text-lg font-semibold md:font-bold`}>{category}</button>
        </div>
    );
};

export default Category;