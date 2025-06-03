"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Adjust import path to your project

const RatingsAndReviews = ({ careHomeId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!careHomeId) {
      console.warn("No careHomeId provided to RatingsAndReviews.");
      return;
    }

    const fetchReviews = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/reviews?filters[care_home][documentId][$eq]=${careHomeId}&populate=*`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
            },
          }
        );

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        const formatted = data.data.map((item) => ({
          id: item.id,
          username: item.users_permissions_user?.username || "Anonymous",
          review: item.review,
          rating: item.rating,
          updatedAt: item.updatedAt,
        }));

        setReviews(formatted);
      } catch (err) {
        console.error("Failed to fetch reviews", err);
      }
    };

    fetchReviews();
  }, [careHomeId]);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center gap-1">
        {Array(fullStars)
          .fill(0)
          .map((_, i) => (
            <Star key={`full-${i}`} className="w-4 h-4 text-yellow-400 fill-current" />
          ))}
        {halfStar && (
          <Star
            key="half"
            className="w-4 h-4 text-yellow-400"
            style={{ fill: "url(#half-star-gradient)" }}
          />
        )}
        {Array(emptyStars)
          .fill(0)
          .map((_, i) => (
            <Star key={`empty-${i}`} className="w-4 h-4 text-yellow-400 opacity-50" />
          ))}
      </div>
    );
  };

  // Helper to get initials from username
  const getInitials = (name) => {
    if (!name) return "A";
    const parts = name.split(" ");
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Ratings & Reviews</h2>
        <div className="space-y-8">
          {reviews.length === 0 ? (
            <p className="text-gray-600">No reviews available.</p>
          ) : (
            reviews.map((review) => (
              <div key={review.id} className="flex flex-col gap-2 border-b pb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>{getInitials(review.username)}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-semibold text-gray-800">{review.username}</h3>
                  </div>
                  <span className="text-sm text-gray-500">{formatDate(review.updatedAt)}</span>
                </div>
                <div className="flex items-center gap-2">{renderStars(review.rating)}</div>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">{review.review}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default RatingsAndReviews;
