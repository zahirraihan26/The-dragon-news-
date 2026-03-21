import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Component/NewsCard';
import SkeletonLoader from '../Component/SkeletonLoader';

const Categorynews = () => {
    const { id } = useParams()
    const data = useLoaderData()
    const [categoryNews, setcategoryNews] = useState([])
    const [isFetching, setIsFetching] = useState(true);
    
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        setIsFetching(true);
        setcategoryNews(data);
        setCurrentPage(1); // Reset to page 1 on category change

        const timer = setTimeout(() => {
            setIsFetching(false);
        }, 800);

        return () => clearTimeout(timer);
    }, [data, id])
    
    // Calculate pagination slices
    const totalPages = Math.ceil(categoryNews.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentNews = categoryNews.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setIsFetching(true);
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => setIsFetching(false), 500);
    };

    return (
        <div className="mt-4 pb-12">
          <div className="flex justify-between items-center border-b border-primary/20 pb-4 mb-6">
              <h2 className='font-semibold text-gray-300 text-lg'>
                  Total <span className='text-primary font-bold px-2 py-1 bg-primary/10 rounded-md border border-primary/20'>{categoryNews.length}</span> news found
              </h2>
              {categoryNews.length > 0 && (
                  <span className="text-sm text-gray-500 font-mono">
                      Page {currentPage} of {totalPages}
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
          
          {/* Neural Pagination UI */}
          {!isFetching && categoryNews.length > itemsPerPage && (
              <div className="flex justify-center items-center gap-3 mt-12 mb-6">
                  <button 
                      disabled={currentPage === 1}
                      onClick={() => handlePageChange(currentPage - 1)}
                      className={`px-4 py-2 rounded-lg border transition-all ${currentPage === 1 ? 'border-white/5 text-gray-600 cursor-not-allowed' : 'border-primary/30 text-primary hover:bg-primary/10 hover:border-primary'}`}
                  >
                      &larr; Prev
                  </button>

                  <div className="flex gap-2">
                      {[...Array(totalPages)].map((_, i) => (
                          <button
                              key={i + 1}
                              onClick={() => handlePageChange(i + 1)}
                              className={`w-10 h-10 rounded-lg border flex items-center justify-center font-bold transition-all ${currentPage === i + 1 ? 'bg-primary/20 border-primary text-primary shadow-[0_0_15px_rgba(6,182,212,0.4)]' : 'border-white/10 text-gray-400 hover:border-primary/50 hover:text-white'}`}
                          >
                              {i + 1}
                          </button>
                      ))}
                  </div>

                  <button 
                      disabled={currentPage === totalPages}
                      onClick={() => handlePageChange(currentPage + 1)}
                      className={`px-4 py-2 rounded-lg border transition-all ${currentPage === totalPages ? 'border-white/5 text-gray-600 cursor-not-allowed' : 'border-primary/30 text-primary hover:bg-primary/10 hover:border-primary'}`}
                  >
                      Next &rarr;
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