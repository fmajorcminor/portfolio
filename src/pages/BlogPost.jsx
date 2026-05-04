import { useParams, Link } from "react-router-dom";
import { usePost } from "../components/usePosts";
import ReactMarkdown from "react-markdown";

function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export default function BlogPost() {
    const { slug } = useParams();
    const { post, loading } = usePost(slug);

    if (loading) return <p className="blog-loading">Loading...</p>;
    if (!post)
        return (
            <main className="blog-post">
                <p>
                    Post not found. <Link to="/blog">← Back to blog</Link>
                </p>
            </main>
        );

    return (
        <main className="blog-post">
            <Link to="/blog" className="back-link">
                ← All posts
            </Link>

            <article>
                <header>
                    <h1>{post.title}</h1>
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    {post.tags?.length > 0 && (
                        <ul className="tag-list">
                            {post.tags.map((tag) => (
                                <li key={tag} className="tag">
                                    {tag}
                                </li>
                            ))}
                        </ul>
                    )}
                </header>

                <div className="post-body">
                    <ReactMarkdown>{post.content}</ReactMarkdown>
                </div>
            </article>
        </main>
    );
}
