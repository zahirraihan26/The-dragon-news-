import React, { use } from 'react';
import { NavLink } from 'react-router';
const catagorispromise = fetch('/categories.json')

    .then((res) => 
        res.json())

const Catagoris = () => {
    const catagoris =use(catagorispromise)
    return (
        <div className="glass-panel neon-border p-5 mt-4">
            <h2 className='font-bold text-lg mb-6 text-gray-200 border-b border-white/10 pb-4'>Explore Categories <span className="text-primary">({catagoris.length})</span></h2>

            <div className='flex flex-col gap-3'>
                   {
                    catagoris.map(category =><NavLink
                         className={({ isActive }) => `px-5 py-3 rounded-xl transition-all duration-300 font-medium ${isActive ? 'bg-primary/20 text-primary shadow-[0_0_15px_rgba(6,182,212,0.4)] border border-primary/50' : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white hover:border-primary/30'}`}
                         to={`/category/${category.id}`}
                        key={category.id}>
                            {category.name}</NavLink>)
                   } 
            </div>
        </div>
    );
};

export default Catagoris;