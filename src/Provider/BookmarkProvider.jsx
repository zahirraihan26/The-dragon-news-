import React, { createContext, useState, useEffect } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const BookmarkContext = createContext();

const BookmarkProvider = ({ children }) => {
    const [bookmarks, setBookmarks] = useState([]);

    // Load from local storage on mount
    useEffect(() => {
        const stored = localStorage.getItem('nexus_bookmarks');
        if (stored) {
            setBookmarks(JSON.parse(stored));
        }
    }, []);

    const toggleBookmark = (news) => {
        let updatedBookmarks = [...bookmarks];
        const exists = updatedBookmarks.find(b => b._id === news._id);
        
        if (exists) {
            updatedBookmarks = updatedBookmarks.filter(b => b._id !== news._id);
        } else {
            updatedBookmarks.push(news);
        }
        
        setBookmarks(updatedBookmarks);
        localStorage.setItem('nexus_bookmarks', JSON.stringify(updatedBookmarks));
    };

    const isBookmarked = (id) => {
        return bookmarks.some(b => b._id === id);
    };

    return (
        <BookmarkContext.Provider value={{ bookmarks, toggleBookmark, isBookmarked }}>
            {children}
        </BookmarkContext.Provider>
    );
};

export default BookmarkProvider;
