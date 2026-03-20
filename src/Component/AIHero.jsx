import React from 'react';

const AIHero = () => {
    return (
        <div className="w-11/12 mx-auto mt-2 mb-8 relative rounded-3xl overflow-hidden glass-panel border border-primary/20 group">
            <div className="absolute inset-0 bg-gradient-to-r from-base-100 via-base-100/90 to-transparent z-10 w-2/3"></div>
            
            {/* Background Graphic */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-40 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 blur-[80px] rounded-full mix-blend-screen group-hover:bg-primary/30 transition-all duration-700"></div>
                <div className="w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_#0a0a0a_100%),url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggZD0iTTIwIDAgTDIwIDQwIE0wIDIwIEw0MCAyMCIgc3Ryb2tlPSJyZ2JhKDYsIDE4MiwgMjEyLCAwLjE1KSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIi8+PC9zdmc+')] bg-center bg-cover"></div>
            </div>

            <div className="relative z-20 px-10 py-16 md:py-24 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-6">
                    <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                    Neural Network Active
                </div>
                
                <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 drop-shadow-lg">
                    Welcome to the <br />
                    <span className="glow-text">Next Generation</span> of News
                </h1>
                
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    Experience journalism curated, analyzed, and delivered by state-of-the-art Core AI models. Real-time insights, zero latency.
                </p>
                
                <div className="flex flex-wrap gap-4">
                    <button className="btn-ai py-4 px-10 rounded-full text-lg shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                        Initiate Feed
                    </button>
                    <button className="btn btn-outline border-white/20 text-white hover:bg-white/10 hover:border-white/40 rounded-full px-8 py-4 transition-all">
                        Learn Systems
                    </button>
                </div>
            </div>
            
            {/* Data Stream Decoration */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
        </div>
    );
};

export default AIHero;
