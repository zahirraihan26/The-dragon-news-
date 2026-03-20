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
    <div className="card glass-panel neon-border mb-6">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full border-2 border-primary/50 shadow-[0_0_10px_rgba(6,182,212,0.3)]">
              <img src={author.img} alt={author.name} className="rounded-full rounded-full" />
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-sm text-gray-200">{author.name}</h2>
            <p className="text-xs text-gray-400">{date}</p>
          </div>
        </div>

       <div className="flex gap-5">
         <IoMdBookmark className="text-gray-400 hover:text-primary transition-colors cursor-pointer text-lg md:text-xl drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]"></IoMdBookmark>
        <FaShareAlt className="text-gray-400 hover:text-primary transition-colors cursor-pointer text-lg md:text-xl drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]" />
       </div>

      </div>

      {/* Title */}
      <div className="px-5 pt-4 pb-2 text-justify">
        <h3 className="font-bold text-xl text-gray-100 hover:text-primary transition-colors cursor-pointer leading-relaxed">
          {title}
        </h3>
      </div>

      {/* Image */}
      <figure className="px-5 py-3 relative overflow-hidden group">
        {/* Core AI Processing Badge Overlay */}
        <div className="absolute top-5 right-7 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-primary/40 flex items-center gap-2 z-10 shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-wider font-bold text-primary">Core AI Verified</span>
        </div>
        
        <div className="absolute inset-x-5 inset-y-3 bg-gradient-to-t from-base-100 via-transparent to-transparent z-0 rounded-xl"></div>
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none rounded-xl transition-all duration-500 group-hover:bg-primary/20"></div>
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full object-cover max-h-[400px] border border-white/5 shadow-lg relative z-[-1]"
        />
      </figure>

      {/* Details */}
      <div className="px-5 py-2">
        {/* AI Summary Block */}
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 mb-4 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-secondary"></div>
            <div className="flex items-center gap-2 mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
                <span className="text-xs font-bold text-gray-300 uppercase tracking-wide">AI Summary</span>
            </div>
            <p className="text-sm text-gray-400 italic">
                {details.slice(0, 80)}... Key focus revolves around emerging trends that impact overall dynamics.
            </p>
        </div>

        <p className="text-sm text-gray-400 leading-relaxed mb-3">
          {details.slice(0, 150)}...
          <span className="glow-text font-bold cursor-pointer ml-2">
            Read Full Article
          </span>
        </p>
      </div>

      {/* Footer */}
      <div className="card-actions justify-between items-center px-5 py-4 border-t border-white/5 text-sm">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`${
                i < Math.round(rating.number) ? "text-warning drop-shadow-[0_0_5px_rgba(245,158,11,0.6)]" : "text-gray-600"
              }`}
            />
          ))}
          <span className="ml-2 text-gray-300 font-medium">
            {rating.number.toFixed(1)}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
          <FaEye className="text-primary" />
          <span className="font-medium">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
