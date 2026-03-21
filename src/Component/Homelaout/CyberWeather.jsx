import React, { useState, useEffect } from 'react';
import useWeather from '../../hooks/useWeather';

const CyberWeather = () => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const { weather, loading, error, location } = useWeather();

    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="glass-panel p-5 mb-6 border border-base-content/10 rounded-2xl relative overflow-hidden group">
            {/* Ambient Backgrounds */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] rounded-full mix-blend-screen group-hover:bg-primary/30 transition-all duration-700"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 blur-[50px] rounded-full mix-blend-screen group-hover:bg-secondary/20 transition-all duration-700"></div>

            {/* Header info */}
            <div className="flex justify-between items-start relative z-10 mb-4">
                <div>
                    <h3 className="font-bold text-base-content text-lg flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Sector: {location.city || "Dhaka"}
                    </h3>
                    <p className="text-xs text-base-content/50 font-mono tracking-widest uppercase">Atmospheric Scan</p>
                </div>
                <div className="text-right">
                    <p className="text-sm font-bold text-base-content font-mono">{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</p>
                    <p className="text-xs text-primary/70">{currentTime.toLocaleDateString()}</p>
                </div>
            </div>

            {/* Weather Main */}
            <div className="flex items-center justify-between relative z-10 my-4 bg-base-100/40 border border-base-content/5 rounded-xl p-4 shadow-inner min-h-[100px]">
                {loading ? (
                    <div className="flex items-center justify-center w-full py-2">
                        <span className="loading loading-dots loading-md text-primary"></span>
                    </div>
                ) : error ? (
                    <div className="text-error text-xs font-mono w-full text-center py-2 animate-pulse">
                        FAULT: {error}
                    </div>
                ) : (
                    <>
                        <div className="flex items-center gap-4">
                            {/* Cloud/Rain SVG */}
                            <div className="w-14 h-14 relative drop-shadow-[0_0_15px_rgba(6,182,212,0.6)]">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-primary">
                                    <path d="M17.5 19C19.9853 19 22 16.9853 22 14.5C22 12.1311 20.1741 10.1837 17.8596 10.019C17.3824 6.64375 14.4811 4 11 4C7.13401 4 4 7.13401 4 11C4 11.2396 4.01202 11.4764 4.03554 11.7103C2.26189 12.0152 1 13.626 1 15.5C1 17.433 2.567 19 4.5 19H17.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    {weather?.weather[0]?.main === 'Rain' && (
                                        <>
                                            <path d="M9 22L11 18" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2" className="animate-bounce" />
                                            <path d="M13 22L15 18" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 2" className="animate-bounce" style={{ animationDelay: '0.2s' }} />
                                        </>
                                    )}
                                </svg>
                            </div>
                            <div>
                                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-base-content to-base-content/40">{Math.round(weather?.main?.temp)}°C</div>
                                <div className="text-[10px] text-secondary font-bold uppercase tracking-wider">{weather?.weather[0]?.description}</div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 items-end">
                            <div className="text-[10px] text-base-content/60 font-mono">
                                <span className="text-base-content/40">WIND</span> {weather?.wind?.speed}m/s
                            </div>
                            <div className="text-[10px] text-base-content/60 font-mono">
                                <span className="text-base-content/40">HUM</span> {weather?.main?.humidity}%
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Radar Sweep Effect */}
            <div className="w-full h-1 bg-base-content/5 rounded-full overflow-hidden relative mt-4">
                <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-transparent via-primary to-transparent animate-[scan_2s_ease-in-out_infinite]"></div>
            </div>

            <style>{`
                @keyframes scan {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(300%); }
                }
            `}</style>
        </div>
    );
};

export default CyberWeather;
