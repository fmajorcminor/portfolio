import { Link, useNavigate } from "react-router-dom";
import { usePosts } from "../components/usePosts";

function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export default function BlogIndex() {
    const { posts, loading } = usePosts();
    const navigate = useNavigate();

    if (loading) return <p className="blog-loading">Loading posts...</p>;

    return (
        <main className="blog-index">
            <button
                onClick={() => navigate("/")}
                style={{
                    cursor: "pointer",
                    fontSize: "30px",
                    fontFamily: "LexingtonGothic",
                    backgroundColor: "lightgray",
                    height: 36,
                    padding: 12,
                }}
            >
                Home
            </button>
            <h1>Blog</h1>

            {posts.length === 0 && <p>No posts yet — check back soon.</p>}

            <ul className="post-list">
                {posts.map((post) => (
                    <li key={post.slug} className="post-card">
                        <Link to={`/blog/${post.slug}`}>
                            <h2>{post.title}</h2>
                        </Link>
                        <time dateTime={post.date}>
                            {formatDate(post.date)}
                        </time>
                        {post.description && <p>{post.description}</p>}
                        {post.tags?.length > 0 && (
                            <ul className="tag-list">
                                {post.tags.map((tag) => (
                                    <li key={tag} className="tag">
                                        {tag}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </main>
    );
}
