import React from 'react';
import Navbar from '../Component/Navbar';
import AIFooter from '../Component/AIFooter';
import AIAssistant from '../Component/AIAssistant';

const Career = () => {
    return (
        <div className="relative min-h-screen overflow-x-hidden text-gray-200 selection:bg-primary/30 selection:text-white pb-0 neon-grid flex flex-col">
            {/* Ambient Background Glows */}
            <div className="fixed top-[-10%] left-[20%] w-[50%] h-[50%] bg-secondary/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
            <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-500/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
            
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
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-widest mb-4 shadow-[0_0_10px_rgba(139,92,246,0.2)]">
                            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                            Active Recruitment Active
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
                            Join The <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-pink-500 drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">Network</span>
                        </h1>
                        <p className="text-lg text-gray-400 leading-relaxed font-light">
                            Help us build the next generation of predictive data models. We are actively seeking the brightest minds to optimize our cybernetic infrastructure.
                        </p>
                    </div>

                    <div className="w-full max-w-4xl flex flex-col gap-6">
                        {/* Job Listing 1 */}
                        <div className="glass-panel p-6 border-l-4 border-l-primary flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-white/10 transition-colors">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">Quantum Algorithm Engineer</h3>
                                <p className="text-sm text-primary mb-3 font-mono">REMOTE // L5-L6 // FULL-TIME</p>
                                <p className="text-gray-400 text-sm max-w-2xl">Design highly optimized O(1) algorithms for our core semantic engine. Must have 5+ years experience tuning neural matrices.</p>
                            </div>
                            <button className="btn btn-outline border-white/20 text-white hover:bg-white/10 mt-4 md:mt-0 px-8 rounded-full">Apply Node</button>
                        </div>

                        {/* Job Listing 2 */}
                        <div className="glass-panel p-6 border-l-4 border-l-secondary flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-white/10 transition-colors">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">Prompt Orchestrator</h3>
                                <p className="text-sm text-secondary mb-3 font-mono">NEW YORK // L4 // FULL-TIME</p>
                                <p className="text-gray-400 text-sm max-w-2xl">Shape the personality and safeguard the alignment of our Language Models. English literature or philosophy background preferred.</p>
                            </div>
                            <button className="btn btn-outline border-white/20 text-white hover:bg-white/10 mt-4 md:mt-0 px-8 rounded-full">Apply Node</button>
                        </div>

                        {/* Job Listing 3 */}
                        <div className="glass-panel p-6 border-l-4 border-l-pink-500 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-white/10 transition-colors">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-1">Neural UI/UX Synthesizer</h3>
                                <p className="text-sm text-pink-500 mb-3 font-mono">LONDON // L3-L5 // PART-TIME</p>
                                <p className="text-gray-400 text-sm max-w-2xl">Bridge the gap between human and machine. Design incredibly immersive, dark-themed, glassmorphic interfaces for our telemetry dashboards.</p>
                            </div>
                            <button className="btn btn-outline border-white/20 text-white hover:bg-white/10 mt-4 md:mt-0 px-8 rounded-full">Apply Node</button>
                        </div>
                    </div>
                </main>
                
                <AIFooter />
            </div>
        </div>
    );
};

export default Career;
