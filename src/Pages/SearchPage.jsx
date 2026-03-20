import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router';
import NewsCard from '../Component/NewsCard';
import Navbar from '../Component/Navbar';
import AIFooter from '../Component/AIFooter';
import SkeletonLoader from '../Component/SkeletonLoader';

const SearchPage = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const [results, setResults] = useState([]);
    const [isSearching, setIsSearching] = useState(true);

    useEffect(() => {
        if (!query) return;
        setIsSearching(true);
        
        fetch('/news.json')
            .then(res => res.json())
            .then(data => {
                const filtered = data.filter(item => 
                    item.title.toLowerCase().includes(query.toLowerCase()) || 
                    item.details.toLowerCase().includes(query.toLowerCase()) ||
                    (item.author && item.author.name && item.author.name.toLowerCase().includes(query.toLowerCase()))
                );
                
                // Simulate deep network scan latency
                const timer = setTimeout(() => {
                    setResults(filtered);
                    setIsSearching(false);
                }, 1200);
                
                return () => clearTimeout(timer);
            })
            .catch(err => {
                console.error("Search query failed", err);
                setIsSearching(false);
            });
    }, [query]);

    return (
        <div className="relative min-h-screen overflow-x-hidden text-gray-200 selection:bg-primary/30 selection:text-white pb-0 neon-grid flex flex-col">
            <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/15 blur-[120px] rounded-full pointer-events-none z-0"></div>
            <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/15 blur-[120px] rounded-full pointer-events-none z-0"></div>

            <div className="relative z-10 w-full flex flex-col min-h-screen">
                <header>
                    <nav className='w-full border-b border-white/5 bg-base-100/50 backdrop-blur-md sticky top-0 z-50 mb-4'>
                        <div className="w-11/12 mx-auto pt-2">
                           <Navbar></Navbar>
                        </div>
                    </nav>
                </header>

                <main className='w-11/12 mx-auto mt-6 mb-16 flex flex-col flex-grow'>
                    
                    <div className="glass-panel p-10 mb-8 border-b-4 border-b-primary rounded-xl text-center md:text-left shadow-[0_10px_30px_rgba(6,182,212,0.15)] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full mix-blend-screen pointer-events-none"></div>
                        <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-2">
                            Global Scan Results
                        </h1>
                        <p className="text-gray-400 font-mono">
                            Query Parameter: <span className="text-primary font-bold">"{query}"</span>
                        </p>
                        
                        {!isSearching && (
                            <div className="mt-6 inline-flex items-center gap-3 px-4 py-2 bg-black/50 border border-white/10 rounded-lg">
                                <span className="w-3 h-3 rounded-full bg-success animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.8)]"></span>
                                <span className="text-sm font-bold text-gray-300">{results.length} Matches Found in Network</span>
                            </div>
                        )}
                    </div>

                    {isSearching ? (
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                            {[1, 2, 3].map((skel) => (
                                <SkeletonLoader key={skel} />
                            ))}
                        </div>
                    ) : (
                        <>
                            {results.length > 0 ? (
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                                    {results.map((news) => (
                                        <NewsCard key={news._id} news={news} />
                                    ))}
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center p-20 glass-panel border-dashed border-white/20 text-center">
                                    <div className="w-24 h-24 mb-6 rounded-full border border-white/10 flex items-center justify-center bg-black/40">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gray-500">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-300 mb-2">Zero Matches Identified</h3>
                                    <p className="text-gray-500 max-w-md">No datastreams in the current neural network match your query array. Try adjusting your parameters.</p>
                                    <Link to="/" className="btn-ai mt-8 hover:scale-105 transition-transform">Return to Nexus Root</Link>
                                </div>
                            )}
                        </>
                    )}
                </main>
                <AIFooter />
            </div>
        </div>
    );
};

export default SearchPage;
