import { Star } from "lucide-react";

const reviews = [
    {
        id: 1,
        name: "John Doe",
        review:
            "had an exceptional experience at this hotel. The check-in process was smooth and efficient, earning a well-deserved 5 stars. The staff was extremely helpful and friendly, providing top-notch service throughout my stay, also deserving of a 5-star rating. The room was comfortable, clean, and well-maintained, making my stay truly enjoyable. A perfect 5-star experience overall.",
        rating: 4.5,
    },
    {
        id: 2,
        name: "John Doe",
        review:
            "had an exceptional experience at this hotel. The check-in process was smooth and efficient, earning a well-deserved 5 stars. The staff was extremely helpful and friendly, providing top-notch service throughout my stay, also deserving of a 5-star rating. The room was comfortable, clean, and well-maintained, making my stay truly enjoyable. A perfect 5-star experience overall.",
        rating: 5,
    },
];

const RatingsAndReviews = () => {
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

        return (
            <div className="flex items-center gap-1">
                {Array(fullStars)
                    .fill(0)
                    .map((_, index) => (
                        <Star key={`full-${index}`} className="w-4 h-4 text-white fill-current" />
                    ))}
                {halfStar && (
                    <Star
                        key="half"
                        className="w-4 h-4 text-white"
                        style={{ fill: "url(#half-star-gradient)" }}
                    />
                )}
                {Array(emptyStars)
                    .fill(0)
                    .map((_, index) => (
                        <Star key={`empty-${index}`} className="w-4 h-4 text-white opacity-50" />
                    ))}
            </div>
        );
    };

    return (
        <section className="w-full bg-white py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    Ratings & Reviews
                </h2>
                <div className="space-y-8">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="flex items-start gap-4 border-b pb-6"
                        >
                            {/* User Avatar */}
                            <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0 overflow-hidden">
                                <img
                                    src="/assets/Details_Hero.png"
                                    alt="Retreat"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Review Content */}
                            <div>
                                <div className="flex items-center gap-2">
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {review.name}
                                    </h3>
                                    {/* Rating */}
                                    <div className="flex items-center gap-1 bg-yellow-400 text-black text-sm font-semibold px-2 py-1 rounded-md">
                                        {renderStars(review.rating)}
                                    </div>
                                </div>
                                <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                                    {review.review}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RatingsAndReviews;