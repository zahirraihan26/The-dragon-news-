import React, { useState } from 'react';
import { FaPlay, FaPause, FaVolumeUp } from "react-icons/fa";

const AIAudioBriefing = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="glass-panel neon-border p-5 mt-8 relative overflow-hidden group">
            <div className={`absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[40px] rounded-full pointer-events-none transition-opacity duration-500 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}></div>
            
            <h2 className='font-bold text-lg mb-4 text-gray-200 flex items-center gap-2'>
                <FaVolumeUp className="text-primary" />
                <span>Audio <span className="glow-text">Briefing</span></span>
            </h2>
            
            <p className="text-xs text-gray-400 mb-4 line-clamp-2">
                Listen to the AI-generated synthetic voice briefing of today's top tech stories.
            </p>

            <div className="bg-white/5 rounded-xl border border-white/10 p-4 flex items-center gap-4">
                <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-12 h-12 rounded-full bg-primary/20 hover:bg-primary/40 border border-primary/50 flex items-center justify-center text-primary transition-all flex-shrink-0 relative"
                >
                    {isPlaying && <span className="absolute inset-0 rounded-full border border-primary animate-ping opacity-50"></span>}
                    {isPlaying ? <FaPause /> : <FaPlay className="ml-1" />}
                </button>
                
                <div className="flex-1 flex items-center justify-between gap-1 h-8">
                    {/* Simulated Audio Waveform */}
                    {[...Array(15)].map((_, i) => (
                        <div 
                            key={i} 
                            className={`w-1 bg-primary rounded-full transition-all ${isPlaying ? 'animate-pulse' : ''}`}
                            style={{ 
                                height: isPlaying ? `${Math.max(20, Math.random() * 100)}%` : '20%',
                                opacity: isPlaying ? 1 : 0.3,
                                animationDuration: `${0.3 + Math.random() * 0.5}s`
                            }}
                        ></div>
                    ))}
                </div>
            </div>
            
            {isPlaying && (
                <div className="mt-3 text-center">
                    <span className="text-[10px] text-primary font-bold uppercase tracking-widest animate-pulse">
                        Playing: Sector Analysis
                    </span>
                </div>
            )}
        </div>
    );
};

export default AIAudioBriefing;
