import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";
import { useFilter } from "../context/filterContext";
import Loader from "./Loader";

const Products = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [filter, setFilter] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);

    const filterProps = useFilter();

    const {
        searchQuery,
        minPrice,
        maxPrice,
        selectedCategory,
    } = filterProps || {};

    const productsPerPage = 120;

    function getFilteredProducts() {
        let filteredProducts = products;

        if (selectedCategory) {
            filteredProducts = filteredProducts.filter(
                (product) =>
                    product.category === selectedCategory
            );
        }
        if (minPrice) {
            filteredProducts = filteredProducts.filter(
                (product) => product.price >= minPrice
            );
        }
        if (maxPrice) {
            filteredProducts = filteredProducts.filter(
                (product) => product.price < maxPrice
            );
        }

        if (searchQuery) {
            filteredProducts = filteredProducts.filter(
                (product) =>
                    product.title
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
            );
        }

        return filteredProducts;
    }

    const filteredProducts = getFilteredProducts();

    const handlePageChange = (page: number) => {
        if (currentPage > 0) {
            setCurrentPage(page);
        }
    };
    let totalPages = 12;

    const getPaginationButtons = () => {
        const buttons: number[] = [];

        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(totalPages, currentPage + 2);
        if (currentPage - 2 < 1) {
            endPage = Math.min(
                totalPages,
                endPage + (2 - currentPage - 1)
            );
        }
        if (currentPage + 2 > totalPages) {
            startPage = Math.max(
                1,
                startPage - (2 - totalPages - currentPage)
            );
        }

        for (
            let page = startPage;
            page <= endPage;
            page++
        ) {
            buttons.push(page);
        }
        return buttons;
    };

    useEffect(() => {
        async function fetchProducts() {
            try {
                // fetch data with axios
                let url = `https://dummyjson.com/products?limit=${productsPerPage}&skip=${
                    (currentPage - 1) * productsPerPage
                }`;

                const { data } = await axios.get(url);
                setProducts(data.products);
            } catch (error) {
                console.error(error);
            }
        }
        fetchProducts();
    }, [currentPage]);

    if (products.length <= 0) {
        return <Loader />;
    }

    return (
        <div>
            <h2>Products</h2>
            <div className="grid py-8 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-8">
                {filteredProducts?.map((product, idx) => (
                    <SingleProduct key={idx} {...product} />
                ))}
            </div>
            <div className="flex justify-between gap-4">
                <button
                    className="btn btn-outline disabled:pointer-events-none disabled:line-through"
                    onClick={() =>
                        handlePageChange(currentPage - 1)
                    }
                    disabled={currentPage === 1}
                >
                    prev
                </button>

                <div className="flex flex-center gap-4">
                    {getPaginationButtons().map(
                        (page, idx) => (
                            <button
                                key={idx}
                                className={`btn btn-outline-rounded ${
                                    page === currentPage
                                        ? "bg-slate-700 text-white"
                                        : ""
                                }`}
                                onClick={() =>
                                    handlePageChange(page)
                                }
                            >
                                {page}
                            </button>
                        )
                    )}
                </div>
                <button
                    className="btn btn-outline"
                    onClick={() =>
                        handlePageChange(currentPage + 1)
                    }
                >
                    next
                </button>
            </div>
        </div>
    );
};

export default Products;
