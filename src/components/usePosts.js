import { useEffect, useState } from "react";
import matter from "gray-matter";

/**
 * Loads all markdown files from src/posts/ using Vite's import.meta.glob.
 * Returns posts sorted newest-first, with drafts filtered out in production.
 */
const postFiles = import.meta.glob("../posts/*.md", {
    as: "raw",
    eager: false,
});

export function usePosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            const loaded = await Promise.all(
                Object.entries(postFiles).map(async ([path, importer]) => {
                    const raw = await importer();
                    const { data, content } = matter(raw);
                    const slug = path
                        .replace("../posts/", "")
                        .replace(/\.md$/, "")
                        // strip leading date prefix (YYYY-MM-DD-) if present
                        .replace(/^\d{4}-\d{2}-\d{2}-/, "");

                    return { slug, content, ...data };
                }),
            );

            const isDev = import.meta.env.DEV;
            const filtered = loaded
                .filter((p) => isDev || !p.draft)
                .sort((a, b) => new Date(b.date) - new Date(a.date));

            setPosts(filtered);
            setLoading(false);
        }

        load();
    }, []);

    return { posts, loading };
}

export function usePost(slug) {
    const { posts, loading } = usePosts();
    const post = posts.find((p) => p.slug === slug) ?? null;
    return { post, loading };
}
