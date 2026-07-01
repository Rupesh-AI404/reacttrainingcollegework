import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

const Post = () => {
    let params = useParams();
    const id = params.id;

    let [post, setPost] = useState({})

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
            setPost(response.data)
        })
        .catch((error) => {
            console.error('Error fetching post:', error)
        })
    }, [])

  return (
    <div>Post</div>
  )
}

export default Post