export type Review = {
    comment: string;
    date: string;
    rating: number;
    reviewerEmail: string;
    reviewerName: string;
};
export type ProductType = {
    id: number;
    title: string;
    description: string;
    category: string;
    images: string[];
    price: number;
    reviews: Review[];
    rating: 2.5;
    brand: string;
};
