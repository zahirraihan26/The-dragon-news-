import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden selection:bg-error/30">
            {/* Massive Ambient Glitch Orbs */}
            <div className="absolute top-1/4 left-1/4 w-[50vh] h-[50vh] bg-error/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[50vh] h-[50vh] bg-red-800/20 blur-[150px] rounded-full mix-blend-screen pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="relative z-10 text-center glass-panel neon-border border-error/30 p-12 md:p-24 max-w-3xl border-b-2 border-b-error/60 backdrop-blur-2xl">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-error to-transparent opacity-50"></div>
                
                <h1 className="text-8xl md:text-[150px] font-black text-transparent bg-clip-text bg-gradient-to-br from-error via-red-500 to-black drop-shadow-[0_0_50px_rgba(239,68,68,0.5)] leading-none mb-4">
                    404
                </h1>
                
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 uppercase tracking-widest">
                    Neural Link <span className="text-error border-b border-error/50 pb-1">Severed</span>
                </h2>
                
                <p className="text-gray-400 text-lg max-w-lg mx-auto mb-10 leading-relaxed font-mono">
                    &gt; DATA_STREAM_NOT_FOUND <br/>
                    &gt; ERR_CODE_HTTP_404 <br/>
                    <br/>
                    The coordinates you requested do not exist within our current sector of the neural network. The datastream may have been corrupted or redirected.
                </p>
                
                <Link to="/" className="btn bg-error/20 hover:bg-error/40 border border-error/50 text-white rounded-full px-10 py-4 shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.6)] transition-all duration-300 group hover:scale-105 inline-flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-error group-hover:animate-ping"></span>
                    Reboot Neural Connection (Back Home)
                </Link>
            </div>
            
            {/* Scanlines Overlay purely for aesthetic */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-[0.15]"></div>
        </div>
    );
};

export default ErrorPage;
