const getBaseUrl = () => {
    // Uses the environment variable if available, otherwise falls back to localhost
    return import.meta.env.VITE_API_URL || "http://localhost:5000";
}
export default getBaseUrl;
