import React, { useEffect, useState, useRef } from 'react';
import Globe from 'react-globe.gl';

const GlobalHologram = () => {
    const globeEl = useRef();
    const [arcsData, setArcsData] = useState([]);
    
    useEffect(() => {
        // Generate random mock datastream nodes to visualize
        const N = 20;
        const arcs = [...Array(N).keys()].map(() => ({
          startLat: (Math.random() - 0.5) * 180,
          startLng: (Math.random() - 0.5) * 360,
          endLat: (Math.random() - 0.5) * 180,
          endLng: (Math.random() - 0.5) * 360,
          color: ['#06b6d4', '#8b5cf6', '#ec4899'][Math.floor(Math.random() * 3)]
        }));
        
        setArcsData(arcs);

        // Auto-spin logic
        if (globeEl.current) {
            globeEl.current.controls().autoRotate = true;
            globeEl.current.controls().autoRotateSpeed = 1.5;
            globeEl.current.pointOfView({ altitude: 2.5 });
        }
    }, []);

    return (
        <div className="w-full flex-col h-[500px] glass-panel bg-black/50 border border-primary/20 rounded-3xl overflow-hidden relative flex items-center justify-center -mt-8 mb-12 shadow-[0_0_50px_rgba(6,182,212,0.15)] group">
            
            {/* Ambient Lighting Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none group-hover:bg-primary/30 transition-all duration-1000"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-64 h-64 bg-secondary/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>

            {/* Overlays */}
            <div className="absolute top-6 left-8 z-10 pointer-events-none">
                <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-secondary mb-1 translate-y-2 group-hover:translate-y-0 transition-transform">Global Data Vectors</h2>
                <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-error animate-ping mt-1"></span>
                    <p className="text-sm font-mono text-gray-400 uppercase tracking-widest mt-1">Live Intercept</p>
                </div>
            </div>
            
            {/* The 3D Globe */}
             <div className="opacity-90 hover:opacity-100 transition-opacity w-full h-[500px] flex justify-center items-center cursor-move">
                <Globe
                    ref={globeEl}
                    width={800}
                    height={500}
                    backgroundColor="rgba(0,0,0,0)"
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                    arcsData={arcsData}
                    arcColor={'color'}
                    arcDashLength={0.4}
                    arcDashGap={4}
                    arcDashInitialGap={() => Math.random() * 5}
                    arcDashAnimateTime={2500}
                    arcStroke={0.8}
                    atmosphereColor="#06b6d4"
                    atmosphereAltitude={0.25}
                />
            </div>

            {/* Fake Telemetry Panel overlay */}
            <div className="absolute bottom-6 right-8 z-10 hidden md:block text-right pointer-events-none">
                <div className="p-3 bg-black/40 border border-white/10 rounded-xl backdrop-blur-md">
                    <p className="text-xs text-primary font-mono mb-1">Active Neural Nodes: <span className="text-white">4,281</span></p>
                    <p className="text-xs text-secondary font-mono mb-1">Throughput: <span className="text-white">82.4 PHz</span></p>
                    <p className="text-xs text-error font-mono flex items-center justify-end gap-1"><span className="animate-pulse">●</span> Processing Data...</p>
                </div>
            </div>
        </div>
    );
};

export default GlobalHologram;
