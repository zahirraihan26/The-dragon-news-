import React from 'react';
import Navbar from '../Component/Navbar';
import AIFooter from '../Component/AIFooter';
import AIAssistant from '../Component/AIAssistant';

const About = () => {
    return (
        <div className="relative min-h-screen overflow-x-hidden text-gray-200 selection:bg-primary/30 selection:text-white pb-0 neon-grid flex flex-col">
            {/* Ambient Background Glows */}
            <div className="fixed top-[20%] right-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
            <div className="fixed bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-secondary/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
            
            <AIAssistant />

            <div className="relative z-10 w-full flex flex-col min-h-screen">
                <header>
                    <nav className='w-full border-b border-white/5 bg-base-100/50 backdrop-blur-md sticky top-0 z-50 mb-10'>
                        <div className="w-11/12 mx-auto pt-2">
                           <Navbar></Navbar>
                        </div>
                    </nav>
                </header>
                
                <main className='w-11/12 mx-auto mb-16 flex-grow flex flex-col items-center'>
                    <div className="text-center max-w-3xl mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-4 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                            <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                            System Designation 01
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
                            About The <span className="glow-text">Nexus</span>
                        </h1>
                        <p className="text-lg text-gray-400 leading-relaxed font-light">
                            We are the architects of the new digital frontier. Our neural networks ingest millions of global data streams simultaneously, synthesizing them into actionable, real-time intelligence algorithms.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                        {/* Core Values / Features */}
                        <div className="glass-panel p-8 text-center group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 mx-auto bg-primary/20 rounded-2xl flex items-center justify-center mb-6 border border-primary/40 shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:bg-primary/40 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Quantum Processing</h3>
                            <p className="text-sm text-gray-400">Our servers utilize bleeding-edge quantum array clusters to decode complex events in milliseconds.</p>
                        </div>
                        
                        <div className="glass-panel p-8 text-center group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 mx-auto bg-secondary/20 rounded-2xl flex items-center justify-center mb-6 border border-secondary/40 shadow-[0_0_15px_rgba(139,92,246,0.4)] group-hover:bg-secondary/40 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Unbiased Data</h3>
                            <p className="text-sm text-gray-400">Trained on a perfect 50/50 semantic split, the neural core prevents hallucination and guarantees pure data telemetry.</p>
                        </div>

                        <div className="glass-panel p-8 text-center group hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 mx-auto bg-pink-500/20 rounded-2xl flex items-center justify-center mb-6 border border-pink-500/40 shadow-[0_0_15px_rgba(236,72,153,0.4)] group-hover:bg-pink-500/40 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Global Sync</h3>
                            <p className="text-sm text-gray-400">Deployed across 7 continents, caching petabytes of information securely through zero-knowledge encryption.</p>
                        </div>
                    </div>
                </main>
                
                <AIFooter />
            </div>
        </div>
    );
};

export default About;
