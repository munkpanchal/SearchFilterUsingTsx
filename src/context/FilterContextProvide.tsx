import { ReactNode, useState } from "react";
import { FilterContext } from "./filterContext";

export const FilterProvider: React.FC<{
    children: ReactNode;
}> = ({ children }) => {
    const [searchQuery, setSearchQuery] =
        useState<string>("");
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(0);
    const [selectedCategory, setSelectedCategory] =
        useState<string>("");

    return (
        <FilterContext.Provider
            value={{
                searchQuery,
                setSearchQuery,
                minPrice,
                setMinPrice,
                maxPrice,
                setMaxPrice,
                selectedCategory,
                setSelectedCategory,
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};
