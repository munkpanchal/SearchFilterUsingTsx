import axios from "axios";
import { useEffect, useState } from "react";
import { useFilter } from "../context/filterContext";

const Sidebar = () => {
    const [categories, setCategories] = useState<
        string[] | null
    >([]);

    const filterProps = useFilter();

    const {
        searchQuery,
        setSearchQuery,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        selectedCategory,
        setSelectedCategory,
    } = filterProps || {};

    const handleCategoryChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSelectedCategory?.(e.target.value);
    };
    const handleReset = () => {
        setSelectedCategory?.("");
        setSearchQuery?.("");
        setMinPrice?.(0);
        setMaxPrice?.(0);
    };

    useEffect(() => {
        async function fetchProducts() {
            try {
                // fetch data with axios
                const { data } = await axios.get(
                    "https://dummyjson.com/products"
                );
                const products = data.products;
                // console.log(products);
                const abc = products.map(
                    (product: any) => product.category
                );
                const uniqueCategories: string[] =
                    Array.from(new Set(abc));
                setCategories(uniqueCategories);
            } catch (error) {
                console.error(error);
            }
        }
        fetchProducts();
    }, []);
    useEffect(() => {
        console.log(`Category: ${selectedCategory}`);
    }, [searchQuery, minPrice, maxPrice, selectedCategory]);

    return (
        <section className="w-full max-w-64 min-h-dvh p-4 border-r border-slate-300">
            <div className="flex flex-col gap-4 sticky top-4">
                <h1 className="text-xl font-bold mb-4">
                    React Store
                </h1>
                <div className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Search Products..."
                        onChange={(e) => {
                            if (setSearchQuery) {
                                setSearchQuery?.(
                                    e.target.value
                                );
                            }
                        }}
                        value={searchQuery}
                    />
                    <div className="flex gap-4 max-sm:flex-col ">
                        <input
                            type="number"
                            placeholder="Min..."
                            onChange={(e) =>
                                setMinPrice?.(
                                    Number(e.target.value)
                                )
                            }
                        />
                        <input
                            type="number"
                            placeholder="Max..."
                            onChange={(e) =>
                                setMaxPrice?.(
                                    Number(e.target.value)
                                )
                            }
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h3>categories</h3>

                    <div className="flex flex-col gap-2">
                        {categories?.map(
                            (category, idx) => (
                                <label
                                    key={idx}
                                    className="flex items-center gap-2"
                                >
                                    <input
                                        type="radio"
                                        className="capitalize"
                                        name="category"
                                        value={category}
                                        onChange={
                                            handleCategoryChange
                                        }
                                        checked={
                                            selectedCategory ===
                                            category
                                        }
                                    />
                                    {category}
                                </label>
                            )
                        )}
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h3>reset filters</h3>

                    <div className="flex flex-col gap-2">
                        <button
                            className="btn btn-fill"
                            onClick={handleReset}
                        >
                            <span>Reset</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sidebar;
