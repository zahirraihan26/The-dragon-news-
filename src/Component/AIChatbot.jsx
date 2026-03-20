import React, { useState, useEffect, useRef } from 'react';

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { sender: 'AI', text: 'NEXUS Core initialized. How may I route your datastreams today?' }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userText = input.trim();
        setMessages(prev => [...prev, { sender: 'User', text: userText }]);
        setInput('');

        // Mock AI Thinking time
        setTimeout(() => {
            let aiResponse = "Processing query...";
            const lowerText = userText.toLowerCase();

            if (lowerText.includes("hello") || lowerText.includes("hi")) {
                aiResponse = "Greetings, Operator. The network is stable.";
            } else if (lowerText.includes("news")) {
                aiResponse = "I can fetch the latest neural datastreams for you. Check the main dashboard or use the global search.";
            } else if (lowerText.includes("weather")) {
                aiResponse = "Connecting to meteorological satellites... Atmospheric conditions are sub-optimal outside the grid.";
            } else if (lowerText.includes("who are you")) {
                aiResponse = "I am NEXUS, the centralized artificial intelligence governing this network.";
            } else {
                aiResponse = "Query logged. The core algorithm is analyzing your request. Stand by for future updates.";
            }

            setMessages(prev => [...prev, { sender: 'AI', text: aiResponse }]);
        }, 1200);
    }

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 w-80 sm:w-96 h-[450px] glass-panel bg-black/80 backdrop-blur-xl border border-primary/30 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.5)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 fade-in duration-300">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border-b border-white/10 p-4 flex justify-between items-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[50px] mix-blend-screen pointer-events-none"></div>
                        <div className="flex items-center gap-3 relative z-10">
                            <div className="relative">
                                <div className="w-10 h-10 rounded-full border border-primary/50 bg-black/50 flex items-center justify-center p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full text-primary animate-pulse">
                                        <path d="M16.5 7.5h-9v9h9v-9z" />
                                        <path fillRule="evenodd" d="M8.25 2.25A.75.75 0 019 3v.75h2.25V3a.75.75 0 011.5 0v.75H15V3a.75.75 0 011.5 0v.75h.75a3 3 0 013 3v.75H21A.75.75 0 0121 9h-.75v2.25H21a.75.75 0 010 1.5h-.75V15H21a.75.75 0 010 1.5h-.75v.75a3 3 0 01-3 3h-.75V21a.75.75 0 01-1.5 0v-.75h-2.25V21a.75.75 0 01-1.5 0v-.75H9V21a.75.75 0 01-1.5 0v-.75h-.75a3 3 0 01-3-3v-.75H3A.75.75 0 013 15h.75v-2.25H3a.75.75 0 010-1.5h.75V9H3A.75.75 0 013 7.5h.75V6.75a3 3 0 013-3h.75V3a.75.75 0 01.75-.75zM6 6.75A1.5 1.5 0 017.5 5.25h9a1.5 1.5 0 011.5 1.5v9a1.5 1.5 0 01-1.5 1.5h-9a1.5 1.5 0 01-1.5-1.5v-9zm6 6.75a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="absolute top-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-black animate-ping"></div>
                            </div>
                            <div>
                                <h3 className="font-bold text-white tracking-wide text-sm">NEXUS Core</h3>
                                <p className="text-xs text-primary font-mono tracking-widest">ONLINE</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white relative z-10 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 p-4 overflow-y-auto custom-scrollbar flex flex-col gap-4">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.sender === 'User' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm ${
                                    msg.sender === 'User' 
                                        ? 'bg-primary/20 border border-primary/30 text-white rounded-br-none shadow-[0_5px_15px_rgba(6,182,212,0.1)]' 
                                        : 'bg-white/5 border border-white/10 text-gray-300 rounded-tl-none font-mono leading-relaxed' 
                                }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-3 border-t border-white/10 bg-black/40">
                        <form onSubmit={handleSend} className="relative flex items-center">
                            <input 
                                type="text" 
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Transmit command..." 
                                className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-full py-2.5 pl-4 pr-12 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-sm"
                            />
                            <button type="submit" disabled={!input.trim()} className="absolute right-2 p-1.5 bg-primary rounded-full text-black hover:bg-secondary hover:text-white transition-colors disabled:opacity-50 blur-0">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 turn-right">
                                    <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Toggle Button */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className={`relative group flex items-center justify-center w-14 h-14 rounded-full bg-primary text-black shadow-[0_0_20px_rgba(6,182,212,0.6)] hover:shadow-[0_0_30px_rgba(6,182,212,0.9)] hover:scale-110 transition-all duration-300 z-50 ${isOpen ? 'rotate-90 bg-secondary shadow-[0_0_20px_rgba(139,92,246,0.6)]' : ''}`}
            >
                <div className="absolute inset-0 rounded-full border-2 border-white/30 animate-ping opacity-75"></div>
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
                    </svg>
                )}
            </button>
        </div>
    );
};

export default AIChatbot;
