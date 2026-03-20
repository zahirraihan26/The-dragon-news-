import React, { useState, useEffect } from 'react';

const SystemStatus = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => (prev >= 100 ? 0 : prev + Math.floor(Math.random() * 15)));
        }, 800);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="glass-panel neon-border p-5 mt-8">
            <h2 className='font-bold text-lg mb-4 text-gray-200 border-b border-primary/20 pb-3 flex items-center gap-2'>
                <span className="w-2 h-2 rounded-full bg-success animate-ping"></span>
                Core AI Health
            </h2>
            
            <div className="flex flex-col gap-4">
                {/* Status Items */}
                <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400 font-medium">Neural Link</span>
                    <span className="text-success font-bold drop-shadow-[0_0_5px_rgba(34,197,94,0.6)]">Active</span>
                </div>
                
                <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-400 font-medium">Model Latency</span>
                    <span className="text-primary font-bold">12ms</span>
                </div>
                
                {/* Progress Bar */}
                <div className="mt-2 text-xs">
                    <div className="flex justify-between text-gray-400 mb-1">
                        <span>Data Ingestion</span>
                        <span>{Math.min(progress, 100)}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden border border-white/5">
                        <div 
                            className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                            style={{ width: `${Math.min(progress, 100)}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SystemStatus;
