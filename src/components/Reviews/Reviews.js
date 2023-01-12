import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://travel-photographer-server.vercel.app/review-all")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, []);

  return (
    <section className="my-8 ">
      <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
        <h1 className="p-4 text-4xl text-blue-600/[.9] font-semibold leading-none text-center">
          What our customers are saying about us
        </h1>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-11/12 mx-auto">
        {loading ? (
          <div className="flex items-center justify-center mt-5 space-x-2">
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
            <div className="w-4 h-4 rounded-full animate-pulse dark:bg-violet-400"></div>
          </div>
        ) : (
          reviews.map((review) => (
            <ReviewCard key={review._id} review={review}></ReviewCard>
          ))
        )}
      </div>
    </section>
  );
};

export default Reviews;
