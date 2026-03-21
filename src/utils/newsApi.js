const API_KEY = '8396e1901562430d8f556d968fddf0bd';
const BASE_URL = 'https://newsapi.org/v2';

const CATEGORY_MAP = {
    '0': 'general',       // All News
    '1': 'general',       // Breaking News
    '2': 'business',      // Business
    '3': 'technology',    // Technology
    '4': 'health',        // Health
    '5': 'sports',        // Sports
    '6': 'entertainment', // Entertainment
    '7': 'science',       // Science
    '8': 'politics',      // Politics (Not a category, but we'll handle below)
    '9': 'education',     // Education
    '10': 'lifestyle'     // Lifestyle
};

// Map NewsAPI article to Dragon News format
export const mapApiData = (article, index) => {
    // We use the URL as a base for a unique ID
    const _id = btoa(article.url).slice(0, 12) + index;
    
    return {
        _id,
        category_id: 1, // Default or mapped
        rating: {
            number: 4 + Math.random(),
            badge: "Excellent"
        },
        total_view: Math.floor(Math.random() * 1000) + 100,
        title: article.title,
        author: {
            name: article.author || article.source.name || "AI Nexus Agent",
            published_date: article.publishedAt,
            img: `https://ui-avatars.com/api/?name=${article.author || 'AI'}&background=06b6d4&color=fff`
        },
        thumbnail_url: article.urlToImage || "https://images.unsplash.com/photo-1585241936939-be4099591252?auto=format&fit=crop&q=80&w=800",
        image_url: article.urlToImage || "https://images.unsplash.com/photo-1585241936939-be4099591252?auto=format&fit=crop&q=80&w=1200",
        details: article.content || article.description || "Quantum data stream encrypted. Use biometric scan for full access.",
        short_details: article.description || "",
        others: {
            is_today_pick: index < 2,
            is_trending: index % 3 === 0
        },
        source_url: article.url
    };
};

export const fetchNews = async (categoryId) => {
    const categoryName = CATEGORY_MAP[categoryId] || 'general';
    let url = "";

    // If it's politics, education, lifestyle we use 'everything' endpoint with 'q'
    if (['8', '9', '10'].includes(categoryId.toString())) {
        const query = categoryId === '8' ? 'politics' : categoryId === '9' ? 'education' : 'lifestyle';
        url = `${BASE_URL}/everything?q=${query}&sortBy=publishedAt&apiKey=${API_KEY}`;
    } else {
        url = `${BASE_URL}/top-headlines?category=${categoryName}&language=en&apiKey=${API_KEY}`;
    }

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.status === 'ok') {
            return data.articles.map((article, idx) => mapApiData(article, idx));
        } else {
            console.error("NewsAPI Error:", data.message);
            return [];
        }
    } catch (error) {
        console.error("Fetch failed:", error);
        return [];
    }
};

export const fetchArticleDetails = async (id, titleQuery) => {
    // Since we don't have a direct ID fetch, we search for the title
    const url = `${BASE_URL}/everything?q="${encodeURIComponent(titleQuery)}"&apiKey=${API_KEY}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.status === 'ok' && data.articles.length > 0) {
            return mapApiData(data.articles[0], 0);
        }
        return null;
    } catch (error) {
        console.error("Details fetch failed:", error);
        return null;
    }
};
