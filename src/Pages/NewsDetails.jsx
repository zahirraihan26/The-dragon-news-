import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router';
import Navbar from '../Component/Navbar';
import RightAsid from '../Component/Homelaout/RightAsid';
import AIFooter from '../Component/AIFooter';
import AIAssistant from '../Component/AIAssistant';
import BackToTop from '../Component/BackToTop';

const NewsDetails = () => {
    const { id } = useParams();
    const [newsData, setNewsData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [isHackerMode, setIsHackerMode] = useState(false);

    // Track Reading Progress
    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            setScrollProgress(scroll * 100);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // We fetch the core news file, then find the specific article
        fetch('/news.json')
            .then(res => res.json())
            .then(data => {
                const article = data.find(item => item._id === id);
                setNewsData(article);
                setLoading(false);
            })
            .catch(err => {
                console.error("Neural fetch failed", err);
                setLoading(false);
            });
    }, [id]);

    return (
        <div className="relative min-h-screen overflow-x-hidden text-gray-200 selection:bg-primary/30 selection:text-white pb-0 neon-grid">
            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary via-secondary to-pink-500 z-[100] transition-all duration-150 ease-out" style={{ width: `${scrollProgress}%` }}></div>

            {/* Ambient Background Glows */}
            <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
            <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 blur-[150px] rounded-full pointer-events-none z-0"></div>

            <AIAssistant />
            <BackToTop />

            <div className="relative z-10 w-full flex flex-col min-h-screen">
                <header>
                    <nav className='w-full border-b border-white/5 bg-base-100/50 backdrop-blur-md sticky top-0 z-50 mb-4'>
                        <div className="w-11/12 mx-auto pt-2">
                            <Navbar></Navbar>
                        </div>
                    </nav>
                </header>

                <main className='w-11/12 mx-auto mt-6 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 flex-grow'>

                    {/* Main Article Content */}
                    <section className='col-span-1 lg:col-span-9'>
                        {loading && (
                            <div className="flex flex-col items-center justify-center p-20 glass-panel neon-border h-96">
                                <span className="loading loading-spinner text-primary loading-lg"></span>
                                <h3 className="mt-4 text-glow font-bold tracking-widest text-primary uppercase text-sm animate-pulse">Establishing Link...</h3>
                            </div>
                        )}

                        {!loading && !newsData && (
                            <div className="glass-panel p-20 text-center border-error/20">
                                <h2 className="text-2xl font-bold text-error">Data Stream Corrupted</h2>
                                <p className="text-gray-400 mt-2">The article you looking for was not found in the neural cache.</p>
                                <Link to="/" className="btn-ai inline-block mt-6 hover:scale-105 transition-transform">Return to Nexus</Link>
                            </div>
                        )}

                        {!loading && newsData && (
                            <div className="glass-panel bg-black/40 border border-white/5 rounded-2xl overflow-hidden p-6 md:p-10 mb-8 max-w-4xl">

                                {/* Article Header */}
                                <div className="mb-8">
                                    <div className="flex flex-wrap items-center gap-4 mb-4 mt-2">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                                            <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                                            Core Database Retrieved
                                        </div>

                                        <button
                                            id="audio-brief-btn"
                                            onClick={(e) => {
                                                const btn = e.currentTarget;
                                                const isPlaying = window.speechSynthesis.speaking;
                                                if (isPlaying) {
                                                    window.speechSynthesis.cancel();
                                                    btn.classList.remove('btn-secondary', 'animate-pulse');
                                                    btn.classList.add('btn-primary');
                                                    btn.querySelector('span').innerText = 'AI Audio Briefing';
                                                } else {
                                                    const text = newsData.title + ". " + newsData.details;
                                                    const utterance = new SpeechSynthesisUtterance(text);
                                                    utterance.rate = 0.95;
                                                    utterance.pitch = 0.8;
                                                    const voices = window.speechSynthesis.getVoices();
                                                    utterance.voice = voices.find(v => v.lang === 'en-US' && v.name.includes("Google")) || voices[0];

                                                    utterance.onend = () => {
                                                        btn.classList.remove('btn-secondary', 'animate-pulse');
                                                        btn.classList.add('btn-primary');
                                                        btn.querySelector('span').innerText = 'AI Audio Briefing';
                                                    };

                                                    window.speechSynthesis.speak(utterance);
                                                    btn.classList.remove('btn-primary');
                                                    btn.classList.add('btn-secondary', 'animate-pulse');
                                                    btn.querySelector('span').innerText = 'Halt Briefing';
                                                }
                                            }}
                                            className="btn btn-sm rounded-full btn-outline border-primary/50 btn-primary text-white hover:bg-primary/20 shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                                            </svg>
                                            <span>AI Audio Briefing</span>
                                        </button>

                                         {/* Hacker Mode Toggle */}
                                         <button 
                                            onClick={() => setIsHackerMode(!isHackerMode)}
                                            className={`btn btn-sm rounded-full btn-outline border-success/50 text-success hover:bg-success/20 transition-all ${isHackerMode ? 'bg-success/20 shadow-[0_0_15px_rgba(74,222,128,0.5)] border-success animate-pulse' : ''}`}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                            </svg>
                                            Hacker Mode
                                        </button>
                                    </div>
                                    <h1 className={`text-2xl md:text-4xl lg:text-5xl font-black leading-tight mb-6 mt-2 ${isHackerMode ? 'text-success font-mono drop-shadow-[0_0_10px_rgba(74,222,128,0.8)]' : 'text-white'}`}>
                                        {newsData.title}
                                    </h1>

                                    <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                                        <img src={newsData.author?.img} alt="Author" className="w-14 h-14 rounded-full border-2 border-primary/40 shadow-[0_0_15px_rgba(6,182,212,0.3)]" />
                                        <div>
                                            <p className="font-bold text-gray-200">{newsData.author?.name || "AI Agent"}</p>
                                            <p className="text-sm text-gray-500">
                                                Published: {new Date(newsData.author?.published_date).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Hero Image */}
                                <div className="mb-10 relative group rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                                    <div className="absolute inset-x-5 inset-y-3 bg-gradient-to-t from-base-100 via-transparent to-transparent z-0 rounded-xl"></div>
                                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none rounded-xl transition-all duration-500 group-hover:bg-primary/20"></div>
                                    <img src={newsData.image_url} alt="Cover" className="w-full h-auto max-h-[500px] object-cover relative z-[-1] border border-white/5" />
                                </div>

                                {/* Article Body */}
                                <div className={`leading-loose text-lg pb-10 border-b border-white/10 ${isHackerMode ? 'font-mono text-success bg-black p-8 rounded-xl border border-success/30 shadow-[inset_0_0_20px_rgba(74,222,128,0.1)]' : 'text-gray-300 font-light'}`}>
                                    {newsData.details.split('\n').map((paragraph, idx) => (
                                        <p key={idx} className="mb-6">{paragraph}{isHackerMode && idx === newsData.details.split('\n').length - 1 && <span className="animate-pulse bg-success w-3 h-5 inline-block ml-1 align-sub"></span>}</p>
                                    ))}
                                </div>

                                {/* Nav Actions */}
                                <div className="flex justify-between items-center mt-8 mb-12 border-b border-white/10 pb-10">
                                    <Link to="/" className="btn btn-outline border-white/20 text-white hover:bg-white/10 hover:border-white/40 rounded-full px-8 py-3 transition-all">
                                        &larr; Back to Dashboard
                                    </Link>
                                    <button className="btn-ai py-3 px-8 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                                        Share Datastream
                                    </button>
                                </div>

                                {/* AI Community Telemetry (Comments Section) */}
                                <div className="mt-8 bg-black/40 p-8 rounded-2xl border border-white/5 shadow-inner">
                                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                                        </svg>
                                        Node Telemetry (Discussion)
                                    </h3>

                                    <div className="space-y-6">
                                        {/* Mock Comment */}
                                        <div className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-secondary/30 transition-colors">
                                            <div className="w-10 h-10 rounded-full bg-secondary/20 flex flex-shrink-0 items-center justify-center font-bold text-secondary text-sm border border-secondary/50">
                                                NX
                                            </div>
                                            <div>
                                                <div className="flex gap-2 items-center mb-1">
                                                    <h5 className="font-bold text-gray-200">Sector Commander</h5>
                                                    <span className="text-xs text-gray-500 font-mono">14m ago</span>
                                                </div>
                                                <p className="text-gray-400 text-sm">I cross-referenced this datastream with off-grid servers. The analysis holds up. Re-routing priority allocation now.</p>
                                                <div className="flex gap-4 mt-2 text-xs text-gray-500 font-bold">
                                                    <button className="hover:text-success transition-colors">ENDORSE (24)</button>
                                                    <button className="hover:text-error transition-colors">FLAG</button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Mock Comment */}
                                        <div className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-primary/30 transition-colors">
                                            <div className="w-10 h-10 rounded-full bg-primary/20 flex flex-shrink-0 items-center justify-center font-bold text-primary text-sm border border-primary/50">
                                                Q3
                                            </div>
                                            <div>
                                                <div className="flex gap-2 items-center mb-1">
                                                    <h5 className="font-bold text-gray-200">Quantum Node 34</h5>
                                                    <span className="text-xs text-gray-500 font-mono">2h ago</span>
                                                </div>
                                                <p className="text-gray-400 text-sm">There is a minor discrepancy in the probability vectors mentioned in paragraph 3. Applying patch algorithm to compensate.</p>
                                                <div className="flex gap-4 mt-2 text-xs text-gray-500 font-bold">
                                                    <button className="hover:text-success transition-colors">ENDORSE (191)</button>
                                                    <button className="hover:text-error transition-colors">FLAG (2)</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Add Comment */}
                                    <div className="mt-8 flex gap-4">
                                        <input type="text" placeholder="Transmit your analysis to the network..." className="input w-full bg-black/40 border-white/10 text-white focus:border-secondary focus:outline-none" />
                                        <button className="btn btn-secondary shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.6)]">Transmit</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </section>

                    {/* Right Sidebar */}
                    <aside className="col-span-1 lg:col-span-3 sticky top-24 h-fit max-h-[calc(100vh-120px)] overflow-y-auto pl-2 custom-scrollbar">
                        <RightAsid />
                    </aside>
                </main>

                <AIFooter></AIFooter>
            </div>
        </div>
    );
};

export default NewsDetails;
