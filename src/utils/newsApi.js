// ENV VARIABLES
const CURRENTS_KEY = import.meta.env.VITE_CURRENTS_API_KEY;
const CURRENTS_BASE = import.meta.env.VITE_CURRENTS_BASE_URL;

const GNEWS_KEY = import.meta.env.VITE_GNEWS_API_KEY;
const GNEWS_BASE = import.meta.env.VITE_GNEWS_BASE_URL;

// CATEGORY MAP
const CATEGORY_MAP = {
    '0': { currents: 'general', gnews: 'general' },
    '1': { currents: 'world', gnews: 'world' },
    '2': { currents: 'business', gnews: 'business' },
    '3': { currents: 'technology', gnews: 'technology' },
    '4': { currents: 'health', gnews: 'health' },
    '5': { currents: 'sports', gnews: 'sports' },
    '6': { currents: 'entertainment', gnews: 'entertainment' },
    '7': { currents: 'science', gnews: 'science' },
    '8': { currents: 'politics', gnews: 'nation' },
    '9': { currents: 'academia', gnews: 'general' },
    '10': { currents: 'lifestyle', gnews: 'general' }
};

// CACHE
const newsCache = {};

// MAP CURRENTS DATA
const mapCurrentsData = (article, index) => ({
    _id: article.id || btoa(article.url || article.title).slice(0, 12) + "cur" + index,
    category_id: 1,
    rating: { number: 4 + Math.random(), badge: "Currents Verified" },
    total_view: Math.floor(Math.random() * 1500) + 200,
    title: article.title,
    author: {
        name: article.author || "Currents Source",
        published_date: article.published,
        img: `https://ui-avatars.com/api/?name=${article.author?.split(' ')[0] || 'C'}`
    },
    thumbnail_url: article.image !== "None" ? article.image : "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
    image_url: article.image !== "None" ? article.image : "https://images.unsplash.com/photo-1504711434969-e33886168f5c",
    details: article.description || article.content || "",
    short_details: article.description || "",
    others: { is_today_pick: index < 1, is_trending: index % 4 === 0 },
    source_url: article.url,
    api_source: "currents"
});

// MAP GNEWS DATA
const mapGNewsData = (article, index) => ({
    _id: btoa(article.url || article.title).slice(0, 12) + "gn" + index,
    category_id: 1,
    rating: { number: 4 + Math.random(), badge: "GNews Verified" },
    total_view: Math.floor(Math.random() * 2000) + 500,
    title: article.title,
    author: {
        name: article.source?.name || "GNews Source",
        published_date: article.publishedAt,
        img: `https://ui-avatars.com/api/?name=${article.source?.name?.split(' ')[0] || 'G'}`
    },
    thumbnail_url: article.image || "https://images.unsplash.com/photo-1495020689067-9588ac2ed155",
    image_url: article.image || "https://images.unsplash.com/photo-1495020689067-9588ac2ed155",
    details: article.content || article.description || "",
    short_details: article.description || "",
    others: { is_today_pick: index < 1, is_trending: index % 5 === 0 },
    source_url: article.url,
    api_source: "gnews"
});

// FETCH NEWS FUNCTION WITH FALLBACK
export const fetchNews = async (categoryId) => {
    const catId = categoryId?.toString() || "0";

    // CACHE CHECK
    if (newsCache[catId]) return newsCache[catId];

    const catConfig = CATEGORY_MAP[catId] || CATEGORY_MAP["0"];

    const currentsUrl = `${CURRENTS_BASE}/search?category=${catConfig.currents}&language=en&apiKey=${CURRENTS_KEY}`;
    const gnewsUrl = `${GNEWS_BASE}/top-headlines?category=${catConfig.gnews}&lang=en&apikey=${GNEWS_KEY}`;

    let combinedArticles = [];

    // Localhost only: Currents API
    if (process.env.NODE_ENV === 'development') {
        try {
            const res = await fetch(currentsUrl);
            const data = await res.json();
            if (data.status === "ok" && data.news) {
                combinedArticles = data.news.map(mapCurrentsData);
                console.log(`[Neural Link] Fetched ${combinedArticles.length} articles from Currents`);
            }
        } catch (err) {
            console.warn("Currents API failed locally:", err);
        }
    }

    // Always try GNews
    try {
        const res = await fetch(gnewsUrl);
        const data = await res.json();
        if (data.articles) {
            const gArticles = data.articles.map(mapGNewsData);
            combinedArticles = [...combinedArticles, ...gArticles];
            console.log(`[Neural Link] Fetched ${gArticles.length} articles from GNews`);
        }
    } catch (err) {
        console.error("GNews API failed:", err);
    }

    // DE-DUPLICATE BY TITLE
    const uniqueArticles = Array.from(new Map(combinedArticles.map(a => [a.title?.toLowerCase(), a])).values());

    // SORT BY DATE DESC
    const sorted = uniqueArticles.sort((a, b) => {
        const dateA = new Date(a.author.published_date || 0);
        const dateB = new Date(b.author.published_date || 0);
        return dateB - dateA;
    });

    newsCache[catId] = sorted;
    return sorted;
};

// FETCH SINGLE ARTICLE DETAILS (OPTIONAL)
export const fetchArticleDetails = async () => null;