import { Outlet } from "react-router";

const ProductDetailLayout = () => {
    return (
        <>
            <main className="flex-1 p-4">{<Outlet />}</main>
        </>
    );
};
export default ProductDetailLayout;
