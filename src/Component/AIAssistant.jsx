import React, { useState } from 'react';

const AIAssistant = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
            {/* Chat Box */}
            <div className={`transition-all duration-500 origin-bottom-right ${isOpen ? 'scale-100 opacity-100 mb-4' : 'scale-0 opacity-0 h-0 w-0 overflow-hidden'}`}>
                <div className="w-80 h-96 glass-panel neon-border flex flex-col bg-base-100/80">
                    <div className="flex justify-between items-center p-4 border-b border-white/10 bg-gradient-to-r from-primary/20 to-transparent rounded-t-2xl">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(6,182,212,1)]"></div>
                            <span className="font-semibold text-gray-200 tracking-wide">Core AI Assistant</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                    
                    <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3">
                        <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-3 text-sm text-gray-300 w-[85%]">
                            Greetings! I am Core AI. I've curated the latest tech news for you today. How can I assist you?
                        </div>
                        <div className="bg-primary/20 border border-primary/30 rounded-2xl rounded-tr-none p-3 text-sm text-gray-200 w-[85%] self-end">
                            Can you summarize the top story?
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-3 text-sm text-gray-300 w-[85%]">
                            <span className="glow-text font-semibold flex items-center gap-1 mb-1">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
                                Processing...
                            </span>
                            Absolutely. The top story relates to OpenAI's new logic advancements...
                        </div>
                    </div>
                    
                    <div className="p-3 border-t border-white/10">
                        <div className="flex items-center bg-white/5 border border-white/10 rounded-full px-4 py-2">
                            <input type="text" placeholder="Ask AI..." className="bg-transparent border-none outline-none text-sm text-white w-full placeholder-gray-500" />
                            <button className="text-primary hover:text-secondary transition-colors ml-2 drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Action Button */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.6)] hover:shadow-[0_0_30px_rgba(139,92,246,0.8)] transition-all duration-300 hover:scale-110 border-2 border-white/20 group"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white group-hover:animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            </button>
        </div>
    );
};

export default AIAssistant;
