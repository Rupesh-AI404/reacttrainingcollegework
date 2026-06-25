import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const DataFetch = () => {
    let [posts, setPost] = React.useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => 
                {
                    return response.json();
                })
            .then((data) => setPost(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

  return (
    <div>
        {posts.map((post) => (
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>
        ))}
    </div>
  )
}

export default DataFetch