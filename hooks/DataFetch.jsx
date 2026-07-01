import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PAGE_SIZE = 20

const DataFetch = () => {
    const [posts, setPost] = useState([])
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchPosts = async () => {
        setLoading(true)
        setError(null)
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setPost(res.data || [])
        } catch (err) {
            setError('Failed to load posts. Please try again.')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    const visiblePosts = posts.slice(0, visibleCount)

    const handleLoadMore = () => {
        setVisibleCount((c) => Math.min(c + PAGE_SIZE, posts.length))
    }

    if (loading) {
        return <div className="py-8 text-center">Loading posts…</div>
    }

    if (error) {
        return (
            <div className="py-8 text-center">
                <p className="mb-4 text-red-600">{error}</p>
                <button
                    type="button"
                    className="rounded-md bg-slate-800 px-4 py-2 text-white hover:bg-slate-900"
                    onClick={fetchPosts}
                >
                    Retry
                </button>
            </div>
        )
    }

    return (
        <div>
            <div className="mb-4 text-sm text-slate-600">
                Showing {visiblePosts.length} of {posts.length} posts
            </div>

            {visiblePosts.map((post) => (
                <article key={post.id} className="mb-6 rounded-md border p-4 shadow-sm bg-white">
                    <h2 className="text-lg font-semibold">{post.title}</h2>
                    <p className="text-sm text-slate-700 mt-2">{post.body}</p>
                </article>
            ))}

            {visibleCount < posts.length ? (
                <div className="mt-4 text-center">
                    <button
                        type="button"
                        className="rounded-md bg-slate-800 px-4 py-2 text-white hover:bg-slate-900"
                        onClick={handleLoadMore}
                    >
                        Load more ({Math.min(PAGE_SIZE, posts.length - visibleCount)} more)
                    </button>
                </div>
            ) : (
                posts.length > 0 && (
                    <div className="mt-4 text-center text-sm text-slate-600">No more posts</div>
                )
            )}
        </div>
    )
}

export default DataFetch