import { useState, useEffect } from 'react';

const useWeather = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [location, setLocation] = useState({ city: "Dhaka", isDefault: true });

    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";

    const fetchWeather = async (lat, lon, city = null) => {
        try {
            setLoading(true);
            let url = `${API_BASE_URL}/api/weather?`;
            
            if (lat && lon) {
                url += `lat=${lat}&lon=${lon}`;
            } else {
                url += `city=${city || 'Dhaka'}`;
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
        // Try to get user location
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    fetchWeather(position.coords.latitude, position.coords.longitude);
                },
                () => {
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
    }, [location.city, weather]);

    return { weather, loading, error, location };
};

export default useWeather;
