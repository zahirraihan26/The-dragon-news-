import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 glass-panel neon-border p-3 mb-8 overflow-hidden relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent pointer-events-none'></div>
            <p className='bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-lg font-semibold tracking-wider shadow-[0_0_15px_rgba(6,182,212,0.5)] z-10 whitespace-nowrap'>
                LATEST AI NEWS
            </p>

            <Marquee className='flex gap-10 text-gray-300 font-light' pauseOnHover={true} speed={50} gradient={false}>
                <p className='mx-8 hover:text-primary transition-colors cursor-pointer'>OpenAI announces groundbreaking advancements in AI logic...</p>
                <p className='mx-8 hover:text-primary transition-colors cursor-pointer'>New machine learning models predict market trends with unprecedented accuracy...</p>
                <p className='mx-8 hover:text-primary transition-colors cursor-pointer'>Quantum computing integration accelerates deep learning tenfold...</p>
            </Marquee>

        </div>
    );
};

export default LatestNews;