
const modules = import.meta.glob('../blogs/*.jsx', { eager: true });

export const getAllBlogs = () => {
    return Object.values(modules).map((module) => ({
        ...module.metadata,
        component: module.default,
    }))
        .filter(blog => blog.slug && blog.title)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getLatestBlogs = (count = 5) => {
    return getAllBlogs().slice(0, count);
};

export const getBlogsByCategory = (categorySlug) => {
    const toSlug = (name) => `/${name.toLowerCase()}`;

    return getAllBlogs().filter(blog => {
        const blogSlug = toSlug(blog.category);
        const targetSlug = categorySlug.startsWith('/') ? categorySlug : `/${categorySlug}`;
        return blogSlug === targetSlug;
    });
};

export const getBlogBySlug = (slug) => {
    return getAllBlogs().find((blog) => blog.slug === slug);
};
