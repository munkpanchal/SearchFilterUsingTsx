import { createContext, useContext } from "react";

type FilteredContextType = {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    minPrice: number;
    setMinPrice: (price: number) => void;
    maxPrice: number;
    setMaxPrice: (price: number) => void;
    selectedCategory: string;
    setSelectedCategory: (cate: string) => void;
};

export const FilterContext = createContext<
    FilteredContextType | undefined
>(undefined);

export const useFilter = () => {
    const context = useContext(FilterContext);

    if (!FilterContext) {
        throw new Error(
            "useFilter must be used within a FilterProvider"
        );
    }
    return context;
};
