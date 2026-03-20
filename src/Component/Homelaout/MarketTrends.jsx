import React from 'react';

const MarketTrends = () => {
    return (
        <div className="glass-panel neon-border p-5 mt-8">
            <h2 className='font-bold text-lg mb-4 text-gray-200 border-b border-primary/20 pb-3 flex justify-between items-center'>
                <span>AI Market Trends</span>
                <span className="text-[10px] text-primary uppercase border border-primary/30 px-2 py-0.5 rounded-full">Live</span>
            </h2>
            
            <div className="flex flex-col gap-3">
                {/* Trend 1 */}
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm font-bold text-gray-300">OpenAI (OAI)</p>
                        <p className="text-xs text-gray-500">Volume: 124K</p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm font-bold text-success drop-shadow-[0_0_5px_rgba(34,197,94,0.4)]">+4.2%</p>
                        <div className="h-6 w-16 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMjAgTDEwIDEwIEwyMCAxNSBMNDAgMCBMNTAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIyYzU1ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')] bg-no-repeat bg-center opacity-80 mt-1"></div>
                    </div>
                </div>
                
                {/* Trend 2 */}
                <div className="flex justify-between items-center border-t border-white/5 pt-3">
                    <div>
                        <p className="text-sm font-bold text-gray-300">Nvidia (NVDA)</p>
                        <p className="text-xs text-gray-500">Volume: 98K</p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm font-bold text-success drop-shadow-[0_0_5px_rgba(34,197,94,0.4)]">+1.8%</p>
                        <div className="h-6 w-16 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMjAgTDIwIDEwIEwzMCA1IEw0MCAxMCBMNTAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIyYzU1ZSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')] bg-no-repeat bg-center opacity-80 mt-1"></div>
                    </div>
                </div>

                {/* Trend 3 */}
                <div className="flex justify-between items-center border-t border-white/5 pt-3">
                    <div>
                        <p className="text-sm font-bold text-gray-300">Meta AI</p>
                        <p className="text-xs text-gray-500">Volume: 45K</p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm font-bold text-error drop-shadow-[0_0_5px_rgba(239,68,68,0.4)]">-0.5%</p>
                        <div className="h-6 w-16 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSIyMCI+PHBhdGggZD0iTTAgMTAgTDEwIDIwIEwzMCA1IEw0MCAyMCBMNTAgMTUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2VmNDQ0NCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+')] bg-no-repeat bg-center opacity-80 mt-1"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MarketTrends;
