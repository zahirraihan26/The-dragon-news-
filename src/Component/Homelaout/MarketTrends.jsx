import React from 'react';
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { time: '00:00', value: 400 },
  { time: '04:00', value: 300 },
  { time: '08:00', value: 550 },
  { time: '12:00', value: 480 },
  { time: '16:00', value: 700 },
  { time: '20:00', value: 650 },
  { time: '24:00', value: 890 },
];

const data2 = [
  { time: 'Mon', active: 30 },
  { time: 'Tue', active: 45 },
  { time: 'Wed', active: 68 },
  { time: 'Thu', active: 52 },
  { time: 'Fri', active: 95 },
  { time: 'Sat', active: 110 },
  { time: 'Sun', active: 85 },
];

const MarketTrends = () => {
    return (
        <div className="glass-panel p-5 mb-6 pb-8 border-t-2 border-t-secondary relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 blur-[40px] rounded-full"></div>
            
            <h3 className="font-bold text-lg mb-4 text-base-content flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Network Activity Metrics
            </h3>
            
            <div className="space-y-6">
                
                {/* Chart 1: Global Datastream Flow */}
                <div className="border border-base-content/5 bg-base-100/40 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-3">
                        <h4 className="text-sm font-semibold text-base-content/70">Global Datastream Flow</h4>
                        <span className="text-xs text-success bg-success/10 px-2 py-0.5 rounded border border-success/20">+14.2%</span>
                    </div>
                    
                    <div className="h-32 w-full mt-2">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.5}/>
                                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'rgba(var(--color-base-100), 0.9)', border: '1px solid rgba(var(--color-base-content), 0.1)', borderRadius: '8px' }}
                                    itemStyle={{ color: '#8b5cf6' }}
                                />
                                <Area type="monotone" dataKey="value" stroke="#8b5cf6" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Chart 2: Active Neural Nodes */}
                <div className="border border-base-content/5 bg-base-100/40 rounded-xl p-4">
                    <div className="flex justify-between items-center mb-3">
                        <h4 className="text-sm font-semibold text-base-content/70">Active Node Clusters</h4>
                        <span className="text-xs text-warning bg-warning/10 px-2 py-0.5 rounded border border-warning/20">Spiking</span>
                    </div>
                    
                    <div className="h-32 w-full mt-2">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data2}>
                                <defs>
                                    <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.5}/>
                                        <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <Tooltip 
                                    contentStyle={{ backgroundColor: 'rgba(var(--color-base-100), 0.9)', border: '1px solid rgba(var(--color-base-content), 0.1)', borderRadius: '8px' }}
                                    itemStyle={{ color: '#06b6d4' }}
                                />
                                <Area type="monotone" dataKey="active" stroke="#06b6d4" strokeWidth={2} fillOpacity={1} fill="url(#colorActive)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

            </div>

            <button className="btn btn-outline border-base-content/10 text-base-content/50 hover:text-base-content hover:bg-base-content/10 w-full mt-6 rounded-lg text-sm transition-colors">
                View Deep Analytics
            </button>
        </div>
    );
};

export default MarketTrends;
