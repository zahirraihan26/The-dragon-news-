import React, { useState, useEffect } from 'react';

const AITerminalLogs = () => {
    const [logs, setLogs] = useState([
        "[SYS] Initializing Core AI Engine...",
        "[SYS] Neural network connection established.",
    ]);

    const fakeLogs = [
        "[NET] Fetching latest global data streams...",
        "[AI] Analyzing sentiment across tech sectors.",
        "[SEC] Firewall protocols operating at nominal capacity.",
        "[DATA] Ingesting 4.2TB of structured news algorithms.",
        "[AI] Quantum model extrapolation complete.",
        "[SYS] Latency verified at 12ms. Optimal.",
        "[SYS] User heuristics successfully compiled.",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setLogs(prevLogs => {
                const newLog = fakeLogs[Math.floor(Math.random() * fakeLogs.length)];
                const updatedLogs = [...prevLogs, newLog];
                if (updatedLogs.length > 5) {
                    updatedLogs.shift();
                }
                return updatedLogs;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="glass-panel p-4 h-full border border-primary/20 bg-black/40 font-mono text-xs overflow-hidden relative">
            <h3 className="text-primary font-bold mb-2 flex items-center gap-2 border-b border-primary/20 pb-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-ping"></span>
                Terminal // Live Feed
            </h3>
            <div className="flex flex-col gap-1 text-gray-400">
                {logs.map((log, index) => (
                    <div key={index} className="animate-fade-in truncate">
                        <span className="text-secondary mr-2">{'>'}</span> 
                        {log}
                    </div>
                ))}
            </div>
            {/* Scanline overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50"></div>
        </div>
    );
};

export default AITerminalLogs;
