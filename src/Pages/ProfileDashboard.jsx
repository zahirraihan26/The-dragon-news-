import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { BookmarkContext } from '../Provider/BookmarkProvider';
import Navbar from '../Component/Navbar';
import AIFooter from '../Component/AIFooter';
import AIAssistant from '../Component/AIAssistant';
import NewsCard from '../Component/NewsCard';
import { Navigate } from 'react-router';

const ProfileDashboard = () => {
    const { user, logout } = useContext(AuthContext);
    const { bookmarks } = useContext(BookmarkContext);

    if (!user) {
        return <Navigate to="/auth/login" />;
    }

    return (
        <div className="relative min-h-screen overflow-x-hidden text-gray-200 selection:bg-primary/30 selection:text-white pb-0 neon-grid flex flex-col">
            {/* Ambient Background Glows */}
            <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
            
            <AIAssistant />

            <div className="relative z-10 w-full flex flex-col min-h-screen">
                <header>
                    <nav className='w-full border-b border-white/5 bg-base-100/50 backdrop-blur-md sticky top-0 z-50 mb-6'>
                        <div className="w-11/12 mx-auto pt-2">
                           <Navbar></Navbar>
                        </div>
                    </nav>
                </header>
                
                <main className='w-11/12 mx-auto flex-grow flex flex-col'>
                    {/* User Info Header */}
                    <div className="glass-panel p-8 mb-10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full"></div>
                        
                        <div className="w-32 h-32 rounded-full border-4 border-primary/40 bg-black/50 p-1 relative shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                            <div className="w-full h-full rounded-full overflow-hidden bg-primary/20 flex items-center justify-center">
                                {user.photoURL ? (
                                    <img src={user.photoURL} alt="User Avatar" className="w-full h-full object-cover" />
                                ) : (
                                    <span className="text-4xl font-bold text-primary">{user.email?.charAt(0).toUpperCase()}</span>
                                )}
                            </div>
                            <div className="absolute bottom-1 right-1 w-6 h-6 bg-success rounded-full border-2 border-black animate-pulse shadow-[0_0_10px_rgba(74,222,128,1)]"></div>
                        </div>

                        <div className="flex-grow text-center md:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-3">
                                Security Clearance: Level 4
                            </div>
                            <h1 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight">
                                {user.displayName || "Anonymous Operative"}
                            </h1>
                            <p className="text-gray-400 font-mono text-sm">{user.email}</p>
                        </div>

                        <div className="flex flex-col gap-3 min-w-[200px]">
                            <div className="bg-black/40 border border-white/10 rounded-lg p-3 text-center">
                                <p className="text-gray-500 text-xs font-bold uppercase mb-1">Saved Streams</p>
                                <p className="text-2xl font-black glow-text">{bookmarks.length}</p>
                            </div>
                            <button onClick={logout} className="btn btn-outline border-error/50 text-error hover:bg-error hover:text-white rounded-lg">
                                Disconnect Session
                            </button>
                        </div>
                    </div>

                    {/* Bookmarked Streams Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 inline-flex items-center gap-3 w-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                            </svg>
                            Archived Neural Data Streams
                        </h2>

                        {bookmarks.length === 0 ? (
                            <div className="glass-panel p-16 text-center border-dashed border-white/20">
                                <div className="w-20 h-20 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-400 mb-2">Archive Cache Empty</h3>
                                <p className="text-gray-500 max-w-sm mx-auto">You have not bookmarked any datastreams. Click the glowing bookmark icon on any news feed to archive it here.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                                {bookmarks.map(news => (
                                    <NewsCard key={news._id} news={news} />
                                ))}
                            </div>
                        )}
                    </div>
                </main>
                
                <AIFooter />
            </div>
        </div>
    );
};

export default ProfileDashboard;
