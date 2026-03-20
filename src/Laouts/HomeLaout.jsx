import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Component/Header';
import LatestNews from '../Component/LatestNews';
import Navbar from '../Component/Navbar';
import LeftAside from '../Component/Homelaout/LeftAside';
import RightAsid from '../Component/Homelaout/RightAsid';
import AIAssistant from '../Component/AIAssistant';
import AIHero from '../Component/AIHero';
import AIFooter from '../Component/AIFooter';

const HomeLaout = () => {
    return (
        <div className="relative min-h-screen overflow-x-hidden text-gray-200 selection:bg-primary/30 selection:text-white pb-0 neon-grid">
            {/* Ambient Background Glows */}
            <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/15 blur-[120px] rounded-full pointer-events-none z-0"></div>
            <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/15 blur-[120px] rounded-full pointer-events-none z-0"></div>
            
            <AIAssistant />

            <div className="relative z-10 w-full flex flex-col min-h-screen">
                <header>
                    <Header></Header>
                    <section className='w-11/12 mx-auto my-3'>
                        <LatestNews></LatestNews>
                    </section>
                    <nav className='w-11/12 mx-auto mt-5 mb-2 relative z-50'>
                        <Navbar></Navbar>
                    </nav>
                </header>
                
                <AIHero></AIHero>

                <main className='w-11/12 mx-auto mt-6 mb-16 grid grid-cols-12 gap-8 flex-grow'>
                    <aside className='col-span-3 sticky top-28 h-fit'>
                        <LeftAside></LeftAside>
                    </aside >

                    <section className='Main col-span-6'>
                        <Outlet></Outlet>
                    </section>

                    <aside className='col-span-3 sticky top-28 h-fit'>
                        <RightAsid></RightAsid>
                    </aside>
                </main>
                
                <AIFooter></AIFooter>
            </div>
        </div>
    );
};

export default HomeLaout;