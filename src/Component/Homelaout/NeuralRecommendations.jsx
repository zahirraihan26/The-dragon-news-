import React from 'react';
import { FaBrain, FaChevronRight } from "react-icons/fa";

const Recommendations = [
    { id: 1, title: "Quantum Supremacy Achieved by New Chip", match: "98%" },
    { id: 2, title: "Autonomous Vehicles Surpass Safety Guidelines", match: "94%" },
    { id: 3, title: "Neurolink Trials Show Promising Human-PC Interaction", match: "89%" },
];

const NeuralRecommendations = () => {
    return (
        <div className="glass-panel neon-border p-5 mt-8 relative overflow-hidden group">
            <div className="absolute -left-10 -top-10 w-24 h-24 bg-secondary/20 blur-[30px] rounded-full pointer-events-none group-hover:bg-secondary/30 transition-all"></div>
            
            <h2 className='font-bold text-lg mb-4 text-gray-200 border-b border-primary/20 pb-3 flex items-center gap-2'>
                <FaBrain className="text-secondary drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]" />
                <span className="glow-text">Neural Picks</span>
            </h2>
            
            <div className="flex flex-col gap-3">
                {Recommendations.map((item) => (
                    <div key={item.id} className="p-3 rounded-lg bg-white/5 border border-white/10 hover:border-primary/40 hover:bg-primary/5 transition-all cursor-pointer group/item">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                                Match: {item.match}
                            </span>
                            <FaChevronRight className="text-gray-600 text-[10px] group-hover/item:text-primary transition-colors" />
                        </div>
                        <h3 className="text-sm font-medium text-gray-300 leading-tight group-hover/item:text-white transition-colors line-clamp-2">
                            {item.title}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NeuralRecommendations;
