import React, { useContext } from 'react';
import { FaEye, FaShareAlt, FaStar, FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';
import { BookmarkContext } from '../Provider/BookmarkProvider';

function NewsCard({ news }) {
    const { _id, author, title, thumbnail_url, details, rating, total_view } = news;
    const { toggleBookmark, isBookmarked } = useContext(BookmarkContext);
    const bookmarked = isBookmarked(_id);

    // AI simulated analysis stat
    const aiConfidence = Math.floor(Math.random() * (99 - 85 + 1)) + 85;
    
    // Simulated Sentiment for Card
    const sentiments = [
        { label: "Positive", color: "text-emerald-400", border: "border-emerald-500/30" },
        { label: "Neutral", color: "text-blue-400", border: "border-blue-500/30" },
        { label: "Analytical", color: "text-primary", border: "border-primary/30" }
    ];
    const cardSentiment = sentiments[Math.floor(Math.random() * sentiments.length)];


    // Helper functions for stars
    const renderStars = (ratingValue) => {
        const totalStars = 5;
        const filledStars = Math.round(ratingValue);
        return [...Array(totalStars)].map((_, i) => (
            <span key={i} className={`text-sm ${i < filledStars ? 'text-primary drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]' : 'text-gray-600'}`}>
                {i < filledStars ? <FaStar /> : <FaRegStar />}
            </span>
        ));
    };

    return (
        <div className="glass-panel overflow-hidden flex flex-col group h-full">
            {/* Author / Date Header */}
            <div className="flex items-center p-3 border-b border-white/10 relative z-10">
                <div className='flex items-center gap-3'>
                    <img className='w-10 h-10 rounded-full border border-primary/20 bg-base-200' src={author.img} alt="" />
                    <div>
                        <p className='font-bold text-base-content'>{author.name}</p>
                        <p className='text-xs text-base-content/60 font-mono uppercase tracking-tighter'>{new Date(author.published_date).toLocaleDateString()}</p>
                    </div>
                </div>
                <div className="flex gap-2 ml-auto">
                    <button 
                        onClick={(e) => { e.preventDefault(); toggleBookmark(news); }} 
                        className={`btn btn-circle btn-sm btn-ghost border border-white/10 ${bookmarked ? 'text-secondary bg-secondary/10 shadow-[0_0_10px_rgba(139,92,246,0.6)]' : 'text-gray-400 hover:text-white hover:bg-white/10'} transition-all`}
                        title={bookmarked ? "Unsave Data Stream" : "Save Data Stream"}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill={bookmarked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                    </button>
                    <button className="text-gray-400 hover:text-primary transition-colors p-2 rounded-full hover:bg-primary/10">
                        <FaShareAlt size={14} />
                    </button>
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

        {/* Sentiment Badge Overlay */}
        <div className={`absolute bottom-5 left-7 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border ${cardSentiment.border} flex items-center gap-2 z-10 shadow-lg`}>
            <span className={`w-1.5 h-1.5 rounded-full bg-current ${cardSentiment.color}`}></span>
            <span className={`text-[10px] uppercase tracking-wider font-bold ${cardSentiment.color}`}>{cardSentiment.label} Analysis</span>
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
          <Link 
            to={`/news/${_id}`} 
            state={{ news }}
            className="glow-text font-bold cursor-pointer ml-2 hover:text-secondary transition-colors"
          >
            Read Full Article
          </Link>
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
            {Number(rating.number).toFixed(1)}
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
