// CACHE
const newsCache = {};

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

// FETCH NEWS FUNCTION WITH PAGINATION
export const fetchNews = async (categoryId, page = 1, limit = 10) => {
    const catId = categoryId?.toString() || "0";
    const cacheKey = `${catId}_${page}_${limit}`;

    // CACHE CHECK
    if (newsCache[cacheKey]) return newsCache[cacheKey];

    try {
        const response = await fetch(`${API_BASE_URL}/api/news/${catId}?page=${page}&limit=${limit}`);
        if (!response.ok) throw new Error("Neural Link Severed");
        const data = await response.json();
        
        // We store the whole response (including total) in cache
        newsCache[cacheKey] = data;
        return data;
    } catch (err) {
        console.error("Critical neural-fetch failed:", err);
        return { data: [], total: 0, page, limit };
    }
};

// FETCH SINGLE ARTICLE DETAILS (OPTIONAL)
export const fetchArticleDetails = async () => null;