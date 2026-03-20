import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

const HorizontalCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data.data.news_category));
    }, []);

    return (
        <div className="w-full bg-base-100/30 backdrop-blur-md border border-white/10 rounded-2xl p-4 my-8">
            <h2 className="text-lg font-bold text-gray-300 mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    Neural Data Streams
                </div>
                <div className="flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold rounded-full uppercase tracking-widest shadow-[0_0_10px_rgba(239,68,68,0.2)]">
                    <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
                    Live Sync
                </div>
            </h2>
            
            <div className="flex overflow-x-auto gap-4 custom-scrollbar pb-2 pt-1 px-1">
                {categories.map((category) => (
                    <NavLink
                        to={`/category/${category.category_id}`}
                        key={category.category_id}
                        className={({ isActive }) => 
                            `whitespace-nowrap px-6 py-2 rounded-full font-medium transition-all duration-300 flex-shrink-0 ${
                                isActive 
                                ? "bg-gradient-to-r from-primary to-secondary text-white shadow-[0_0_15px_rgba(6,182,212,0.5)] border border-white/20 scale-105" 
                                : "bg-white/5 text-gray-400 border border-white/10 hover:border-primary/50 hover:text-white hover:bg-white/10"
                            }`
                        }
                    >
                        {category.category_name}
                    </NavLink>
                ))}
            </div>
        </div>
    );
};

export default HorizontalCategories;
