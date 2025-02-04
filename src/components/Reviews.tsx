import { Review } from "../types/types";

const Reviews = ({ comment, reviewerName }: Review) => {
    return (
        <div>
            <h4 className="text-sm font-bold mb-2">
                {comment}
            </h4>
            <p className="text-xs">
                Published by{" "}
                <strong> {reviewerName}</strong>
            </p>
        </div>
    );
};

export default Reviews;
