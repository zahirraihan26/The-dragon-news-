import React, { useState, useEffect } from 'react';

const LiveStatsLayer = () => {
    // Fake counters for a "live" feel
    const [speed, setSpeed] = useState(94.2);
    const [nodes, setNodes] = useState(12492);
    
    useEffect(() => {
        const interval = setInterval(() => {
            // Randomly fluctuate the floating point speed
            setSpeed(prev => parseFloat((prev + (Math.random() - 0.5)).toFixed(1)));
            // Randomly increase active nodes
            if (Math.random() > 0.5) {
                setNodes(prev => prev + Math.floor(Math.random() * 3));
            }
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            {/* Stat 1 */}
            <div className="glass-panel p-5 relative overflow-hidden group">
                <div className="absolute top-0 right-[-10%] w-32 h-32 bg-primary/10 blur-[40px] rounded-full group-hover:bg-primary/20 transition-all duration-500"></div>
                <div className="relative z-10 flex items-center justify-between">
                    <div>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Processing Speed</p>
                        <h4 className="text-3xl font-black text-white flex items-end gap-1">
                            {speed} <span className="text-primary text-sm font-mono mb-1">PFLOPS</span>
                        </h4>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center bg-primary/10 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Stat 2 */}
            <div className="glass-panel p-5 relative overflow-hidden group">
                <div className="absolute top-0 right-[-10%] w-32 h-32 bg-secondary/10 blur-[40px] rounded-full group-hover:bg-secondary/20 transition-all duration-500"></div>
                <div className="relative z-10 flex items-center justify-between">
                    <div>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Active Neural Nodes</p>
                        <h4 className="text-3xl font-black text-white flex items-end gap-1">
                            {nodes.toLocaleString()}
                        </h4>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-secondary/30 flex items-center justify-center bg-secondary/10 shadow-[0_0_10px_rgba(139,92,246,0.2)]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Stat 3 */}
            <div className="glass-panel p-5 relative overflow-hidden group border-l-4 border-l-success">
                <div className="absolute top-0 right-[-10%] w-32 h-32 bg-success/10 blur-[40px] rounded-full group-hover:bg-success/20 transition-all duration-500"></div>
                <div className="relative z-10 flex items-center justify-between">
                    <div>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Global Threats Blocked</p>
                        <h4 className="text-3xl font-black justify-self-start text-success flex items-end gap-2">
                            ZERO <span className="w-2 h-2 rounded-full bg-success animate-pulse mb-2 shadow-[0_0_8px_rgba(74,222,128,0.8)]"></span>
                        </h4>
                    </div>
                    <div className="w-12 h-12 rounded-full border border-success/30 flex items-center justify-center bg-success/10 shadow-[0_0_10px_rgba(74,222,128,0.2)]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveStatsLayer;
