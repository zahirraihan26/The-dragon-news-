import React from 'react';

const AIFooter = () => {
    return (
        <footer className="footer bg-[#050505] text-gray-300 p-10 border-t border-white/10 relative overflow-hidden mt-auto">
            {/* Background flares */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10 w-11/12">
                <nav className="col-span-1 md:col-span-1 flex flex-col gap-4">
                    <header className="footer-title text-white opacity-100 font-bold mb-4">Neural Hub</header> 
                    <a className="link link-hover text-gray-400 hover:text-primary transition-colors">Core Architecture</a>
                    <a className="link link-hover text-gray-400 hover:text-primary transition-colors">Data Ingestion</a>
                    <a className="link link-hover text-gray-400 hover:text-primary transition-colors">Model Training</a>
                    <a className="link link-hover text-gray-400 hover:text-primary transition-colors">API Documentation</a>
                </nav> 
                <nav className="col-span-1 md:col-span-1 flex flex-col gap-4">
                    <header className="footer-title text-white opacity-100 font-bold mb-4">Integrations</header> 
                    <a className="link link-hover text-gray-400 hover:text-primary transition-colors">OpenAI Link</a>
                    <a className="link link-hover text-gray-400 hover:text-primary transition-colors">Brain-Computer UI</a>
                    <a className="link link-hover text-gray-400 hover:text-primary transition-colors">Quantum Modules</a>
                </nav> 
                <nav className="col-span-1 md:col-span-1 flex flex-col gap-4">
                    <header className="footer-title text-white opacity-100 font-bold mb-4">Legal Protocol</header> 
                    <a className="link link-hover text-gray-400 hover:text-primary transition-colors">Terms of Service</a>
                    <a className="link link-hover text-gray-400 hover:text-primary transition-colors">Privacy Shield</a>
                    <a className="link link-hover text-gray-400 hover:text-primary transition-colors">Data Compliance</a>
                </nav> 
                <form className="col-span-1 md:col-span-1">
                    <header className="footer-title text-white opacity-100 font-bold mb-4">Subscribe to the Nexus</header> 
                    <fieldset className="form-control w-80">
                        <label className="label mb-2">
                            <span className="text-gray-400 text-sm">Enter the neural network newsletter.</span>
                        </label> 
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input bg-white/5 border border-white/10 w-full pr-16 text-white focus:outline-none focus:border-primary/50 rounded-lg" /> 
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none bg-primary/20 border-primary/50 text-primary hover:bg-primary/40 rounded-r-lg">Connect</button>
                        </div>
                    </fieldset>
                </form>
            </div>
            
            <div className="w-11/12 mx-auto border-t border-white/10 mt-10 pt-6 flex justify-between items-center text-xs text-gray-500 relative z-10">
                <p>Copyright © 2026 - All rights reserved by Core AI Industries Ltd.</p>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-success"></span>
                    <span>System Status: Optimal</span>
                </div>
            </div>
        </footer>
    );
};

export default AIFooter;
