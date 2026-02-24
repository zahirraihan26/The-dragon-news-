import React, { use } from 'react';
import { NavLink } from 'react-router';
const catagorispromise = fetch('/categories.json')

    .then((res) => 
        res.json())

const Catagoris = () => {
    const catagoris =use(catagorispromise)
    return (
        <div>
            <h2 className='font-bold'>All catagoris({catagoris.length})</h2>

            <div className='grid grid-cols-1 mt-5 gap-3'>
                   {
                    catagoris.map(category =><NavLink
                         className={'btn bg-base-100 border-0 hover:bg-base-200 font-semibold text-accent'}
                         to={`/category/${category.id}`}
                        key={category.id}>
                            {category.name}</NavLink>)
                   } 
            </div>
        </div>
    );
};

export default Catagoris;