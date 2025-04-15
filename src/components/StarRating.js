import React from 'react';

// Component for star rating display
export const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
        <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
            <span key={i} className="text-xl">
            {i < fullStars ? (
                <span className="text-yellow-500">★</span>
            ) : i === fullStars && hasHalfStar ? (
                <span className="text-yellow-500">✯</span>
            ) : (
                <span className="text-gray-300">★</span>
            )}
            </span>
        ))}
        <span className="ml-1 text-sm text-gray-600">{rating.toFixed(1)}</span>
        </div>
    );
};