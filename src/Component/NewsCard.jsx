import React from "react";


import { FaEye, FaStar, FaShareAlt } from "react-icons/fa";
import { IoMdBookmark } from "react-icons/io";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    details,
    thumbnail_url,
    rating,
    total_view,
  } = news;

  // Format the published date nicely
  const date = new Date(author.published_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-lg transition-all border border-base-200">
      {/* Header */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 h-10 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
        </div>

       <div className="flex gap-5">
         <IoMdBookmark className="text-gray-500 hover:text-primary cursor-pointer"></IoMdBookmark>
        <FaShareAlt className="text-gray-500 hover:text-primary cursor-pointer" />
       </div>

      </div>

      {/* Title */}
      <div className="px-4">
        <h3 className="font-bold text-base-content mb-3">
          {title}
        </h3>
      </div>

      {/* Image */}
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-none w-full object-cover"
        />
      </figure>

      {/* Details */}
      <div className="px-4 py-3">
        <p className="text-sm text-gray-600 mb-3">
          {details.slice(0, 180)}...
          <span className="text-primary font-medium cursor-pointer">
            Read More
          </span>
        </p>
      </div>

      {/* Footer */}
      <div className="card-actions justify-between items-center px-4 py-2 border-t border-base-200 text-sm">
        {/* Rating */}
        <div className="flex items-center gap-1 text-warning">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`${
                i < rating.number ? "text-warning" : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-1 text-gray-700 font-medium">
            {rating.number.toFixed(1)}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
