import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar';
import AIAssistant from '../Component/AIAssistant';
import AIHero from '../Component/AIHero';
import AIFooter from '../Component/AIFooter';
import AIChatbot from '../Component/AIChatbot';
import GlobalHologram from '../Component/GlobalHologram';

// Dashboard Widgets
import SystemStatus from '../Component/Homelaout/SystemStatus';
import MarketTrends from '../Component/Homelaout/MarketTrends';
import AIAudioBriefing from '../Component/Homelaout/AIAudioBriefing';
import AITerminalLogs from '../Component/Homelaout/AITerminalLogs';
import HorizontalCategories from '../Component/Homelaout/HorizontalCategories';
import BackToTop from '../Component/BackToTop';
import LiveStatsLayer from '../Component/Homelaout/LiveStatsLayer';

const HomeLaout = () => {
    return (
        <div className="relative min-h-screen overflow-x-hidden text-gray-200 selection:bg-primary/30 selection:text-white pb-0 neon-grid">
            {/* Ambient Background Glows */}
            <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/15 blur-[120px] rounded-full pointer-events-none z-0"></div>
            <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/15 blur-[120px] rounded-full pointer-events-none z-0"></div>
            
            <AIAssistant />
            <BackToTop />
            <AIChatbot />

            <div className="relative z-10 w-full flex flex-col min-h-screen">
                <header>
                    <nav className='w-full border-b border-white/5 bg-base-100/50 backdrop-blur-md sticky top-0 z-50 mb-4'>
                        <div className="w-11/12 mx-auto pt-2">
                           <Navbar></Navbar>
                        </div>
                    </nav>
                </header>
                
                <AIHero></AIHero>

                <main className='w-11/12 mx-auto mt-6 mb-16 flex flex-col gap-2 flex-grow'>
                    
                    {/* 3D Global Data Visualization */}
                    <GlobalHologram />

                    {/* Top Dashboard Analytics Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                        <SystemStatus />
                        <MarketTrends />
                        <AIAudioBriefing />
                        <AITerminalLogs />
                    </div>

                    {/* Dashboard Upper Layer - Live Stats */}
                    <LiveStatsLayer />

                    {/* Horizontal Categories */}
                    <HorizontalCategories />

                    {/* Main News Data Stream (Full Width Grid) */}
                    <section className='w-full'>
                        <Outlet></Outlet>
                    </section>
                </main>
                
                <AIFooter></AIFooter>
            </div>
        </div>
    );
};

export default HomeLaout;