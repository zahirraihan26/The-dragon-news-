const CURRENTS_KEY = import.meta.env.VITE_CURRENTS_API_KEY;
const CURRENTS_BASE = import.meta.env.VITE_CURRENTS_BASE_URL;

const GNEWS_KEY = import.meta.env.VITE_GNEWS_API_KEY;
const GNEWS_BASE = import.meta.env.VITE_GNEWS_BASE_URL;

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
    const catId = categoryId?.toString() || '0';
    const catConfig = CATEGORY_MAP[catId] || CATEGORY_MAP['0'];
    const timestamp = new Date().getTime();

    const currentsUrl = `${CURRENTS_BASE}/search?category=${catConfig.currents}&language=en&apiKey=${CURRENTS_KEY}&_t=${timestamp}`;
    const gnewsUrl = `${GNEWS_BASE}/top-headlines?category=${catConfig.gnews}&lang=en&apikey=${GNEWS_KEY}&_t=${timestamp}`;

    console.log(`[Neural Link] Categorizing ID ${catId} | Sources: Currents, GNews`);

    try {
        const [currentsRes, gnewsRes] = await Promise.allSettled([
            fetch(currentsUrl).then(res => res.json()),
            fetch(gnewsUrl).then(res => res.json())
        ]);

        let combinedArticles = [];

        if (currentsRes.status === 'fulfilled' && currentsRes.value.status === 'ok' && currentsRes.value.news) {
            combinedArticles = [...combinedArticles, ...currentsRes.value.news.map((a, i) => mapCurrentsData(a, i))];
        }

        if (gnewsRes.status === 'fulfilled' && gnewsRes.value.articles) {
            combinedArticles = [...combinedArticles, ...gnewsRes.value.articles.map((a, i) => mapGNewsData(a, i))];
        }

        // De-duplicate by title
        const uniqueArticles = Array.from(new Map(combinedArticles.map(item => [item.title?.toLowerCase(), item])).values());
        
        // Final Sort: Newest First
        const sorted = uniqueArticles.sort((a, b) => {
            const dateA = new Date(a.author.published_date || 0);
            const dateB = new Date(b.author.published_date || 0);
            return dateB - dateA;
        });

        console.log(`[Neural Link] Success. ID ${catId} yielded ${sorted.length} unique datastreams.`);
        return sorted;

    } catch (error) {
        console.error("Critical neural-fetch failed:", error);
        return [];
    }
};

export const fetchArticleDetails = async (id, titleQuery) => {
    // NewsAPI deep search removed as per requirement. 
    // Article details are now managed via state sharing between components.
    return null;
};
