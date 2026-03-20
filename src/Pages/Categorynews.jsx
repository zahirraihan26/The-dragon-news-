import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Component/NewsCard';
import SkeletonLoader from '../Component/SkeletonLoader';

const Categorynews = () => {
    const { id } = useParams()
    const data = useLoaderData()
    const [categoryNews, setcategoryNews] = useState([])
    const [isFetching, setIsFetching] = useState(true);
    
    // Pagination states converted to Infinite Feed
    const [displayLimit, setDisplayLimit] = useState(6);

    useEffect(() => {
        setIsFetching(true);
        if (id === '08' || id == '0') {
            setcategoryNews(data)
        }
        else if (id === '01' || id == '1') {
            const filtereNews = data.filter(news => news.others.is_today_pick === true || news.others.is_trending === true)
            setcategoryNews(filtereNews)
        }
        else {
            const filtereNews = data.filter(news => news.category_id === parseInt(id, 10))
            setcategoryNews(filtereNews)
        }
        
        // Reset limit when category changes
        setDisplayLimit(6);

        // Simulate network/AI processing delay for premium UI feel
        const timer = setTimeout(() => {
            setIsFetching(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, [data, id])
    
    // Slice based on limit instead of pagination
    const currentNews = categoryNews.slice(0, displayLimit);

    const handleLoadMore = () => {
        setDisplayLimit(prev => prev + 6);
    };

    return (
        <div className="mt-4 pb-12">
          <div className="flex justify-between items-center border-b border-primary/20 pb-4 mb-6">
              <h2 className='font-semibold text-gray-300 text-lg'>
                  Total <span className='text-primary font-bold px-2 py-1 bg-primary/10 rounded-md border border-primary/20'>{categoryNews.length}</span> news found in this category
              </h2>
              {categoryNews.length > 0 && (
                  <span className="text-sm text-gray-500 font-mono">
                      Rendering {currentNews.length} / {categoryNews.length} nodes
                  </span>
              )}
          </div>
          
          {isFetching ? (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {[1, 2, 3, 4, 5, 6].map((skel) => (
                      <SkeletonLoader key={skel} />
                  ))}
              </div>
          ) : (
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {currentNews.map((news) => ( 
                    <NewsCard key={news._id} news={news}></NewsCard>
                ))}
              </div>
          )}
          
          {/* Infinite Scroll / Load More Action */}
          {!isFetching && displayLimit < categoryNews.length && (
              <div className="flex justify-center mt-12 mb-6">
                  <button 
                      onClick={handleLoadMore}
                      className="group relative px-8 py-3 bg-black/40 border border-primary/30 text-primary rounded-full hover:bg-primary/20 hover:border-primary/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all overflow-hidden"
                  >
                      <div className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-primary/30 to-transparent skew-x-[-20deg] group-hover:animate-[scan_1.5s_ease-in-out_infinite]"></div>
                      <span className="relative z-10 font-bold tracking-widest uppercase text-sm flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 animate-bounce">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                        Extract More Datastreams
                      </span>
                  </button>
              </div>
          )}
          
          {categoryNews.length === 0 && (
              <div className="glass-panel p-10 text-center border-dashed border-white/20">
                  <h3 className="text-xl font-bold text-gray-400 mb-2">No data streams detected</h3>
                  <p className="text-gray-500">The neural network could not find any articles matching this category.</p>
              </div>
          )}
        </div>
    );
};

export default Categorynews;