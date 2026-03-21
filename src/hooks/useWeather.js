import { useState, useEffect } from 'react';

const useWeather = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [location, setLocation] = useState({ city: "Dhaka", isDefault: true });

    const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

    const fetchWeather = async (lat, lon, city = null) => {
        try {
            setLoading(true);
            let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${API_KEY}`;
            if (lat && lon) {
                url += `&lat=${lat}&lon=${lon}`;
            } else if (city) {
                url += `&q=${city}`;
            }

            const response = await fetch(url);
            if (!response.ok) throw new Error("Atmospheric Link Severed");
            const data = await response.json();
            setWeather(data);
            setLocation({ city: data.name, isDefault: !lat });
            setError(null);
        } catch (err) {
            console.error("Weather sync failed:", err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!API_KEY) {
            setError("API Key Missing");
            setLoading(false);
            return;
        }

        // Try to get user location
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    fetchWeather(position.coords.latitude, position.coords.longitude);
                },
                (err) => {
                    console.warn("Geolocation denied, falling back to default city.");
                    fetchWeather(null, null, "Dhaka");
                }
            );
        } else {
            fetchWeather(null, null, "Dhaka");
        }

        const interval = setInterval(() => {
            if (weather && !weather.isDefault && "geolocation" in navigator) {
                 navigator.geolocation.getCurrentPosition(
                    (position) => fetchWeather(position.coords.latitude, position.coords.longitude),
                    () => fetchWeather(null, null, location.city)
                );
            } else {
                fetchWeather(null, null, location.city);
            }
        }, 600000); // 10 mins

        return () => clearInterval(interval);
    }, [API_KEY]);

    return { weather, loading, error, location };
};

export default useWeather;
