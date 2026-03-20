import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Component/NewsCard';

const Categorynews = () => {
    const { id } = useParams()
    const data = useLoaderData()
    const [categoryNews, setcategoryNews] = useState([])
    
    // Pagination states
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        // "08" is "All News" in the API, or "0" fallback
        if (id === '08' || id == '0') {
            setcategoryNews(data)
        }
        // "01" is "Breaking News", we map it to Today's Picks & Trending so it has data
        else if (id === '01' || id == '1') {
            const filtereNews = data.filter(news => news.others.is_today_pick === true || news.others.is_trending === true)
            setcategoryNews(filtereNews)
        }
        else {
            // Standard categories "02", "03" -> numeric 2, 3
            const filtereNews = data.filter(news => news.category_id === parseInt(id, 10))
            setcategoryNews(filtereNews)
        }
        
        // Reset to first page when category changes
        setCurrentPage(1);

    }, [data, id])
    
    // Pagination logic
    const totalPages = Math.ceil(categoryNews.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentNews = categoryNews.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 800, behavior: 'smooth' }); // Scroll to top of grid
    };

    return (
        <div className="mt-4">
          <div className="flex justify-between items-center border-b border-primary/20 pb-4 mb-6">
              <h2 className='font-semibold text-gray-300 text-lg'>
                  Total <span className='text-primary font-bold px-2 py-1 bg-primary/10 rounded-md border border-primary/20'>{categoryNews.length}</span> news found in this category
              </h2>
              {categoryNews.length > 0 && (
                  <span className="text-sm text-gray-500">
                      Showing page {currentPage} of {totalPages || 1}
                  </span>
              )}
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                currentNews.map((news) => ( 
                    <NewsCard key={news.id} news={news}></NewsCard>
                ))
            }
          </div>
          
          {/* Pagination Controls */}
          {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-10 mb-6">
                  <button 
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`px-4 py-2 rounded-lg border transition-all ${currentPage === 1 ? 'border-white/5 space-x-2 text-gray-600 cursor-not-allowed bg-black/20' : 'border-primary/30 text-primary hover:bg-primary/20 hover:border-primary/60 cursor-pointer shadow-[0_0_10px_rgba(6,182,212,0.1)]'}`}
                  >
                      Prev
                  </button>
                  
                  <div className="flex items-center gap-1 mx-2">
                      {[...Array(totalPages)].map((_, i) => (
                          <button
                              key={i}
                              onClick={() => handlePageChange(i + 1)}
                              className={`w-10 h-10 rounded-lg flex items-center justify-center font-medium transition-all ${currentPage === i + 1 ? 'bg-primary text-white shadow-[0_0_15px_rgba(6,182,212,0.6)] border border-primary' : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-primary/50 hover:bg-white/10'}`}
                          >
                              {i + 1}
                          </button>
                      ))}
                  </div>
                  
                  <button 
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className={`px-4 py-2 rounded-lg border transition-all ${currentPage === totalPages ? 'border-white/5 space-x-2 text-gray-600 cursor-not-allowed bg-black/20' : 'border-primary/30 text-primary hover:bg-primary/20 hover:border-primary/60 cursor-pointer shadow-[0_0_10px_rgba(6,182,212,0.1)]'}`}
                  >
                      Next
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