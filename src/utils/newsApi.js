// CACHE
const newsCache = {};

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

// FETCH NEWS FUNCTION WITH FALLBACK
export const fetchNews = async (categoryId) => {
    const catId = categoryId?.toString() || "0";

    // CACHE CHECK
    if (newsCache[catId]) return newsCache[catId];

    try {
        const response = await fetch(`${API_BASE_URL}/api/news/${catId}`);
        if (!response.ok) throw new Error("Neural Link Severed");
        const data = await response.json();
        newsCache[catId] = data;
        return data;
    } catch (err) {
        console.error("Critical neural-fetch failed:", err);
        return [];
    }
};

// FETCH SINGLE ARTICLE DETAILS (OPTIONAL)
export const fetchArticleDetails = async () => null;