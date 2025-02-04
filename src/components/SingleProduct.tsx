import { Link } from "react-router";
import { ProductType } from "../types/types";

const SingleProduct = ({
    id,
    title,
    description,
    category,
    images,
}: ProductType) => {
    return (
        <article className=" rounded-xl group  overflow-hidden shadow hover:shadow-lg transition scale-95 hover:scale-100">
            <Link to={`/product/${id}`}>
                <figure className="aspect-[4/3]">
                    <img
                        className="w-full h-full object-contain transition group-hover:scale-110"
                        loading="lazy"
                        src={images[0]}
                        alt={title}
                    />
                </figure>
                <div className="content p-4 h-[20ch] flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                        <span className="text-xs uppercase ">
                            {category}
                        </span>
                        <h4 className=" text-xl font-bold">
                            {title}
                        </h4>
                    </div>
                    <p className="text-sm">
                        {description.slice(0, 75)}...
                    </p>
                </div>
            </Link>
        </article>
    );
};

export default SingleProduct;
