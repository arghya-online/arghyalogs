/**
 * Calculates the estimated reading time for a given text.
 * Assumes an average reading speed of 200 words per minute.
 * 
 * @param {string} text - The plain text content of the article.
 * @returns {string} - The estimated reading time string (e.g., "3 min read").
 */
export const getReadingTime = (text) => {
    if (!text) return "1 min read";

    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / 200);

    // Ensure at least 1 minute
    const readingTime = Math.max(1, minutes);

    return `${readingTime} min read`;
};
