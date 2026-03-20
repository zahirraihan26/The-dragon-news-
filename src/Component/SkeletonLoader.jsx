import React from 'react';

const SkeletonLoader = () => {
    return (
        <div className="glass-panel p-4 flex flex-col gap-4 w-full h-[450px] animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] border-t-2 border-t-white/10 relative overflow-hidden">
            {/* Ambient Sweep */}
            <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] animate-[sweep_2.5s_infinite]"></div>

            <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                <div className="w-12 h-12 rounded-full bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)] border border-white/10"></div>
                <div className="flex flex-col gap-2 flex-grow">
                    <div className="h-4 w-1/3 bg-white/10 rounded-md"></div>
                    <div className="h-2 w-1/4 bg-white/5 rounded-md"></div>
                </div>
            </div>
            
            <div className="h-40 w-full bg-white/5 rounded-xl border border-white/5 mt-2"></div>
            
            <div className="h-6 w-3/4 bg-white/10 rounded-md mt-4"></div>
            <div className="h-3 w-full bg-white/5 rounded-md mt-2"></div>
            <div className="h-3 w-full bg-white/5 rounded-md"></div>
            <div className="h-3 w-5/6 bg-white/5 rounded-md"></div>
            
            <div className="mt-auto flex justify-between items-center pt-4 border-t border-white/10">
                <div className="flex gap-2">
                    <div className="h-8 w-24 bg-primary/20 border border-primary/30 rounded-full"></div>
                </div>
                <div className="flex gap-2 items-center">
                    <div className="h-6 w-6 rounded-full bg-white/10"></div>
                    <div className="h-6 w-6 rounded-full bg-white/10"></div>
                </div>
            </div>
            
            <style jsx>{`
                @keyframes sweep {
                    0% { left: -100%; }
                    100% { left: 200%; }
                }
            `}</style>
        </div>
    );
};

export default SkeletonLoader;
