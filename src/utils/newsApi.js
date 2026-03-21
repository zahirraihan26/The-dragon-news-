const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = import.meta.env.VITE_NEWS_BASE_URL;

const CURRENTS_KEY = import.meta.env.VITE_CURRENTS_API_KEY;
const CURRENTS_BASE = import.meta.env.VITE_CURRENTS_BASE_URL;

const GNEWS_KEY = import.meta.env.VITE_GNEWS_API_KEY;
const GNEWS_BASE = import.meta.env.VITE_GNEWS_BASE_URL;

const CATEGORY_MAP = {
    '0': { news: 'general', currents: 'general', gnews: 'general', q: 'latest' },
    '1': { news: 'general', currents: 'world', gnews: 'world', q: 'breaking' },
    '2': { news: 'business', currents: 'business', gnews: 'business', q: 'business' },
    '3': { news: 'technology', currents: 'technology', gnews: 'technology', q: 'tech' },
    '4': { news: 'health', currents: 'health', gnews: 'health', q: 'health' },
    '5': { news: 'sports', currents: 'sports', gnews: 'sports', q: 'sports' },
    '6': { news: 'entertainment', currents: 'entertainment', gnews: 'entertainment', q: 'entertainment' },
    '7': { news: 'science', currents: 'science', gnews: 'science', q: 'science' },
    '8': { news: 'general', currents: 'politics', gnews: 'nation', q: 'politics' },
    '9': { news: 'general', currents: 'academia', gnews: 'general', q: 'education' },
    '10': { news: 'general', currents: 'lifestyle', gnews: 'general', q: 'lifestyle' }
};

// Map NewsAPI article to Dragon News format
export const mapApiData = (article, index) => {
    // We use the URL as a base for a unique ID
    const _id = btoa(article.url || article.title).slice(0, 12) + index;
    
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
            name: article.author || article.source?.name || "AI Nexus Agent",
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

// Map CurrentsAPI article to Dragon News format
export const mapCurrentsData = (article, index) => {
    const _id = article.id || btoa(article.url || article.title).slice(0, 12) + "cur" + index;
    return {
        _id,
        category_id: 1,
        rating: {
            number: 4 + Math.random(),
            badge: "Neural Verified"
        },
        total_view: Math.floor(Math.random() * 1500) + 200,
        title: article.title,
        author: {
            name: article.author || "Currents Node",
            published_date: article.published,
            img: `https://ui-avatars.com/api/?name=${article.author?.split(' ')[0] || 'C'}&background=8b5cf6&color=fff`
        },
        thumbnail_url: article.image !== "None" ? article.image : "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800",
        image_url: article.image !== "None" ? article.image : "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=1200",
        details: article.description || article.content || "Encrypted signal detected. Decrypting...",
        short_details: article.description || "",
        others: {
            is_today_pick: index < 1,
            is_trending: index % 4 === 0
        },
        source_url: article.url,
        api_source: "currents"
    };
};

// Map GNews article to Dragon News format
export const mapGNewsData = (article, index) => {
    const _id = btoa(article.url || article.title).slice(0, 12) + "gn" + index;
    return {
        _id,
        category_id: 1,
        rating: {
            number: 4 + Math.random(),
            badge: "G-Network Verified"
        },
        total_view: Math.floor(Math.random() * 2000) + 500,
        title: article.title,
        author: {
            name: article.source?.name || "G-Source Node",
            published_date: article.publishedAt,
            img: `https://ui-avatars.com/api/?name=${article.source?.name?.split(' ')[0] || 'G'}&background=ef4444&color=fff`
        },
        thumbnail_url: article.image || "https://images.unsplash.com/photo-1495020689067-9588ac2ed155?auto=format&fit=crop&q=80&w=800",
        image_url: article.image || "https://images.unsplash.com/photo-1495020689067-9588ac2ed155?auto=format&fit=crop&q=80&w=1200",
        details: article.content || article.description || "Quantum feed intercepted. Source: GNews Mesh.",
        short_details: article.description || "",
        others: {
            is_today_pick: index < 1,
            is_trending: index % 5 === 0
        },
        source_url: article.url,
        api_source: "gnews"
    };
};

export const fetchNews = async (categoryId) => {
    // Ensure categoryId is a string for lookup
    const catId = categoryId?.toString() || '0';
    const catConfig = CATEGORY_MAP[catId] || CATEGORY_MAP['0'];
    
    // Cache busting timestamp
    const timestamp = new Date().getTime();

    // Use NewsAPI 'everything' if category isn't standard, otherwise 'top-headlines'
    const isStandardNewsApiCat = ['2', '3', '4', '5', '6', '7'].includes(catId);
    
    let newsApiUrl;
    if (isStandardNewsApiCat) {
        newsApiUrl = `${BASE_URL}/top-headlines?category=${catConfig.news}&language=en&apiKey=${API_KEY}&_t=${timestamp}`;
    } else {
        newsApiUrl = `${BASE_URL}/everything?q=${catConfig.q}&sortBy=publishedAt&language=en&apiKey=${API_KEY}&_t=${timestamp}`;
    }
    
    const currentsUrl = `${CURRENTS_BASE}/search?category=${catConfig.currents}&language=en&apiKey=${CURRENTS_KEY}&_t=${timestamp}`;
    const gnewsUrl = `${GNEWS_BASE}/top-headlines?category=${catConfig.gnews}&lang=en&apikey=${GNEWS_KEY}&_t=${timestamp}`;

    console.log(`[Triple Link] Categorizing ID ${catId} | Sources: NewsAPI, Currents, GNews`);

    try {
        const [newsRes, currentsRes, gnewsRes] = await Promise.allSettled([
            fetch(newsApiUrl).then(res => res.json()),
            fetch(currentsUrl).then(res => res.json()),
            fetch(gnewsUrl).then(res => res.json())
        ]);

        let combinedArticles = [];

        if (newsRes.status === 'fulfilled' && newsRes.value.status === 'ok') {
            const articles = newsRes.value.articles || [];
            combinedArticles = [...combinedArticles, ...articles.map((a, i) => mapApiData(a, i))];
        }

        if (currentsRes.status === 'fulfilled' && currentsRes.value.status === 'ok' && currentsRes.value.news) {
            combinedArticles = [...combinedArticles, ...currentsRes.value.news.map((a, i) => mapCurrentsData(a, i))];
        }

        if (gnewsRes.status === 'fulfilled' && gnewsRes.value.articles) {
            combinedArticles = [...combinedArticles, ...gnewsRes.value.articles.map((a, i) => mapGNewsData(a, i))];
        }

        // De-duplicate by title (Case Insensitive)
        const uniqueArticles = Array.from(new Map(combinedArticles.map(item => [item.title?.toLowerCase(), item])).values());
        
        // Final Sort: Newest First
        const sorted = uniqueArticles.sort((a, b) => {
            const dateA = new Date(a.author.published_date || 0);
            const dateB = new Date(b.author.published_date || 0);
            return dateB - dateA;
        });

        console.log(`[Triple Link] Success. ID ${catId} yielded ${sorted.length} unique datastreams.`);
        return sorted;

    } catch (error) {
        console.error("Critical triple-fetch failed:", error);
        return [];
    }
};

export const fetchArticleDetails = async (id, titleQuery) => {
    // Attempt NewsAPI search
    try {
        const url = `${BASE_URL}/everything?q="${encodeURIComponent(titleQuery)}"&apiKey=${API_KEY}`;
        const res = await fetch(url).then(r => r.json());
        if (res.status === 'ok' && res.articles.length > 0) return mapApiData(res.articles[0], 0);
    } catch (err) {
        console.warn("Deep search fetch aborted:", err);
    }

    // Fallback or attempt to find among latest (Currents doesn't have good 'search by title' for free)
    return null;
};
